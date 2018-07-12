<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 11/06/2018
 * Time: 20:33
 */

namespace App\Controller;


use App\Repository\PartnerRepository;
use App\Repository\TrainingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FormerFrontController
 * @package App\Controller
 * @Route("/pme")
 */
class FormerFrontController extends AbstractController
{

    /**
     * @param TrainingRepository $trainingRepository
     * @param PartnerRepository $partnerRepository
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/page/education_financiere", name="education_page", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function EnhancementPage(TrainingRepository $trainingRepository , PartnerRepository $partnerRepository)
    {
        return $this->render('front/pme/education_page.html.twig',[
            'modules' => $trainingRepository->findAll(),
            'partners' => $partnerRepository->findAll()
        ]);
    }

}