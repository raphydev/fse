<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TrainingRepository")
 */
class Training
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Gedmo\Slug(fields={"name", "id"}, separator="_", updatable=false)
     */
    private $slug;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Former", mappedBy="training")
     */
    private $former;

    public function __construct()
    {
        $this->former = new ArrayCollection();
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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return Collection|Former[]
     */
    public function getFormer(): Collection
    {
        return $this->former;
    }

    public function addFormer(Former $former): self
    {
        if (!$this->former->contains($former)) {
            $this->former[] = $former;
            $former->setTraining($this);
        }

        return $this;
    }

    public function removeFormer(Former $former): self
    {
        if ($this->former->contains($former)) {
            $this->former->removeElement($former);
            // set the owning side to null (unless already changed)
            if ($former->getTraining() === $this) {
                $former->setTraining(null);
            }
        }

        return $this;
    }
}
