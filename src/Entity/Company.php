<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints AS Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CompanyRepository")
 */
class Company
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
     * @var Bool
     * @ORM\Column(type="boolean", nullable=true)
     */
    protected $is_reinforcement;

    /**
     * @var Bool
     * @ORM\Column(type="boolean", nullable=true)
     */
    protected $is_satisfied;

    /**
     * @var
     * @ORM\Column(type="text", nullable=true)
     */
    protected $comment_reinforcement;


    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Gedmo\Slug(fields={"name", "id"}, separator="_", updatable=false)
     */
    protected $slug;


    /**
     * @var
     * @ORM\ManyToOne(targetEntity="App\Entity\Domain", inversedBy="companies")
     * @Assert\NotBlank(message="Selectionnez le domaine d'activité")
     */
    protected $domain;

    /**
     * @var
     * @ORM\ManyToOne(targetEntity="App\Entity\Legal", inversedBy="companies")
     * @Assert\NotBlank(message="Selectionnez la forme juridique")
     */
    protected $legal;

    /**
     * @var
     * @ORM\ManyToOne(targetEntity="App\Entity\Users", inversedBy="companies")
     */
    protected $user;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Shareholder", mappedBy="company", cascade={"persist","remove"})
     */
    protected $shareholders;

    /**
     * @var
     * @ORM\OneToMany(
     *     targetEntity="App\Entity\Department",
     *      mappedBy="company",
     *      fetch="EXTRA_LAZY",
     *      orphanRemoval=true,
     *      cascade={"persist","remove"}
     * )
     */
    protected $departments;

    /**
     * @var
     * @ORM\OneToMany(
     *     targetEntity="App\Entity\Positioning",
     *      mappedBy="company",
     *      fetch="EXTRA_LAZY",
     *      orphanRemoval=true,
     *      cascade={"persist","remove"}
     * )
     */
    protected $positioning;

    public function __construct()
    {
        $this->shareholders = new ArrayCollection();
        $this->departments = new ArrayCollection();
        $this->positioning = new ArrayCollection();
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
     * @return Collection|Shareholder[]
     */
    public function getShareholders(): Collection
    {
        return $this->shareholders;
    }

    public function addShareholder(Shareholder $shareholder): self
    {
        if (!$this->shareholders->contains($shareholder)) {
            $this->shareholders[] = $shareholder;
            $shareholder->setCompany($this);
        }

        return $this;
    }

    public function removeShareholder(Shareholder $shareholder): self
    {
        if ($this->shareholders->contains($shareholder)) {
            $this->shareholders->removeElement($shareholder);
            // set the owning side to null (unless already changed)
            if ($shareholder->getCompany() === $this) {
                $shareholder->setCompany(null);
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
            $department->setCompany($this);
        }

        return $this;
    }

    public function removeDepartment(Department $department): self
    {
        if ($this->departments->contains($department)) {
            $this->departments->removeElement($department);
            // set the owning side to null (unless already changed)
            if ($department->getCompany() === $this) {
                $department->setCompany(null);
            }
        }

        return $this;
    }

    public function getIsReinforcement(): ?bool
    {
        return $this->is_reinforcement;
    }

    public function setIsReinforcement(?bool $is_reinforcement): self
    {
        $this->is_reinforcement = $is_reinforcement;

        return $this;
    }

    public function getIsSatisfied(): ?bool
    {
        return $this->is_satisfied;
    }

    public function setIsSatisfied(?bool $is_satisfied): self
    {
        $this->is_satisfied = $is_satisfied;

        return $this;
    }

    public function getCommentReinforcement(): ?string
    {
        return $this->comment_reinforcement;
    }

    public function setCommentReinforcement(?string $comment_reinforcement): self
    {
        $this->comment_reinforcement = $comment_reinforcement;

        return $this;
    }

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|Positioning[]
     */
    public function getPositioning(): Collection
    {
        return $this->positioning;
    }

    public function addPositioning(Positioning $positioning): self
    {
        if (!$this->positioning->contains($positioning)) {
            $this->positioning[] = $positioning;
            $positioning->setCompany($this);
        }

        return $this;
    }

    public function removePositioning(Positioning $positioning): self
    {
        if ($this->positioning->contains($positioning)) {
            $this->positioning->removeElement($positioning);
            // set the owning side to null (unless already changed)
            if ($positioning->getCompany() === $this) {
                $positioning->setCompany(null);
            }
        }

        return $this;
    }

}
