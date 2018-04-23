<?php

namespace App\Controller;

use App\Repository\OrganizerRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    /**
     * @var OrganizerRepository
     */
    private $organizerRepository;

    public function __construct(OrganizerRepository $organizerRepository)
    {
        $this->organizerRepository = $organizerRepository;
    }

    /**
     * @Route("/", name="homepage")
     */
    public function index()
    {
        $organizers = $this->organizerRepository->findAll();
        return $this->render('default/index.html.twig',[
            'organizers' => $organizers
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
