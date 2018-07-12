<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * @ORM\Entity(repositoryClass="App\Repository\FormerRepository")
 */
class Former
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
     * @ORM\Column(type="text", nullable=true)
     */
    private $content;

    /**
     * @var
     * @ORM\ManyToOne(targetEntity="App\Entity\Training", inversedBy="former")
     */
    private $training;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Item", mappedBy="former")
     */
    private $item;

    public function __construct()
    {
        $this->item = new ArrayCollection();
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

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

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

    public function getTraining(): ?Training
    {
        return $this->training;
    }

    public function setTraining(?Training $training): self
    {
        $this->training = $training;

        return $this;
    }

    /**
     * @return Collection|Item[]
     */
    public function getItem(): Collection
    {
        return $this->item;
    }

    public function addItem(Item $item): self
    {
        if (!$this->item->contains($item)) {
            $this->item[] = $item;
            $item->setFormer($this);
        }

        return $this;
    }

    public function removeItem(Item $item): self
    {
        if ($this->item->contains($item)) {
            $this->item->removeElement($item);
            // set the owning side to null (unless already changed)
            if ($item->getFormer() === $this) {
                $item->setFormer(null);
            }
        }

        return $this;
    }
}
