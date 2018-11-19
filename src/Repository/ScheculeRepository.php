<?php

namespace App\Repository;

use App\Entity\Schecule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Schecule|null find($id, $lockMode = null, $lockVersion = null)
 * @method Schecule|null findOneBy(array $criteria, array $orderBy = null)
 * @method Schecule[]    findAll()
 * @method Schecule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScheculeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Schecule::class);
    }

//    /**
//     * @return Schecule[] Returns an array of Schecule objects
//     */

    public function findAllWithPrograms()
    {
        return $this->createQueryBuilder('s')
            ->leftJoin('s.programs', 'p')
            ->addSelect('p')
            ->orderBy('s.id', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

    /*
    public function findOneBySomeField($value): ?Schecule
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
