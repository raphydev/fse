<?php

namespace App\Repository;

use App\Entity\Part;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\ORM\Query\Expr\Join;

/**
 * @method Part|null find($id, $lockMode = null, $lockVersion = null)
 * @method Part|null findOneBy(array $criteria, array $orderBy = null)
 * @method Part[]    findAll()
 * @method Part[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PartRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Part::class);
    }

    /**
     * @return mixed
     */
    public function findPartAndProgramBySection()
    {
           $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.programs', 'programs')
            ->addSelect('programs');
            return $qb->getQuery()->getResult()
        ;
    }

    /*
    public function findOneBySomeField($value): ?Part
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
