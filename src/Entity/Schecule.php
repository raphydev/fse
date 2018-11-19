<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScheculeRepository")
 */
class Schecule
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Program", mappedBy="schecule")
     */
    protected $programs;

    /**
     * @ORM\Column(type="string", length=150)
     */
    protected $dateName;

    public function __construct()
    {
        $this->programs = new ArrayCollection();
    }

    public function getId()
    {
        return $this->id;
    }

    public function getDateName(): ?string
    {
        return $this->dateName;
    }

    public function setDateName(string $dateName): self
    {
        $this->dateName = $dateName;

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
            $program->setSchecule($this);
        }

        return $this;
    }

    public function removeProgram(Program $program): self
    {
        if ($this->programs->contains($program)) {
            $this->programs->removeElement($program);
            // set the owning side to null (unless already changed)
            if ($program->getSchecule() === $this) {
                $program->setSchecule(null);
            }
        }

        return $this;
    }
}
