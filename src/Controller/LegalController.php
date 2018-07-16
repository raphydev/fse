<?php

namespace App\Controller;

use App\Entity\Legal;
use App\Form\LegalType;
use App\Repository\LegalRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/entrepreneur/legal")
 */
class LegalController extends Controller
{
    /**
     * @Route("/", name="legal_index", methods="GET")
     * @param LegalRepository $legalRepository
     * @return Response
     */
    public function index(LegalRepository $legalRepository): Response
    {
        return $this->render('admin/entrepreneur/legal/index.html.twig', ['legals' => $legalRepository->findAll()]);
    }

    /**
     * @Route("/new", name="legal_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $legal = new Legal();
        $form = $this->createForm(LegalType::class, $legal);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($legal);
            $em->flush();

            return $this->redirectToRoute('legal_index');
        }

        return $this->render('admin/entrepreneur/legal/new.html.twig', [
            'legal' => $legal,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="legal_edit", methods="GET|POST")
     * @param Request $request
     * @param Legal $legal
     * @return Response
     */
    public function edit(Request $request, Legal $legal): Response
    {
        $form = $this->createForm(LegalType::class, $legal);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('legal_index');
        }

        return $this->render('admin/entrepreneur/legal/edit.html.twig', [
            'legal' => $legal,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="legal_delete", methods="DELETE")
     * @param Request $request
     * @param Legal $legal
     * @return Response
     */
    public function delete(Request $request, Legal $legal): Response
    {
        if ($this->isCsrfTokenValid('delete'.$legal->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($legal);
            $em->flush();
        }

        return $this->redirectToRoute('legal_index');
    }
}
