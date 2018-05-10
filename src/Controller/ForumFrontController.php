<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 09/05/2018
 * Time: 11:49
 */

namespace App\Controller;


use App\Entity\Post;
use App\Repository\PostRepository;
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

    /**
     * @Route("/news", name="page_new", methods={"GET"})
     * @param PostRepository $postRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function blog(PostRepository $postRepository){
        return $this->render("front/forum/news.html.twig",[
            'posts' => $postRepository->findAll()
        ]);
    }

    /**
     * @Route("/news/{slug}", name="new_detail", methods={"GET"})
     * @param Post $post
     * @param PostRepository $postRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function blogDetail( Post $post ,PostRepository $postRepository) {
        return $this->render("front/forum/new_detail.html.twig", [
            'post' => $post
        ]);
    }
}