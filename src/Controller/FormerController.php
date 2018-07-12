<?php

namespace App\Controller;

use App\Entity\Former;
use App\Form\FormerType;
use App\Repository\FormerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/Entrepreneur/former")
 */
class FormerController extends Controller
{
    /**
     * @Route("/", name="former_index", methods="GET")
     * @param FormerRepository $formerRepository
     * @return Response
     */
    public function index(FormerRepository $formerRepository): Response
    {
        return $this->render('admin/entrepreneur/former/index.html.twig', ['formers' => $formerRepository->findAll()]);
    }

    /**
     * @Route("/new", name="former_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $former = new Former();
        $form = $this->createForm(FormerType::class, $former);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($former);
            $em->flush();

            return $this->redirectToRoute('former_index');
        }

        return $this->render('admin/entrepreneur/former/new.html.twig', [
            'former' => $former,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="former_show", methods="GET")
     * @param Former $former
     * @return Response
     */
    public function show(Former $former): Response
    {
        return $this->render('admin/entrepreneur/former/show.html.twig', ['former' => $former]);
    }

    /**
     * @Route("/{id}/edit", name="former_edit", methods="GET|POST")
     * @param Request $request
     * @param Former $former
     * @return Response
     */
    public function edit(Request $request, Former $former): Response
    {
        $form = $this->createForm(FormerType::class, $former);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('former_edit', ['id' => $former->getId()]);
        }

        return $this->render('admin/entrepreneur/former/edit.html.twig', [
            'former' => $former,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="former_delete", methods="DELETE")
     * @param Request $request
     * @param Former $former
     * @return Response
     */
    public function delete(Request $request, Former $former): Response
    {
        if ($this->isCsrfTokenValid('delete'.$former->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($former);
            $em->flush();
        }

        return $this->redirectToRoute('former_index');
    }
}
