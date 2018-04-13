<?php

namespace App\Controller;

use App\AppEvents;
use App\Entity\Users;
use App\Event\UserEvent;
use App\Form\RegisterType;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends Controller
{

    /**
     * @Route("/accounts/signin", name="signin_page")
     * @param Request $request
     * @param AuthenticationUtils $authenticationUtils
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function login(Request $request, AuthenticationUtils $authenticationUtils)
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();
        return $this->render('security/signin_page.html.twig', [
            'last_username' => $lastUsername,
            'error'         => $error
        ]);
    }

    /**
     * La route pour se deconnecter.
     *
     * Mais celle ci ne doit jamais être executé car symfony l'interceptera avant.
     *
     *
     * @Route("/logout", name="security_logout")
     */
    public function logout(){
        throw new \Exception('This should never be reached!');
    }

    /**
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/accounts/register", name="register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $users = new Users();
        $form = $this->createForm(RegisterType::class, $users);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $users->setRoles(['ROLE_USER']);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($users);
            $entityManager->flush();

            //$event = new UserEvent($users);
            //$dispatcher->dispatch(AppEvents::APP_AUTO_LOGGED_USER, $event);
            $this->authenticateUser($users);
            return $this->redirectToRoute('account', array(), 301);
        }

        return $this->render('security/signup_page.html.twig', [
           'form' => $form->createView()
        ]);
    }

    /**
     * @param Users $users
     */
    private function authenticateUser(Users $users)
    {
        $providerKey = 'main';
        $token = new UsernamePasswordToken($users, null, $providerKey, $users->getRoles());
        $this->container->get('security.token_storage')->setToken($token);
    }
}
