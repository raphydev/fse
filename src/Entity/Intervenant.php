<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints AS Assert;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\IntervenantRepository")
 * @Vich\Uploadable
 */
class Intervenant
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @Assert\File(
     *     maxSize="3M",
     *     mimeTypes={"image/png", "image/jpeg", "image/jpg"}
     * )
     *
     * @Vich\UploadableField(mapping="intervenant_image", fileNameProperty="imageName", size="imageSize")
     *
     * @var File $imageFile
     */
    protected $imageFile;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $imageSize;


    /**
     * @var string $imageName
     *
     * @ORM\Column(type="string", length=255)
     */
    protected $imageName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotNull(message="Entrez le nom de l'intervenant")
     */
    protected $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotNull(message="Entrez son poste")
     */
    protected $office;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotNull(message="Entrez la position d'affichage")
     * @Assert\Type(type="integer", message="La  valeur n'est pas numerique")
     */
    protected $position;


    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $created;

    /**
     * Intervenant constructor.
     */
    public function __construct()
    {
        $this->created = new \DateTime('now');
    }


    public function getId()
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getOffice(): ?string
    {
        return $this->office;
    }

    public function setOffice(string $office): self
    {
        $this->office = $office;

        return $this;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(int $position): self
    {
        $this->position = $position;
        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $image
     * @throws \Exception
     */
    public function setImageFile(?File $image = null): void
    {
        $this->imageFile = $image;

        if (null !== $image) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->created = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageName(?string $imageName): void
    {
        $this->imageName = $imageName;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function setImageSize(?int $imageSize): void
    {
        $this->imageSize = $imageSize;
    }

    public function getImageSize(): ?int
    {
        return $this->imageSize;
    }

    public function getUploadDir()
    {
        // On retourne le chemin relatif vers l'image pour un navigateur
        return 'images/intervenant';
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
        return $this->getUploadDir().'/'.$this->imageName;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    /**
     * @param \DateTimeInterface|null $created
     * @return Intervenant
     */
    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }
}
