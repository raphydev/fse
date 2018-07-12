<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class EntrepreneurController
 * @package App\Controller
 * @Route("/admin/entrepreneur")
 */
class EntrepreneurController extends Controller
{
    /**
     * @Route("/", name="entrepreneur")
     */
    public function index()
    {
        return $this->render('admin/entrepreneur/index.html.twig');
    }
}
