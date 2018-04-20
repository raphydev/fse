<?php

namespace App\Controller;

use App\Entity\Users;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * Class AccountController
 * @package App\Controller
 * @Route("/account")
 */
class AccountController extends Controller
{
    /**
     * @Route("/", name="account")
     * @param TokenStorageInterface $storage
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(TokenStorageInterface $storage)
    {
        $user = $storage->getToken()->getUser();
        if ($user instanceof Users){
            if ($user->getIsActive() === true){
                return $this->redirectToRoute('homepage', array(), 301);
            }
        }
        return $this->render('account/account_page.html.twig');
    }

}
