<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints AS Assert;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RapportRepository")
 * @Vich\Uploadable
 */
class Rapport
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Renseignez le titre")
     */
    protected $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Gedmo\Slug(fields={"title", "id"}, separator="_", updatable=false)
     */
    protected $slug;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $created;

    /**
     * @Assert\NotBlank(message="Uploadez le plan")
     * @Assert\File(
     *     maxSize="3M",
     *     mimeTypes={"application/pdf"}
     * )
     * @Vich\UploadableField(mapping="rapport_file", fileNameProperty="fileName", size="fileSize")
     * @var File $imageFile
     */
    protected $docFile;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $fileSize;

    /**
     * @var string $fileName
     *
     * @ORM\Column(type="string", length=255)
     */
    protected $fileName;


    public function __construct()
    {
        $this->created = new \DateTime('now');
    }

    public function getId()
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getCreated(): ?\DateTime
    {
        return $this->created;
    }

    public function setCreated(?\DateTime $created): self
    {
        $this->created = $created;
        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $file
     * @throws \Exception
     */
    public function setDocFile(?File $file = null): void
    {
        $this->docFile = $file;
        if (null !== $file) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->created = new \DateTimeImmutable();
        }
    }

    public function getDocFile(): ?File
    {
        return $this->docFile;
    }

    public function setFileName(?string $fileName): void
    {
        $this->fileName = $fileName;
    }

    public function getFileName(): ?string
    {
        return $this->fileName;
    }

    public function setFileSize(?int $fileSize): void
    {
        $this->fileSize = $fileSize;
    }

    public function getFileSize(): ?int
    {
        return $this->fileSize;
    }

    public function getUploadDir()
    {
        // On retourne le chemin relatif vers l'image pour un navigateur
        return 'files_reader/rapport';
    }
    protected function getUploadRootDir()
    {
        // On retourne le chemin relatif vers l'image pour notre code PHP
        return __DIR__.'/../../../../public/'.$this->getUploadDir();
    }
    /**
     * @return string
     */
    public function getAssertPath()
    {
        return $this->getUploadDir().'/'.$this->fileName;
    }
}
