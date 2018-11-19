<?php

namespace App\Controller;

use App\Repository\ClassificationRepository;
use App\Repository\IntervenantRepository;
use App\Repository\OrganizerRepository;
use App\Repository\PostRepository;
use App\Repository\RapportRepository;
use App\Repository\ScheculeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends Controller
{
    /**
     * @var OrganizerRepository
     */
    private $organizerRepository;

    /**
     * @var IntervenantRepository
     */
    private $intervenantRepository;

    /**
     * @var ClassificationRepository
     */
    private $classificationRepository;

    /**
     * @var PostRepository
     */
    private $postRepository;

    /**
     * @var
     */
    private $rapportRepository;

    /**
     * @var
     */
    private $scheculeRepository;


    public function __construct(
        OrganizerRepository $organizerRepository,
        IntervenantRepository $intervenantRepository,
        ClassificationRepository $classificationRepository,
        PostRepository $postRepository,
        RapportRepository $rapportRepository,
        ScheculeRepository $scheculeRepository
    )
    {
        $this->organizerRepository = $organizerRepository;
        $this->intervenantRepository = $intervenantRepository;
        $this->classificationRepository = $classificationRepository;
        $this->postRepository = $postRepository;
        $this->rapportRepository = $rapportRepository;
        $this->scheculeRepository = $scheculeRepository;
    }

    /**
     * @Route("/", name="homepage", schemes={"%secure_channel%"}, methods={"GET"})
     */
    public function index()
    {
        return $this->render('home_front/index.html.twig',[
            //'posts' => $this->postRepository->getPostLimited(5),
            'organizers' => $this->organizerRepository->findAll(),
            'rapports'   => $this->rapportRepository->findAll(),
            'intervenants' => $this->intervenantRepository->findAllGreaterThanIntervenant(),
            'classifications'   => $this->classificationRepository->findAllByPosition(),
            'schecules'  => $this->scheculeRepository->findAllWithPrograms()
        ]);
    }


    public function renderItemFooter()
    {
        $organizers = $this->organizerRepository->findAll();
        return $this->render('includes/footer.html.twig',[
            'organizers' => $organizers
        ]);
    }
}
