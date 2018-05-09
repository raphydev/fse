<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ForumBackController
 * @package App\Controller
 * @Route("/admin/forum")
 */
class ForumBackController extends AbstractController
{
    /**
     * @Route("/", name="forum")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index()
    {
        return $this->render('admin/forum/index.html.twig');
    }

}
