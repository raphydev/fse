<?php

namespace App\Repository;

use App\Entity\shareholder;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method shareholder|null find($id, $lockMode = null, $lockVersion = null)
 * @method shareholder|null findOneBy(array $criteria, array $orderBy = null)
 * @method shareholder[]    findAll()
 * @method shareholder[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ShareholderRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, shareholder::class);
    }

//    /**
//     * @return shareholder[] Returns an array of shareholder objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?shareholder
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
