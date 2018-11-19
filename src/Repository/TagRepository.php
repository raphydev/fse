<?php

namespace App\Repository;

use App\Entity\Tag;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Tag|null find($id, $lockMode = null, $lockVersion = null)
 * @method Tag|null findOneBy(array $criteria, array $orderBy = null)
 * @method Tag[]    findAll()
 * @method Tag[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TagRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Tag::class);
    }

    /**
     * @return mixed
     */
    public function findByGalleryOnline() {
        $qb = $this->createQueryBuilder('t');
        $qb->leftJoin('t.galleries', 'g', Expr\Join::WITH, $qb->expr()->eq('g.online', 1));
        $qb->addSelect('g');
        $qb->where($qb->expr()->isNotNull('g'));
        $qb->orderBy('t.name', 'ASC');
        return $qb->getQuery()->getResult();
    }

    /**
     * @param null $name
     * @return mixed
     */
    public function findRapportByTagName($name = null)
    {
        return $qb = $this->createQueryBuilder('t')
            ->leftJoin('t.rapports', 'r')
            ->addSelect('r')
            ->where('t.hash = :name')
            ->setParameter('name', $name)
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @return Tag[] Returns an array of Tag objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Tag
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
