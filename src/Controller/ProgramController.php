<?php

namespace App\Controller;

use App\Entity\Program;
use App\Form\ProgramType;
use App\Repository\ProgramRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/forum/program")
 */
class ProgramController extends Controller
{
    /**
     * @Route("/", name="program_index", methods="GET")
     * @param ProgramRepository $programRepository
     * @return Response
     */
    public function index(ProgramRepository $programRepository): Response
    {
        return $this->render('admin/forum/program/index.html.twig', [
            'programs' => $programRepository->findAll()
        ]);
    }

    /**
     * @Route("/new", name="program_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $program = new Program();
        $form = $this->createForm(ProgramType::class, $program);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($program);
            $em->flush();

            return $this->redirectToRoute('program_index');
        }

        return $this->render('admin/forum/program/new.html.twig', [
            'program' => $program,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="program_show", methods="GET")
     * @param Program $program
     * @return Response
     */
    public function show(Program $program): Response
    {
        return $this->render('admin/forum/program/show.html.twig', ['program' => $program]);
    }

    /**
     * @Route("/{id}/edit", name="program_edit", methods="GET|POST")
     * @param Request $request
     * @param Program $program
     * @return Response
     */
    public function edit(Request $request, Program $program): Response
    {
        $form = $this->createForm(ProgramType::class, $program);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('program_index');
        }

        return $this->render('admin/forum/program/edit.html.twig', [
            'program' => $program,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="program_delete", methods="DELETE")
     * @param Request $request
     * @param Program $program
     * @return Response
     */
    public function delete(Request $request, Program $program): Response
    {
        if ($this->isCsrfTokenValid('delete'.$program->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($program);
            $em->flush();
        }

        return $this->redirectToRoute('program_index');
    }
}
