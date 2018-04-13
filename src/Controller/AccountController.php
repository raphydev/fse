<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AccountController extends Controller
{
    /**
     * @Route("/account", name="account")
     */
    public function index()
    {
        return $this->render('account_page.html.twig', [
            'controller_name' => 'AccountController',
        ]);
    }
}
