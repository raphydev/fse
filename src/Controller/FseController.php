<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class FseController
 * @package App\Controller
 * @Route("/admin/fse")
 */
class FseController extends Controller
{
    /**
     * @Route("/", name="fse")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index()
    {
        return $this->render('fse/index.html.twig');
    }

}
