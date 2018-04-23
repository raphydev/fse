<?php

namespace App\Controller;

use App\Entity\Classification;
use App\Form\ClassificationType;
use App\Repository\ClassificationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/fse/classification")
 */
class ClassificationController extends Controller
{
    /**
     * @Route("/", name="classification_index", methods="GET")
     * @param ClassificationRepository $classificationRepository
     * @return Response
     */
    public function index(ClassificationRepository $classificationRepository): Response
    {
        return $this->render('classification/index.html.twig', ['classifications' => $classificationRepository->findAll()]);
    }

    /**
     * @Route("/new", name="classification_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $classification = new Classification();
        $form = $this->createForm(ClassificationType::class, $classification);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($classification);
            $em->flush();

            return $this->redirectToRoute('classification_index');
        }

        return $this->render('classification/new.html.twig', [
            'classification' => $classification,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="classification_show", methods="GET")
     * @param Classification $classification
     * @return Response
     */
    public function show(Classification $classification): Response
    {
        return $this->render('classification/show.html.twig', ['classification' => $classification]);
    }

    /**
     * @Route("/{id}/edit", name="classification_edit", methods="GET|POST")
     * @param Request $request
     * @param Classification $classification
     * @return Response
     */
    public function edit(Request $request, Classification $classification): Response
    {
        $form = $this->createForm(ClassificationType::class, $classification);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('classification_index');
        }

        return $this->render('classification/edit.html.twig', [
            'classification' => $classification,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="classification_delete", methods="DELETE")
     * @param Request $request
     * @param Classification $classification
     * @return Response
     */
    public function delete(Request $request, Classification $classification): Response
    {
        if ($this->isCsrfTokenValid('delete'.$classification->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($classification);
            $em->flush();
        }

        return $this->redirectToRoute('classification_index');
    }
}
