<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 09/05/2018
 * Time: 11:49
 */

namespace App\Controller;


use App\Entity\Post;
use App\Entity\Rapport;
use App\Repository\ClassificationRepository;
use App\Repository\IntervenantRepository;
use App\Repository\OrganizerRepository;
use App\Repository\PostRepository;
use App\Repository\RapportRepository;
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
     * @var PostRepository
     */
    private $postRepository;
    /**
     * @var OrganizerRepository
     */
    private $organizerRepository;

    public function __construct(PostRepository $postRepository, OrganizerRepository $organizerRepository )
    {
        $this->postRepository = $postRepository;
        $this->organizerRepository = $organizerRepository;
    }

    /**
     * @Route("/initiative", methods={"GET"}, name="initiative")
     */
    public function initiativePage(){
        return $this->render('front/forum/initiative.html.twig',[
            'posts' => $this->postRepository->getPostLimited(5)
        ]);
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/organizer", methods={"GET"}, name="organizer")
     */
    public function organizorPage(){
        return $this->render('front/forum/organizer.html.twig',[
            'organizers' => $this->organizerRepository->findAll()
        ]);
    }

    /**
     * @param ClassificationRepository $classificationRepository
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/partners", name="partner_page", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function partnerPage(ClassificationRepository $classificationRepository)
    {
        return $this->render('front/forum/partner.html.twig',[
            'classifications'   => $classificationRepository->findAllByPosition()
        ]);
    }

    /**
     * @param IntervenantRepository $intervenantRepository
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/intervenants", methods={"GET"}, name="intervenant_page", schemes={"%secure_channel%"})
     */
    public function intervenantPage(IntervenantRepository $intervenantRepository)
    {
        return $this->render('front/forum/intervenant.html.twig',[
            'intervenants' => $intervenantRepository->findAll()
        ]);
    }

    /**
     * @param RapportRepository $rapportRepository
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/rapports", name="rapport_page", methods={"GET"}, schemes={"%secure_channel%"} )
     */
    public function rapportPage(RapportRepository $rapportRepository)
    {
        return $this->render('front/forum/rapport.html.twig',[
            'rapports' => $rapportRepository->findAll()
        ]);
    }

    /**
     * @Route("/rapport/{slug}", name="rapport_detail", methods={"GET"}, schemes={"%secure_channel%"})
     * @param Rapport $rapport
     * @param RapportRepository $rapportRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function rapportDetail(Rapport $rapport , RapportRepository $rapportRepository)
    {
        return $this->render('front/forum/rapport_detail.html.twig',[
            'rapport' => $rapport,
            'rapports' => $rapportRepository->getOtherRapportWithoutThis([$rapport])
        ]);
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