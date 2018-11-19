<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 13/04/2018
 * Time: 20:32
 */

namespace App\EventListener\Security;


use App\Entity\Users;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationChecker;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;

class LoginListener
{

    /**
     * @var EntityManagerInterface
     */
    private $manager;

    /**
     * @var RouterInterface
     */
    private $router;

     /**
     * @var EventDispatcherInterface
     */
    private $dispatcher;
    /**
     * @var AuthorizationCheckerInterface
     */
    private $checker;


    /**
     * LoginListener constructor.
     * @param EntityManagerInterface $manager
     * @param RouterInterface $router
     * @param AuthorizationCheckerInterface $checker
     * @param EventDispatcherInterface $dispatcher
     */
    public function __construct(EntityManagerInterface $manager, RouterInterface $router, AuthorizationCheckerInterface $checker, EventDispatcherInterface $dispatcher)
    {
        $this->manager = $manager;
        $this->router = $router;
        $this->dispatcher = $dispatcher;
        $this->checker = $checker;
    }

    /**
     * @param InteractiveLoginEvent $event
     */
    public function onSecurityInteractiveLogin(InteractiveLoginEvent $event)
    {
        $this->dispatcher->addListener(KernelEvents::RESPONSE, [
            $this, 'onKernelResponse'
        ]);
        $user = $event->getAuthenticationToken()->getUser();
        if (!$user instanceof Users){
            return;
        }
        $user->setLastLogin(new \DateTime());
        $this->manager->persist($user);
        $this->manager->flush();
    }

    /**
     * @param FilterResponseEvent $event
     */
    public function onKernelResponse(FilterResponseEvent $event)
    {
        if ($this->checker->isGranted('ROLE_SUPER_ADMIN')) {
            $event->setResponse(new RedirectResponse($this->router->generate('admin')));
        } else {
            $event->setResponse(new RedirectResponse($this->router->generate('account')));
        }
    }
}