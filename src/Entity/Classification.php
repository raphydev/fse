<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints AS Assert;

/**
 * @ORM\Table(name="classification")
 * @ORM\Entity(repositoryClass="App\Repository\ClassificationRepository")
 */
class Classification
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=false, name="title")
     * @Assert\NotNull(message="Entrez un titre svp")
     */
    protected $title;

    /**
     * @ORM\Column(type="integer", nullable=false, name="position")
     * @Assert\NotNull(message="Entrez la position d'affichage du pack")
     */
    protected $position;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Partner", mappedBy="classification")
     */
    protected $partner;

    public function __construct()
    {
        $this->partner = new ArrayCollection();
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

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(int $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getPartner(): ?Partner
    {
        return $this->partner;
    }

    public function setPartner(?Partner $partner): self
    {
        $this->partner = $partner;

        return $this;
    }

    public function addPartner(Partner $partner): self
    {
        if (!$this->partner->contains($partner)) {
            $this->partner[] = $partner;
            $partner->setClassification($this);
        }

        return $this;
    }

    public function removePartner(Partner $partner): self
    {
        if ($this->partner->contains($partner)) {
            $this->partner->removeElement($partner);
            // set the owning side to null (unless already changed)
            if ($partner->getClassification() === $this) {
                $partner->setClassification(null);
            }
        }

        return $this;
    }
}
