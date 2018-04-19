<?php

namespace App\Controller;

use App\Entity\PartnerType;
use App\Form\PartnerTypeType;
use App\Repository\PartnerTypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/fse/partner/type")
 */
class PartnerTypeController extends Controller
{
    /**
     * @Route("/", name="partner_type_index", methods="GET")
     * @param PartnerTypeRepository $partnerTypeRepository
     * @return Response
     */
    public function index(PartnerTypeRepository $partnerTypeRepository): Response
    {
        return $this->render('partner_type/index.html.twig', ['partner_types' => $partnerTypeRepository->findAll()]);
    }

    /**
     * @Route("/new", name="partner_type_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $partnerType = new PartnerType();
        $form = $this->createForm(PartnerTypeType::class, $partnerType);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($partnerType);
            $em->flush();

            return $this->redirectToRoute('partner_type_index');
        }

        return $this->render('partner_type/new.html.twig', [
            'partner_type' => $partnerType,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="partner_type_show", methods="GET")
     * @param PartnerType $partnerType
     * @return Response
     */
    public function show(PartnerType $partnerType): Response
    {
        return $this->render('partner_type/show.html.twig', ['partner_type' => $partnerType]);
    }

    /**
     * @Route("/{id}/edit", name="partner_type_edit", methods="GET|POST")
     * @param Request $request
     * @param PartnerType $partnerType
     * @return Response
     */
    public function edit(Request $request, PartnerType $partnerType): Response
    {
        $form = $this->createForm(PartnerTypeType::class, $partnerType);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('partner_type_index');
        }

        return $this->render('partner_type/edit.html.twig', [
            'partner_type' => $partnerType,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="partner_type_delete", methods="DELETE")
     * @param Request $request
     * @param PartnerType $partnerType
     * @return Response
     */
    public function delete(Request $request, PartnerType $partnerType): Response
    {
        if ($this->isCsrfTokenValid('delete'.$partnerType->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($partnerType);
            $em->flush();
        }

        return $this->redirectToRoute('partner_type_index');
    }
}
