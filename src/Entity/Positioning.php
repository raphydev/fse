<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PositioningRepository")
 */
class Positioning
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="Veuillez renseigner ce champ")
     */
    protected $product_service;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="Veuillez renseigner ce champ")
     */
    protected $client_market;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    protected $concurrent;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="Veuillez renseigner ce champ")
     */
    protected $principe_objectif;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    protected $strategie;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="Veuillez renseigner ce champ")
     */
    protected $besoin;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="Veuillez renseigner ce champ")
     */
    protected $program_help;

    /**
     * @var 
     * @ORM\ManyToOne(targetEntity="App\Entity\Company", inversedBy="positioning")
     */
    protected $company;
    

    public function getId()
    {
        return $this->id;
    }

    public function getProductService(): ?string
    {
        return $this->product_service;
    }

    public function setProductService(string $product_service): self
    {
        $this->product_service = $product_service;

        return $this;
    }

    public function getClientMarket(): ?string
    {
        return $this->client_market;
    }

    public function setClientMarket(string $client_market): self
    {
        $this->client_market = $client_market;

        return $this;
    }

    public function getConcurrent(): ?string
    {
        return $this->concurrent;
    }

    public function setConcurrent(?string $concurrent): self
    {
        $this->concurrent = $concurrent;

        return $this;
    }

    public function getPrincipeObjectif(): ?string
    {
        return $this->principe_objectif;
    }

    public function setPrincipeObjectif(string $principe_objectif): self
    {
        $this->principe_objectif = $principe_objectif;

        return $this;
    }

    public function getStrategie(): ?string
    {
        return $this->strategie;
    }

    public function setStrategie(?string $strategie): self
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

    public function getProgramHelp(): ?string
    {
        return $this->program_help;
    }

    public function setProgramHelp(string $program_help): self
    {
        $this->program_help = $program_help;

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
