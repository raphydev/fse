<?php

namespace App\Controller;

use App\Repository\ClassificationRepository;
use App\Repository\IntervenantRepository;
use App\Repository\OrganizerRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
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

    public function __construct(
        OrganizerRepository $organizerRepository,
        IntervenantRepository $intervenantRepository,
        ClassificationRepository $classificationRepository
    )
    {
        $this->organizerRepository = $organizerRepository;
        $this->intervenantRepository = $intervenantRepository;
        $this->classificationRepository = $classificationRepository;
    }

    /**
     * @Route("/", name="homepage")
     */
    public function index()
    {
        return $this->render('default/index.html.twig',[
            'organizers' => $this->organizerRepository->findAll(),
            'intervenants' => $this->intervenantRepository->findAllGreaterThanIntervenant(),
            'classifications'   => $this->classificationRepository->findAllByPosition()
        ]);
    }

    public function renderItemFooter()
    {
        $organizers = $this->organizerRepository->findAll();
        $this->render('includes/footer.html.twig',[
            'organizers' => $organizers
        ]);
    }
}
