<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints AS Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PartnerTypeRepository")
 */
class PartnerType
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
     * @ORM\ManyToOne(targetEntity="App\Entity\Partner", inversedBy="partnerType")
     */
    protected $partner;


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
}
