<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 09/05/2018
 * Time: 11:49
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ForumFrontController
 * @package App\Controller
 * @Route("/forum")
 */
class ForumFrontController extends AbstractController
{
    /**
     * @Route("/initiative", methods={"GET"}, name="initiative")
     */
    public function initiativePage(){
        //return $this->render('')
    }
}