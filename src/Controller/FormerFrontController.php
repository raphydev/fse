<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 11/06/2018
 * Time: 20:33
 */

namespace App\Controller;


use App\Repository\PartnerRepository;
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
     * @param PartnerRepository $partnerRepository
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/page/enchancement", name="enchancement_page", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function EnhancementPage(PartnerRepository $partnerRepository)
    {
        return $this->render('front/pme/enchancement_page.html.twig',[
            'partners' => $partnerRepository->findAll()
        ]);
    }

}