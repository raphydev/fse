<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use libphonenumber\PhoneNumber;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints AS Assert;
use Misd\PhoneNumberBundle\Validator\Constraints\PhoneNumber as AssertPhoneNumber;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Table(name="app_users")
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Entity(repositoryClass="App\Repository\UsersRepository")
 * @UniqueEntity(fields={"email"},message="Cette adresse email existe déjà ")
 * @UniqueEntity(fields={"phone"},message="Ce numero de téléphone est déjà utilisé")
 */
class Users implements UserInterface, \Serializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=128, unique=true, name="username")
     * @Gedmo\Slug(fields={"firstname", "lastname"}, separator="_", updatable=false)
     */
    protected $username;

    /**
     * @Assert\Length(max=4096)
     * @Assert\NotNull(message="Entrez un mot de passe", groups={"registration"})
     */
    protected $plainPassword;

    /**
     * The below length depends on the "algorithm" you use for encoding
     * the password, but this works well with bcrypt.
     *
     * @ORM\Column(type="string", length=64)
     */
    protected $password;


    /**
     * @ORM\Column(name="email", type="string", unique=true, nullable=true)
     * @Assert\NotNull(message="Entrez une adresse mail", groups={"registration"})
     * @Assert\Email(message="Adresse Email nom Valide", groups={"registration"})
     */
    protected $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message="Nom obligatoire", groups={"registration"})
     */
    protected $firstname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, name="lastname")
     * @Assert\NotBlank(message="Prénom obligatoire", groups={"registration"})
     */
    protected $lastname;

    /**
     * @var PhoneNumber
     * @ORM\Column(type="phone_number", nullable=true, length=35, unique=true, name="phone")
     * @AssertPhoneNumber(type="mobile", message="Numero de téléphone incorrect",groups={"registration"})
     * @Assert\NotBlank(message="Numero de téléphone obligatoire", groups={"registration"})
     */
    protected $phone;

    /**
     * @var \DateTime
     */
    protected $lastLogin;


    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    protected $isActive;

    /**
     * @var
     * @ORM\Column(type="boolean", nullable=true)
     */
    protected $isFullFill;

    /**
     * @var
     * @ORM\Column(type="boolean", nullable=true)
     */
    protected $isConition;

    /**
     * @var array
     * @ORM\Column(type="array", nullable=true)
     */
    protected $roles = [];

    /**
     * @var
     * @ORM\Column(name="created", type="datetime",nullable=true)
     */
    protected $created;

    /**
     * @var
     * @Assert\NotNull(message="Renseignez le genre")
     * @ORM\Column(name="gener", type="string", nullable=true)
     */
    protected $gener;

    /**
     * @var
     * @Assert\NotNull(message="Entrez votre age svp")
     * @Assert\Length(min="1", max="2", maxMessage="Entrez un age correct")
     * @ORM\Column(type="integer", length=2)
     */
    protected $age;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Gallery", mappedBy="user")
     */
    protected $galeries;


    public function __construct()
    {
        $this->created = new \DateTime('now');
        $this->isActive = false;
        $this->isFullFill = false;
        $this->galeries = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return null|string
     */
    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    /**
     * @param null|string $firstname
     * @return Users
     */
    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    /**
     * @param null|string $lastname
     * @return Users
     */
    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * @return PhoneNumber|null
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * @param PhoneNumber|null $phone
     * @return Users
     */
    public function setPhone(PhoneNumber $phone): self
    {
        $this->phone = $phone;
        return $this;
    }

    /**
     * @return null|string
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string $email
     * @return Users
     */
    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return bool|null
     */
    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    /**
     * @param bool|null $isActive
     * @return Users
     */
    public function setIsActive(?bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    /**
     * String representation of object
     * @link http://php.net/manual/en/serializable.serialize.php
     * @return string the string representation of the object or null
     * @since 5.1.0
     * @see \Serializable::serialize()
     */
    public function serialize()
    {
        return serialize(array(
            $this->id,
            $this->username,
            $this->password,
            $this->email,
            $this->isActive
        ));
    }

    /**
     * Constructs the object
     * @link http://php.net/manual/en/serializable.unserialize.php
     * @param string $serialized <p>
     * The string representation of the object.
     * </p>
     * @return void
     * @since 5.1.0
     * @see \Serializable::unserialize()
     */
    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->username,
            $this->password,
            $this->email,
            $this->isActive
            ) = unserialize($serialized, ['allowed_classes' => false]);
    }

    /**
     * Returns the password used to authenticate the user.
     *
     * This should be the encoded password. On authentication, a plain-text
     * password will be salted, encoded, and then compared to this value.
     *
     * @return string The password
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * Returns the salt that was originally used to encode the password.
     *
     * This can return null if the password was not encoded using a salt.
     *
     * @return string|null The salt
     */
    public function getSalt()
    {
        return null;
    }

    /**
     * Returns the username used to authenticate the user.
     *
     * @return string The username
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like
     * the plain-text password is stored on this object.
     */
    public function eraseCredentials(){
        $this->plainPassword = null;
    }

    /**
     * @return mixed
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * @param mixed $created
     */
    public function setCreated($created)
    {
        $this->created = $created;
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) $this->getUsername();
    }

    /**
     * {@inheritdoc}
     */
    public function setLastLogin(\DateTime $time = null)
    {
        $this->lastLogin = $time;

        return $this;
    }

    /**
     * Gets the last login time.
     *
     * @return \DateTime
     */
    public function getLastLogin()
    {
        return $this->lastLogin;
    }

    /**
     * @param string $username
     * @return Users
     */
    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getPlainPassword()
    {
        return $this->plainPassword;
    }


    /**
     * @param null|string $password
     */
    public function setPlainPassword(?string $password)
    {
        $this->plainPassword = $password;
    }


    /**
     * @return array|bool|null
     */
    public function getRoles()
    {
        return array_unique(array_merge(['ROLE_USER'], $this->roles));
    }

    /**
     * @param $role
     * @return bool
     */
    public function hasRole($role)
    {
        return in_array(strtoupper($role), $this->getRoles(), true);
    }

    /**
     * @param array $roles
     */
    public function setRoles(array $roles)
    {
        $this->roles = $roles;
    }


    public function resetRoles()
    {
        $this->roles = [];
    }

    /**
     * @return Collection|Gallery[]
     */
    public function getGaleries(): Collection
    {
        return $this->galeries;
    }

    public function addGalery(Gallery $galery): self
    {
        if (!$this->galeries->contains($galery)) {
            $this->galeries[] = $galery;
            $galery->setUser($this);
        }

        return $this;
    }

    public function removeGalery(Gallery $galery): self
    {
        if ($this->galeries->contains($galery)) {
            $this->galeries->removeElement($galery);
            // set the owning side to null (unless already changed)
            if ($galery->getUser() === $this) {
                $galery->setUser(null);
            }
        }

        return $this;
    }

    public function getIsFullFill(): ?bool
    {
        return $this->isFullFill;
    }

    public function setIsFullFill(?bool $isFullFill): self
    {
        $this->isFullFill = $isFullFill;

        return $this;
    }

    public function getGener(): ?string
    {
        return $this->gener;
    }

    public function setGener(?string $gener): self
    {
        $this->gener = $gener;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(int $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getIsConition(): ?bool
    {
        return $this->isConition;
    }

    public function setIsConition(?bool $isConition): self
    {
        $this->isConition = $isConition;

        return $this;
    }

}
