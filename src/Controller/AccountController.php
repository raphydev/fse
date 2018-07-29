<?php

namespace App\Controller;

use App\Entity\Company;
use App\Entity\Department;
use App\Entity\Users;
use App\Form\CompanyType;
use App\Form\DepartmentType;
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
     * @param TokenStorageInterface $storage
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
                $this->ManagerCompanyEntity($user, $company, $em);
                $data = ['stateSubmit' => true, 'url' => $this->generateUrl('second_member')];
                $session->set('companyId', $company->getId());
                //$data = $serializer->serialize($result, 'json');
                return $this->CustomJsonResponse($data);
            } else {
                $this->ManagerCompanyEntity($user, $company, $em);
                $session->set('companyId', $company->getId());
                return $this->redirectToRoute('second_member');
            }
        } else {
            if ($request->isXmlHttpRequest()) return $this->CustomJsonResponse();
        }
        return $this->render('network/pages/wizard_start.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @param Request $request
     * @param EntityManagerInterface $em
     * @return Response
     * @Route("/info-second", name="second_member", methods={"GET","POST"}, schemes={"%secure_channel%"}, options={"expose"=true})
     */
    public function SecondPartInfo(Request $request, EntityManagerInterface $em)
    {
        if ($this->checkSession($request, 'companyId') === false) return $this->redirectToRoute('start_member');
        $department = new Department();
        $form = $this->createForm(DepartmentType::class, $department);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if ($request->isXmlHttpRequest()) {
                $this->ManagerDepartmentEntity($request, $department, $em);
                $data = ['stateSubmit' => true, 'url' => $this->generateUrl('third_member')];
                return $this->CustomJsonResponse($data);
            } else {
                $this->ManagerDepartmentEntity($request, $department, $em);
                return $this->redirectToRoute('third_member');
            }
        } else {
            if ($request->isXmlHttpRequest()) return $this->CustomJsonResponse();
        }
        return $this->render('network/pages/wizard_second.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @param Request $request
     * @param EntityManagerInterface $em
     * @Route("/info-third", name="third_member", methods={"GET","POST"}, schemes={"%secure_channel%"},options={"expose"=true})
     */
    public function ThirdPartInfo(Request $request, EntityManagerInterface $em) {
        return new Response('Third part Form');
    }

    /**
     * @Route("/dashboard", name="dashboard_member", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function dashboard(){
        return new Response("Page dashboard User");
    }

    /**
     * @param Users $user
     * @param Company $company
     * @param EntityManagerInterface $em
     */
    private function ManagerCompanyEntity (Users $user, Company $company, EntityManagerInterface $em) {
        if ($user instanceof Users) {
            $user->addCompany($company);
            $em->persist($company);
            $em->flush();
        }
    }

    /**
     * @param Request $request
     * @param Department $department
     * @param EntityManagerInterface $em
     */
    private function ManagerDepartmentEntity(Request $request, Department $department, EntityManagerInterface $em)
    {
        $session = $request->getSession();
        $company = $em->getRepository(Company::class)->find($session->get('companyId'));
        if ($company instanceof Company) {
            $company->addDepartment($department);
            $em->persist($department);
            $em->flush();
        }
    }

    /**
     * @param null $data
     * @return JsonResponse
     */
    private function CustomJsonResponse($data = null) {
        $success_array = ['errors'  => false, 'response' => $data, 'status' => Response::HTTP_OK, 'info' => 'A  jout des informations renseignés ont été effectué', 'title' => 'success'];
        $error_array = ['errors' => true, 'response' => '', 'status' => Response::HTTP_BAD_REQUEST, 'info' => 'Une erreur est survenue pendant l\'ajout des informations', 'title'=> 'erreur'
        ];
        $format = ($data) ?  $success_array : $error_array ;
        return new JsonResponse($format);
    }

    /**
     * @param Request $request
     * @param $nameSession
     * @return bool
     */
    private function checkSession(Request $request, $nameSession)
    {
        $session = $request->getSession();
        $response = ($session->has($nameSession)) ? true : false;
        return $response;
    }


}
