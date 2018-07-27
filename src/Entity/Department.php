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
     * @Assert\NotBlank(message="Veuillez renseigner le nom du departement")
     */
    protected $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\NotBlank(message="Veuillez decrire la mission du departement")
     */
    protected $mission;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\NotBlank(message="Veuillez renseignez ce champ")
     */
    protected $number_employer;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message="Veuillez renseigner ce champ")
     */
    protected $manager_name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    protected $manager_profile_experience;

    /**
     * @var
     * @ORM\Column(type="text", nullable=true)
     */
    protected $manager_strength_weaknesses;

    /**
     * @var
     * @ORM\ManyToOne(
     *     targetEntity="App\Entity\Company",
     *     inversedBy="departments",
     *     cascade={"persist","remove"}
     *     )
     */
    protected $company;

    public function getId(): ?int
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

    public function getNumberEmployer(): ?int
    {
        return $this->number_employer;
    }

    public function setNumberEmployer(?int $number_employer): self
    {
        $this->number_employer = $number_employer;

        return $this;
    }

    public function getManagerName(): ?string
    {
        return $this->manager_name;
    }

    public function setManagerName(?string $manager_name): self
    {
        $this->manager_name = $manager_name;

        return $this;
    }

    public function getManagerProfileExperience(): ?string
    {
        return $this->manager_profile_experience;
    }

    public function setManagerProfileExperience(?string $manager_profile_experience): self
    {
        $this->manager_profile_experience = $manager_profile_experience;

        return $this;
    }

    public function getManagerStrengthWeaknesses(): ?string
    {
        return $this->manager_strength_weaknesses;
    }

    public function setManagerStrengthWeaknesses(?string $manager_strength_weaknesses): self
    {
        $this->manager_strength_weaknesses = $manager_strength_weaknesses;

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
