<?php

namespace App\Repository;

use App\Entity\Classification;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Classification|null find($id, $lockMode = null, $lockVersion = null)
 * @method Classification|null findOneBy(array $criteria, array $orderBy = null)
 * @method Classification[]    findAll()
 * @method Classification[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClassificationRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Classification::class);
    }

    public function findAllByPosition()
    {
        return $this->createQueryBuilder('c')
            ->leftJoin('c.partner','p')
            ->addSelect('p')
            ->orderBy('c.position', 'ASC')
            ->getQuery()
            ->getResult()
            ;
    }





//    /**
//     * @return Classification[] Returns an array of Classification objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Classification
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
