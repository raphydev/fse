<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin", methods={"GET"})
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(){
        return $this->render('admin/index.html.twig');
    }
}
