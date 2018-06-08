<?php

namespace App\Controller;

use App\Entity\Gallery;
use App\Entity\Media;
use App\Form\MediaType;
use App\Repository\MediaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("admin/media")
 */
class MediaController extends Controller
{
    /**
     * @Route("/", name="media_index", methods="GET")
     */
    public function index(MediaRepository $mediaRepository): Response
    {
        return $this->render('media/index.html.twig', ['media' => $mediaRepository->findAll()]);
    }

    /**
     * @Route("/new", name="media_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $medium = new Media();
        $form = $this->createForm(MediaType::class, $medium);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($medium);
            $em->flush();

            return $this->redirectToRoute('media_index');
        }

        return $this->render('media/new.html.twig', [
            'medium' => $medium,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="media_show", methods="GET")
     */
    public function show(Media $medium): Response
    {
        return $this->render('media/show.html.twig', ['medium' => $medium]);
    }

    /**
     * @Route("/{id}/edit", name="media_edit", methods="GET|POST")
     */
    public function edit(Request $request, Media $medium): Response
    {
        $form = $this->createForm(MediaType::class, $medium);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('media_edit', ['id' => $medium->getId()]);
        }

        return $this->render('media/edit.html.twig', [
            'medium' => $medium,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="media_delete", methods="DELETE")
     * @param Request $request
     * @param Media $medium
     * @return Response
     */
    public function delete(Request $request, Media $medium): Response
    {
        if ($this->isCsrfTokenValid('delete'.$medium->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($medium);
            $em->flush();
        }

        return $this->redirectToRoute('media_index');
    }

    /**
     * @param Request $request
     * @param $gallery
     * @return Media|void
     */
    private function handlerUploader(Request $request, $gallery)
    {
        if (!$gallery instanceof Gallery) { return; }
        $em = $this->getDoctrine()->getManager();
        $media = new Media();
        /** @var UploadedFile $file */
        $file = $request->files->get('images');
        $fileName = md5(uniqid()).'.'.$file->getExtension();
        $file->move(
            $this->getParameter('gallery_directory'),
            $fileName
        );
        $media->setGallery($gallery)
            ->setImageUrl($fileName)
            ;
        $em->persist($media);
        $em->flush();
        return $media;
    }
}
