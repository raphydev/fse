<?php

namespace App\Controller;

use App\Entity\Company;
use App\Entity\Users;
use App\Form\CompanyType;
use App\Service\HelperSerializer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

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
     * @Route("/info-start", name="start_member", methods={"GET","POST"}, schemes={"%secure_channel%"}, options={"expose"=true})
     * @param Request $request
     * @param EntityManagerInterface $em
     * @return Response
     */
    public function startUserInfo(Request $request, EntityManagerInterface $em, TokenStorageInterface $storage)
    {
        $user = $storage->getToken()->getUser();
        $company = new Company();
        $session = $request->getSession();
        $form = $this->createForm(CompanyType::class, $company);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if ($request->isXmlHttpRequest()) {
                if ($user instanceof Users) {
                    $user->addCompany($company);
                    $em->persist($company);
                    $em->flush();
                    $data = ['stateSubmit' => true, 'url' => $this->generateUrl('second_member')];
                    //$data = $serializer->serialize($result, 'json');
                    return new JsonResponse([
                        'errors'  => false,
                        'response' => $data,
                        'status' => Response::HTTP_OK
                    ]);
                }
            } else {
                if ($user instanceof Users) {
                    $user->addCompany($company);
                    $em->persist($company);
                    $em->flush();
                }
                return $this->redirectToRoute('second_member');
            }
        } else {
            if ($request->isXmlHttpRequest()) {
                return new JsonResponse([
                    'errors' => true,
                    'response' => 'Une erreur est survenu pendant l\'envoi du formulaire',
                    'status' => Response::HTTP_BAD_REQUEST
                ]);
            }
        }
        return $this->render('network/pages/wizard.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @param Request $request
     * @Route("/info-second", name="second_member", methods={"GET","POST"}, schemes={"%secure_channel%"})
     * @return Response
     */
    public function SecondPartInfo(Request $request)
    {
        return new Response('page second-form');
    }

    /**
     * @Route("/dashboard", name="dashboard_member", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function dashboard(){
        return new Response("Page dashboard User");
    }


}
