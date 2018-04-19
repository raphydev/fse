<?php

namespace App\Controller;

use App\Entity\Organizer;
use App\Form\OrganizerType;
use App\Repository\OrganizerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/fse/organizer")
 */
class OrganizerController extends Controller
{
    /**
     * @Route("/", name="organizer_index", methods="GET")
     * @param OrganizerRepository $organizerRepository
     * @return Response
     */
    public function index(OrganizerRepository $organizerRepository): Response
    {
        return $this->render('organizer/index.html.twig', ['organizers' => $organizerRepository->findAll()]);
    }

    /**
     * @Route("/new", name="organizer_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $organizer = new Organizer();
        $form = $this->createForm(OrganizerType::class, $organizer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($organizer);
            $em->flush();

            return $this->redirectToRoute('organizer_index');
        }

        return $this->render('organizer/new.html.twig', [
            'organizer' => $organizer,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="organizer_show", methods="GET")
     * @param Organizer $organizer
     * @return Response
     */
    public function show(Organizer $organizer): Response
    {
        return $this->render('organizer/show.html.twig', ['organizer' => $organizer]);
    }

    /**
     * @Route("/{id}/edit", name="organizer_edit", methods="GET|POST")
     * @param Request $request
     * @param Organizer $organizer
     * @return Response
     */
    public function edit(Request $request, Organizer $organizer): Response
    {
        $form = $this->createForm(OrganizerType::class, $organizer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('organizer_index');
        }

        return $this->render('organizer/edit.html.twig', [
            'organizer' => $organizer,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="organizer_delete", methods="DELETE")
     * @param Request $request
     * @param Organizer $organizer
     * @return Response
     */
    public function delete(Request $request, Organizer $organizer): Response
    {
        if ($this->isCsrfTokenValid('delete'.$organizer->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($organizer);
            $em->flush();
        }

        return $this->redirectToRoute('organizer_index');
    }
}
