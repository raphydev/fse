<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SectionRepository")
 */
class Section
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Donnez le titre")
     */
    protected $title;

    /**
     * @ORM\Column(type="string", length=10)
     * @Assert\NotBlank(message="Entrez l'interval horaire")
     */
    protected $interval_horaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message="Entrez le lieu")
     */
    protected $lieu;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Entrez le nom du tag")
     */
    protected $tagName;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Program", mappedBy="section")
     */
    protected $programs;

    public function __construct()
    {
        $this->programs = new ArrayCollection();
    }

    public function getId(): ?int
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

    public function getIntervalHoraire(): ?string
    {
        return $this->interval_horaire;
    }

    public function setIntervalHoraire(string $interval_horaire): self
    {
        $this->interval_horaire = $interval_horaire;

        return $this;
    }

    public function getLieu(): ?string
    {
        return $this->lieu;
    }

    public function setLieu(?string $lieu): self
    {
        $this->lieu = $lieu;

        return $this;
    }

    public function getTagName(): ?string
    {
        return $this->tagName;
    }

    public function setTagName(string $tagName): self
    {
        $this->tagName = $tagName;

        return $this;
    }

    /**
     * @return Collection|Program[]
     */
    public function getPrograms(): Collection
    {
        return $this->programs;
    }

    public function addProgram(Program $program): self
    {
        if (!$this->programs->contains($program)) {
            $this->programs[] = $program;
            $program->setSection($this);
        }

        return $this;
    }

    public function removeProgram(Program $program): self
    {
        if ($this->programs->contains($program)) {
            $this->programs->removeElement($program);
            // set the owning side to null (unless already changed)
            if ($program->getSection() === $this) {
                $program->setSection(null);
            }
        }

        return $this;
    }
}
