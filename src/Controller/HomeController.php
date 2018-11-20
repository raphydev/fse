<?php

namespace App\Controller;

use App\Repository\ClassificationRepository;
use App\Repository\IntervenantRepository;
use App\Repository\OrganizerRepository;
use App\Repository\PartRepository;
use App\Repository\PostRepository;
use App\Repository\RapportRepository;
use App\Repository\SectionRepository;
use App\Repository\TagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
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
     * @var TagRepository
     */
    private $tagRepository;

    /**
     * @var SectionRepository
     */
    private $sectionRepository;


    public function __construct(
        OrganizerRepository $organizerRepository,
        IntervenantRepository $intervenantRepository,
        ClassificationRepository $classificationRepository,
        PostRepository $postRepository,
        RapportRepository $rapportRepository,
        TagRepository $tagRepository,
        SectionRepository $sectionRepository
    )
    {
        $this->organizerRepository = $organizerRepository;
        $this->intervenantRepository = $intervenantRepository;
        $this->classificationRepository = $classificationRepository;
        $this->postRepository = $postRepository;
        $this->rapportRepository = $rapportRepository;
        $this->tagRepository = $tagRepository;
        $this->sectionRepository = $sectionRepository;
    }

    /**
     * @Route("/", name="homepage", schemes={"%secure_channel%"}, methods={"GET"})
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(PartRepository $partRepository)
    {
        return $this->render('home_front/index.html.twig',[
            //'posts' => $this->postRepository->getPostLimited(5),
            'organizers' => $this->organizerRepository->findAll(),
            'tags'   => $this->tagRepository->findRapportByTagName('#rapport'),
            'intervenants' => $this->intervenantRepository->findAllGreaterThanIntervenant(),
            'classifications'   => $this->classificationRepository->findAllByPosition(),
            'sections' => $this->sectionRepository->findAll(),
            'parts'    => $partRepository->findPartAndProgramBySection()
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
