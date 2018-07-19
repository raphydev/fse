<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DepartmentRepository")
 */
class Department
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank()
     */
    protected $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    protected $mission;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    protected $employer;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $chief;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    protected $content;

    /**
     * @var
     * @ORM\ManyToOne(
     *     targetEntity="App\Entity\Company",
     *     inversedBy="departments",
     *     cascade={"persist","remove"}
     *     )
     */
    protected $company;


    public function getId()
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getMission(): ?string
    {
        return $this->mission;
    }

    public function setMission(?string $mission): self
    {
        $this->mission = $mission;

        return $this;
    }

    public function getEmployer(): ?int
    {
        return $this->employer;
    }

    public function setEmployer(?int $employer): self
    {
        $this->employer = $employer;

        return $this;
    }

    public function getChief(): ?string
    {
        return $this->chief;
    }

    public function setChief(?string $chief): self
    {
        $this->chief = $chief;

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

    public function getCompany(): ?Company
    {
        return $this->company;
    }

    public function setCompany(?Company $company): self
    {
        $this->company = $company;

        return $this;
    }
}
