<?php

namespace App\Controller;

use App\Entity\Training;
use App\Form\TrainingType;
use App\Repository\TrainingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/Entrepreneur/training")
 */
class TrainingController extends Controller
{
    /**
     * @Route("/", name="training_index", methods="GET")
     * @param TrainingRepository $trainingRepository
     * @return Response
     */
    public function index(TrainingRepository $trainingRepository): Response
    {
        return $this->render('admin/entrepreneur/training/index.html.twig', ['trainings' => $trainingRepository->findAll()]);
    }

    /**
     * @Route("/new", name="training_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $training = new Training();
        $form = $this->createForm(TrainingType::class, $training);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($training);
            $em->flush();

            return $this->redirectToRoute('training_index');
        }

        return $this->render('admin/entrepreneur/training/new.html.twig', [
            'training' => $training,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="training_edit", methods="GET|POST")
     * @param Request $request
     * @param Training $training
     * @return Response
     */
    public function edit(Request $request, Training $training): Response
    {
        $form = $this->createForm(TrainingType::class, $training);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('training_index');
        }

        return $this->render('admin/entrepreneur/training/edit.html.twig', [
            'training' => $training,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="training_delete", methods="DELETE")
     * @param Request $request
     * @param Training $training
     * @return Response
     */
    public function delete(Request $request, Training $training): Response
    {
        if ($this->isCsrfTokenValid('delete'.$training->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($training);
            $em->flush();
        }

        return $this->redirectToRoute('training_index');
    }
}
