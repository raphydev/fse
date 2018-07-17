<?php

namespace App\Controller;

use App\Entity\Compagny;
use App\Entity\Users;
use App\Form\CompagnyType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * Class AccountController
 * @package App\Controller
 * @Route("/account")
 */
class AccountController extends Controller
{
    /**
     * @Route("/", name="account", methods={"POST","GET"}, schemes={"%secure_channel%"})
     * @param TokenStorageInterface $storage
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(TokenStorageInterface $storage, Request $request)
    {
        $user = $storage->getToken()->getUser();
        if ($user instanceof Users){
            if ($user->getIsActive() === true){
                return $this->redirectToRoute('dashboard_member', array(), 301);
            }
        }
        if ($this->isCsrfTokenValid('validate'.$user->getUsername(),
            $request->request->get('_token')))
        {
            $em = $this->getDoctrine()->getManager();
            $user->setIsActive(true);
            $em->flush();
            return $this->redirectToRoute('start_member');
        }
        return $this->render('network/pages/account_page.html.twig');
    }

    /**
     * @Route("/info-start", name="start_member", methods={"GET","POST"}, schemes={"%secure_channel%"})
     * @param Request $request
     * @return Response
     */
    public function startUserInfo(Request $request)
    {
        $compagny = new Compagny();

        $form = $this->createForm(CompagnyType::class, $compagny);
        $form->handleRequest($request);
        $session = $request->getSession();
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($compagny);
            $em->flush();
            //return $this->redirectToRoute('domain_index');
        }
        return $this->render('network/pages/wizard.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @param Compagny $compagny
     * @param Request $request
     *
     */
    public function SecondPartInfo(Compagny $compagny, Request $request)
    {

    }

    /**
     * @Route("/dashboard", name="dashboard_member", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function dashboard(){
        return new Response("Page dashboard User");
    }


}
