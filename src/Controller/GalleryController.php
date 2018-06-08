<?php

namespace App\Controller;

use App\Entity\Gallery;
use App\Entity\Media;
use App\Form\GalleryType;
use App\Repository\GalleryRepository;
use App\Service\DraftGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/gallery")
 */
class GalleryController extends Controller
{

    /**
     * @var DraftGenerator
     */
    private $draftGenerator;


    public function __construct(DraftGenerator $draftGenerator)
    {
        $this->draftGenerator = $draftGenerator;
    }

    /**
     * @Route("/create", name="create_draft_gallery", methods={"GET","POST"}, schemes={"%secure_channel%"})
     * @param GalleryRepository $galleryRepository
     * @return Gallery|null|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function createDraft(GalleryRepository $galleryRepository)
    {
        $gallery = new Gallery();
        $user = $this->get('security.token_storage')->getToken()->getUser();
        $options = ['online' => -1, 'user' => $user];
        $draft = $galleryRepository->findOneBy($options);
        if(null !== $draft){
            return $this->redirectToRoute(
                'gallery_edit', ['id' => $draft->getId()
            ]);
        }else{
            $em = $this->getDoctrine()->getManager();
            $gallery->setOnline(-1);
            $gallery->setUser($user);
            $em->persist($gallery);
            $em->flush();
            return $this->redirectToRoute(
                'gallery_edit', ['id' => $gallery->getId()
            ]);
        }
    }

    /**
     * @Route("/", name="gallery_index", methods="GET")
     * @param GalleryRepository $galleryRepository
     * @return Response
     */
    public function index(GalleryRepository $galleryRepository): Response
    {
        $criteria = ['online' => 1];
        return $this->render('admin/gallery/index.html.twig', [
            'galleries' => $galleryRepository->findBy($criteria)
        ]);
    }

    /**
     * @Route("/new", name="gallery_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $gallery = new Gallery();
        $form = $this->createForm(GalleryType::class, $gallery);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($gallery);
            $em->flush();

            return $this->redirectToRoute('gallery_index');
        }

        return $this->render('gallery/new.html.twig', [
            'gallery' => $gallery,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="gallery_show", methods="GET")
     * @param Gallery $gallery
     * @return Response
     */
    public function show(Gallery $gallery): Response
    {
        return $this->render('gallery/show.html.twig', ['gallery' => $gallery]);
    }

    /**
     * @Route("/{id}/edit", name="gallery_edit", methods="GET|POST")
     * @param Request $request
     * @param Gallery $gallery
     * @return Response
     */
    public function edit(Request $request, Gallery $gallery): Response
    {
        $form = $this->createForm(GalleryType::class, $gallery);
        if ( $request->isXmlHttpRequest() ) {
            $this->handlerUploader($request, $gallery);
        }
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $gallery->setOnline(true);
            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute('gallery_index');
        }
        return $this->render('admin/gallery/edit.html.twig', [
            'gallery' => $gallery,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="gallery_delete", methods="DELETE")
     * @param Request $request
     * @param Gallery $gallery
     * @return Response
     */
    public function delete(Request $request, Gallery $gallery): Response
    {
        if ($this->isCsrfTokenValid('delete'.$gallery->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($gallery);
            $em->flush();
        }

        return $this->redirectToRoute('gallery_index');
    }

    /**
     * @param Request $request
     * @param $gallery
     * @return JsonResponse|void
     */
    private function handlerUploader(Request $request, $gallery)
    {
        if (!$gallery instanceof Gallery) { return; }
        $em = $this->getDoctrine()->getManager();
        $media = new Media();
        /** @var UploadedFile $file */
        $file = $request->files->get('images');
        $fileName = md5(uniqid()).'.'.$file->guessExtension();
        list($width, $height) = getimagesize($file);
        $file->move(
            $this->getParameter('gallery_directory'),
            $fileName
        );
        $media->setGallery($gallery)
            ->setOriginalName($file->getClientOriginalName())
            ->setImageSize($file->getSize())
            ->setImageHeight($height)
            ->setImageWidth($width)
            ->setImageUrl($fileName)
        ;
        $em->persist($media);
        $em->flush();
        return new JsonResponse($media);
    }

}