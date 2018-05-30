<?php

namespace App\Controller;

use App\Entity\Rapport;
use App\Form\RapportType;
use App\Repository\RapportRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/rapport")
 */
class RapportController extends Controller
{
    /**
     * @Route("/", name="rapport_index", methods="GET")
     * @param RapportRepository $rapportRepository
     * @return Response
     */
    public function index(RapportRepository $rapportRepository): Response
    {
        return $this->render('admin/forum/rapport/index.html.twig', [
            'rapports' => $rapportRepository->findAll()
        ]);
    }

    /**
     * @Route("/new", name="rapport_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $rapport = new Rapport();
        $form = $this->createForm(RapportType::class, $rapport);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($rapport);
            $em->flush();

            return $this->redirectToRoute('rapport_index');
        }

        return $this->render('admin/forum/rapport/new.html.twig', [
            'rapport' => $rapport,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="rapport_show", methods="GET")
     * @param Rapport $rapport
     * @return Response
     */
    public function show(Rapport $rapport): Response
    {
        return $this->render('admin/forum/rapport/show.html.twig', [
            'rapport' => $rapport
        ]);
    }

    /**
     * @Route("/{id}/edit", name="rapport_edit", methods="GET|POST")
     * @param Request $request
     * @param Rapport $rapport
     * @return Response
     */
    public function edit(Request $request, Rapport $rapport): Response
    {
        $form = $this->createForm(RapportType::class, $rapport);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('rapport_index');
        }

        return $this->render('admin/forum/rapport/edit.html.twig', [
            'rapport' => $rapport,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="rapport_delete", methods="DELETE")
     * @param Request $request
     * @param Rapport $rapport
     * @return Response
     */
    public function delete(Request $request, Rapport $rapport): Response
    {
        if ($this->isCsrfTokenValid('delete'.$rapport->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($rapport);
            $em->flush();
        }
        return $this->redirectToRoute('rapport_index');
    }
}
