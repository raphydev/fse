<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints AS Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CompagnyRepository")
 */
class Compagny
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotNull(message="Entrez le nom de l'entreprise")
     */
    protected $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotNull(message="Entrez le siège social de l'entreprise")
     */
    protected $seat;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotNull(message="Renseignez la ville Svp")
     */
    protected $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Url(message="Entrez le nom du site web sous ce format: http://www.exemple.xxx")
     */
    protected $website;

    /**
     * @var
     * @ORM\Column(type="text", nullable=false)
     * @Assert\NotNull(message="Entrez les informations demandées pour continuer ")
     */
    protected $clientMarket;

    /**
     * @var
     * @ORM\Column(type="text", nullable=false)
     * @Assert\NotNull(message="Entrez les informations demandées pour continuer")
     */
    protected $objectif;

    /**
     * @var
     * @ORM\Column(type="text", nullable=false)
     * @Assert\NotNull(message="Entrez les informations demandées pour continuer")
     */
    protected $strategie;

    /**
     * @var
     * @ORM\Column(type="text", nullable=false)
     * @Assert\NotNull(message="Entrez les informations demandées pour continuer")
     */
    protected $besoin;

    /**
     * @var
     * @ORM\Column(type="text", nullable=false)
     * @Assert\NotNull(message="Entrez les informations demandées pour continuer")
     */
    protected $content;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Gedmo\Slug(fields={"name", "id"}, separator="_", updatable=false)
     */
    protected $slug;

    /**
     * @var
     * @ORM\Column(type="text", nullable=false)
     * @Assert\NotNull(message="Entrez la description de vos produits et services")
     */
    protected $productService;

    /**
     * @var
     * @ORM\Column(type="text", nullable=false)
     * @Assert\NotNull(message="Entrez la description de vos produits et services")
     */
    protected $concurrent;

    /**
     * @var
     * @ORM\ManyToOne(targetEntity="App\Entity\Domain", inversedBy="compagny")
     * @Assert\NotBlank(message="Selectionnez le domaine d'activité")
     */
    protected $domain;

    /**
     * @var
     * @ORM\ManyToOne(targetEntity="App\Entity\Legal", inversedBy="compagny")
     * @Assert\NotBlank(message="Selectionnez la forme juridique")
     */
    protected $legal;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Actionnaire", mappedBy="compagny", cascade={"persist","remove"})
     * @Assert\Valid()
     */
    protected $actionnaire;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Department", mappedBy="compagny", cascade={"persist","remove"})
     * @Assert\Valid()
     */
    protected $departments;

    public function __construct()
    {
        $this->actionnaire = new ArrayCollection();
        $this->departments = new ArrayCollection();
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

    public function getSeat(): ?string
    {
        return $this->seat;
    }

    public function setSeat(?string $seat): self
    {
        $this->seat = $seat;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(?string $website): self
    {
        $this->website = $website;

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

    public function getDomain(): ?Domain
    {
        return $this->domain;
    }

    public function setDomain(?Domain $domain): self
    {
        $this->domain = $domain;

        return $this;
    }

    public function getLegal(): ?Legal
    {
        return $this->legal;
    }

    public function setLegal(?Legal $legal): self
    {
        $this->legal = $legal;

        return $this;
    }

    /**
     * @return Collection|Actionnaire[]
     */
    public function getActionnaire(): Collection
    {
        return $this->actionnaire;
    }

    public function addActionnaire(Actionnaire $actionnaire): self
    {
        if (!$this->actionnaire->contains($actionnaire)) {
            $this->actionnaire[] = $actionnaire;
            $actionnaire->setCompagny($this);
        }

        return $this;
    }

    public function removeActionnaire(Actionnaire $actionnaire): self
    {
        if ($this->actionnaire->contains($actionnaire)) {
            $this->actionnaire->removeElement($actionnaire);
            // set the owning side to null (unless already changed)
            if ($actionnaire->getCompagny() === $this) {
                $actionnaire->setCompagny(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Department[]
     */
    public function getDepartments(): Collection
    {
        return $this->departments;
    }

    public function addDepartment(Department $department): self
    {
        if (!$this->departments->contains($department)) {
            $this->departments[] = $department;
            $department->setCompagny($this);
        }

        return $this;
    }

    public function removeDepartment(Department $department): self
    {
        if ($this->departments->contains($department)) {
            $this->departments->removeElement($department);
            // set the owning side to null (unless already changed)
            if ($department->getCompagny() === $this) {
                $department->setCompagny(null);
            }
        }

        return $this;
    }

    public function getClientMarket(): ?string
    {
        return $this->clientMarket;
    }

    public function setClientMarket(string $clientMarket): self
    {
        $this->clientMarket = $clientMarket;

        return $this;
    }

    public function getObjectif(): ?string
    {
        return $this->objectif;
    }

    public function setObjectif(string $objectif): self
    {
        $this->objectif = $objectif;

        return $this;
    }

    public function getStrategie(): ?string
    {
        return $this->strategie;
    }

    public function setStrategie(string $strategie): self
    {
        $this->strategie = $strategie;

        return $this;
    }

    public function getBesoin(): ?string
    {
        return $this->besoin;
    }

    public function setBesoin(string $besoin): self
    {
        $this->besoin = $besoin;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getProductService(): ?string
    {
        return $this->productService;
    }

    public function setProductService(string $productService): self
    {
        $this->productService = $productService;

        return $this;
    }

    public function getConcurrent(): ?string
    {
        return $this->concurrent;
    }

    public function setConcurrent(string $concurrent): self
    {
        $this->concurrent = $concurrent;

        return $this;
    }
}
