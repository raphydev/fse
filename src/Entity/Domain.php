<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints AS Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DomainRepository")
 */
class Domain
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotNull(message="Entrez le nom du domaine d'activité")
     */
    protected $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Gedmo\Slug(fields={"name", "id"}, separator="_", updatable=false)
     */
    protected $slug;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Compagny", mappedBy="domain")
     */
    protected $compagny;

    public function __construct()
    {
        $this->compagny = new ArrayCollection();
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
     * @return Collection|Compagny[]
     */
    public function getCompagny(): Collection
    {
        return $this->compagny;
    }

    public function addCompagny(Compagny $compagny): self
    {
        if (!$this->compagny->contains($compagny)) {
            $this->compagny[] = $compagny;
            $compagny->setDomain($this);
        }

        return $this;
    }

    public function removeCompagny(Compagny $compagny): self
    {
        if ($this->compagny->contains($compagny)) {
            $this->compagny->removeElement($compagny);
            // set the owning side to null (unless already changed)
            if ($compagny->getDomain() === $this) {
                $compagny->setDomain(null);
            }
        }

        return $this;
    }
}
