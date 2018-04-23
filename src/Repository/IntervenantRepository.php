<?php

namespace App\Repository;

use App\Entity\Intervenant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Intervenant|null find($id, $lockMode = null, $lockVersion = null)
 * @method Intervenant|null findOneBy(array $criteria, array $orderBy = null)
 * @method Intervenant[]    findAll()
 * @method Intervenant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IntervenantRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Intervenant::class);
    }

    /**
     * @return Intervenant[] findAllGreaterThanIntervenant
     */
    public function findAllGreaterThanIntervenant()
    {
        return $this->createQueryBuilder('i')
            ->orderBy('i.position', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

    /*
    public function findOneBySomeField($value): ?Intervenant
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
