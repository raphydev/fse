<?php

namespace App\Controller;

use App\Entity\Domain;
use App\Form\DomainType;
use App\Repository\DomainRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/entrepreneur/domain")
 */
class DomainController extends Controller
{
    /**
     * @Route("/", name="domain_index", methods="GET")
     * @param DomainRepository $domainRepository
     * @return Response
     */
    public function index(DomainRepository $domainRepository): Response
    {
        return $this->render('admin/entrepreneur/domain/index.html.twig',
            ['domains' => $domainRepository->findAll()]
        );
    }

    /**
     * @Route("/new", name="domain_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $domain = new Domain();
        $form = $this->createForm(DomainType::class, $domain);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($domain);
            $em->flush();

            return $this->redirectToRoute('domain_index');
        }

        return $this->render('admin/entrepreneur/domain/new.html.twig', [
            'domain' => $domain,
            'form' => $form->createView(),
        ]);
    }


    /**
     * @Route("/{id}/edit", name="domain_edit", methods="GET|POST")
     * @param Request $request
     * @param Domain $domain
     * @return Response
     */
    public function edit(Request $request, Domain $domain): Response
    {
        $form = $this->createForm(DomainType::class, $domain);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('domain_index');
        }

        return $this->render('admin/entrepreneur/domain/edit.html.twig', [
            'domain' => $domain,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="domain_delete", methods="DELETE")
     * @param Request $request
     * @param Domain $domain
     * @return Response
     */
    public function delete(Request $request, Domain $domain): Response
    {
        if ($this->isCsrfTokenValid('delete'.$domain->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($domain);
            $em->flush();
        }

        return $this->redirectToRoute('domain_index');
    }
}
