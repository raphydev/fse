<?php

namespace App\Controller;

use App\Entity\Item;
use App\Form\ItemType;
use App\Repository\ItemRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/Entrepreneur/item")
 */
class ItemController extends Controller
{
    /**
     * @Route("/", name="item_index", methods="GET")
     * @param ItemRepository $itemRepository
     * @return Response
     */
    public function index(ItemRepository $itemRepository): Response
    {
        return $this->render('admin/entrepreneur/item/index.html.twig', ['items' => $itemRepository->findAll()]);
    }

    /**
     * @Route("/new", name="item_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $item = new Item();
        $form = $this->createForm(ItemType::class, $item);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($item);
            $em->flush();

            return $this->redirectToRoute('item_index');
        }

        return $this->render('admin/entrepreneur/item/new.html.twig', [
            'item' => $item,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="item_show", methods="GET")
     * @param Item $item
     * @return Response
     */
    public function show(Item $item): Response
    {
        return $this->render('admin/entrepreneur/item/show.html.twig', ['item' => $item]);
    }

    /**
     * @Route("/{id}/edit", name="item_edit", methods="GET|POST")
     * @param Request $request
     * @param Item $item
     * @return Response
     */
    public function edit(Request $request, Item $item): Response
    {
        $form = $this->createForm(ItemType::class, $item);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('item_edit', ['id' => $item->getId()]);
        }

        return $this->render('admin/entrepreneur/item/edit.html.twig', [
            'item' => $item,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="item_delete", methods="DELETE")
     * @param Request $request
     * @param Item $item
     * @return Response
     */
    public function delete(Request $request, Item $item): Response
    {
        if ($this->isCsrfTokenValid('delete'.$item->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($item);
            $em->flush();
        }

        return $this->redirectToRoute('item_index');
    }
}
