<?php

namespace App\Controller;

use App\Entity\Intervenant;
use App\Form\IntervenantType;
use App\Repository\IntervenantRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/fse/intervenant")
 */
class IntervenantController extends Controller
{
    /**
     * @Route("/", name="intervenant_index", methods="GET")
     * @param IntervenantRepository $intervenantRepository
     * @return Response
     */
    public function index(IntervenantRepository $intervenantRepository): Response
    {
        return $this->render('intervenant/index.html.twig', ['intervenants' => $intervenantRepository->findAll()]);
    }

    /**
     * @Route("/new", name="intervenant_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $intervenant = new Intervenant();
        $form = $this->createForm(IntervenantType::class, $intervenant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($intervenant);
            $em->flush();

            return $this->redirectToRoute('intervenant_index');
        }

        return $this->render('intervenant/new.html.twig', [
            'intervenant' => $intervenant,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="intervenant_show", methods="GET")
     * @param Intervenant $intervenant
     * @return Response
     */
    public function show(Intervenant $intervenant): Response
    {
        return $this->render('intervenant/show.html.twig', ['intervenant' => $intervenant]);
    }

    /**
     * @Route("/{id}/edit", name="intervenant_edit", methods="GET|POST")
     * @param Request $request
     * @param Intervenant $intervenant
     * @return Response
     */
    public function edit(Request $request, Intervenant $intervenant): Response
    {
        $form = $this->createForm(IntervenantType::class, $intervenant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('intervenant_index');
        }

        return $this->render('intervenant/edit.html.twig', [
            'intervenant' => $intervenant,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="intervenant_delete", methods="DELETE")
     * @param Request $request
     * @param Intervenant $intervenant
     * @return Response
     */
    public function delete(Request $request, Intervenant $intervenant): Response
    {
        if ($this->isCsrfTokenValid('delete'.$intervenant->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($intervenant);
            $em->flush();
        }

        return $this->redirectToRoute('intervenant_index');
    }
}
