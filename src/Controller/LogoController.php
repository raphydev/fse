<?php

namespace App\Controller;

use App\Entity\Logo;
use App\Form\LogoType;
use App\Repository\LogoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/forum/logo")
 */
class LogoController extends AbstractController
{
    /**
     * @Route("/", name="logo_index", methods="GET")
     * @param LogoRepository $logoRepository
     * @return Response
     */
    public function index(LogoRepository $logoRepository): Response
    {
        return $this->render('admin/forum/logo/index.html.twig', ['logos' => $logoRepository->findAll()]);
    }

    /**
     * @Route("/new", name="logo_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $logo = new Logo();
        $form = $this->createForm(LogoType::class, $logo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($logo);
            $em->flush();

            return $this->redirectToRoute('logo_index');
        }

        return $this->render('admin/forum/logo/new.html.twig', [
            'logo' => $logo,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="logo_show", methods="GET")
     * @param Logo $logo
     * @return Response
     */
    public function show(Logo $logo): Response
    {
        return $this->render('admin/forum/logo/show.html.twig', ['logo' => $logo]);
    }

    /**
     * @Route("/{id}/edit", name="logo_edit", methods="GET|POST")
     * @param Request $request
     * @param Logo $logo
     * @return Response
     */
    public function edit(Request $request, Logo $logo): Response
    {
        $form = $this->createForm(LogoType::class, $logo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('logo_index');
        }

        return $this->render('admin/forum/logo/edit.html.twig', [
            'logo' => $logo,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="logo_delete", methods="DELETE")
     * @param Request $request
     * @param Logo $logo
     * @return Response
     */
    public function delete(Request $request, Logo $logo): Response
    {
        if ($this->isCsrfTokenValid('delete'.$logo->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($logo);
            $em->flush();
        }

        return $this->redirectToRoute('logo_index');
    }
}
