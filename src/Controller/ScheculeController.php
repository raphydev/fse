<?php

namespace App\Controller;

use App\Entity\Schecule;
use App\Form\ScheculeType;
use App\Repository\ScheculeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/forum/schecule")
 */
class ScheculeController extends Controller
{
    /**
     * @Route("/", name="schecule_index", methods="GET")
     * @param ScheculeRepository $scheculeRepository
     * @return Response
     */
    public function index(ScheculeRepository $scheculeRepository): Response
    {
        return $this->render('admin/forum/schecule/index.html.twig', [
            'schecules' => $scheculeRepository->findAll()
        ]);
    }

    /**
     * @Route("/new", name="schecule_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $schecule = new Schecule();
        $form = $this->createForm(ScheculeType::class, $schecule);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($schecule);
            $em->flush();

            return $this->redirectToRoute('schecule_index');
        }

        return $this->render('admin/forum/schecule/new.html.twig', [
            'schecule' => $schecule,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="schecule_show", methods="GET")
     * @param Schecule $schecule
     * @return Response
     */
    public function show(Schecule $schecule): Response
    {
        return $this->render('admin/forum/schecule/show.html.twig', ['schecule' => $schecule]);
    }

    /**
     * @Route("/{id}/edit", name="schecule_edit", methods="GET|POST")
     * @param Request $request
     * @param Schecule $schecule
     * @return Response
     */
    public function edit(Request $request, Schecule $schecule): Response
    {
        $form = $this->createForm(ScheculeType::class, $schecule);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('schecule_index');
        }

        return $this->render('admin/forum/schecule/edit.html.twig', [
            'schecule' => $schecule,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="schecule_delete", methods="DELETE")
     * @param Request $request
     * @param Schecule $schecule
     * @return Response
     */
    public function delete(Request $request, Schecule $schecule): Response
    {
        if ($this->isCsrfTokenValid('delete'.$schecule->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($schecule);
            $em->flush();
        }

        return $this->redirectToRoute('schecule_index');
    }
}
