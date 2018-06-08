<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 01/06/2018
 * Time: 09:48
 */

namespace App\Service;


use App\Entity\Users;
use Doctrine\ORM\EntityManagerInterface;

class DraftGenerator
{

    private $em;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->em = $entityManager;
    }

    /**
     * @param $user
     * @param $entity
     * @return mixed|null|object|void
     * @throws \Exception
     */
    public function DraftCreate($user, $entity)
    {
        if (!$user instanceof Users) { return; }
        $entityName = $this->getEntityClassName($entity);
        $options = ['online' => -1, 'user' => $user];
        $draft = $this->em->getRepository($entityName)->findOneBy($options);
        if(null !== $draft){
            return $draft;
        }else{
            return $this->persistDraft($user, $entityName);
        }
    }

    /**
     * @param $user
     * @param $entityName
     * @return mixed
     */
    private function persistDraft($user, $entityName)
    {
        $entityName->setOnline(-1);
        $entityName->setUser($user);
        $this->em->persist($entityName);
        $this->em->flush();
        return $entityName;
    }
    /**
     * @param $entity
     * @return string
     */
    private function getEntityClassName($entity)
    {
        return $entity_class = $this->em->getClassMetadata(get_class($entity))->getName();
    }

}