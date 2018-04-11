<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;
use libphonenumber\PhoneNumber;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints AS Assert;
use Misd\PhoneNumberBundle\Validator\Constraints\PhoneNumber as AssertPhoneNumber;

/**
 * @ORM\Table(name="app_users")
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
     * @ORM\Column(type="string", length=25, unique=true)
     */
    protected $username;

    /**
     * @ORM\Column(type="string", length=64)
     * @Assert\NotNull(message="Entrez un mot de passe")
     * @Assert\NotBlank(message="Veuillez renseignez un mot de passe")
     */
    protected $password;

    /**
     * @Assert\NotBlank()
     * @Assert\Length(max=4096)
     */
    protected $plainPassword;


    /**
     * @var
     * @ORM\Column(type="json_array", nullable=true)
     */
    protected $roles = [];

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message="Entrez votre nom")
     * @Assert\NotNull(message="Veuillez entrez votre nom")
     */
    protected $firstname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message="Entrez votre prénom")
     * @Assert\NotNull(message="Veuillez entrez votre prénom")
     */
    protected $lastname;

    /**
     * @ORM\Column(type="phone_number")
     * @AssertPhoneNumber(type="mobile", message="Numero de téléphone incorrect")
     * @Assert\NotBlank(message="Veuillez entrez votre numero de téléphone")
     * @Assert\NotNull(message="Entrez un numero de téléphone")
     * @Serializer\Type()
     */
    protected $phone;

    /**
     * @var PhoneNumber
     * @ORM\Column(name="email", type="string", unique=true, nullable=true)
     * @Assert\NotBlank(message="Vous n'avez pas entrez d'adresse email")
     * @Assert\NotNull(message="Entrez une adresse mail")
     */
    protected $email;

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
     * @ORM\Column(name="created", type="datetime",nullable=true)
     */
    protected $created;


    public function __construct()
    {
        $this->created = new \DateTime('now');
        $this->isActive = true;
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
     * @return mixed
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * @param $phone
     * @return Users
     */
    public function setPhone($phone): self
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
     * {@inheritdoc}
     */
    public function getRoles()
    {
        $roles = $this->roles;
        return array_unique($roles);
    }

    /**
     * {@inheritdoc}
     */
    public function hasRole($role)
    {
        return in_array(strtoupper($role), $this->getRoles(), true);
    }

    /**
     * @param array $roles
     * @return $this
     */
    public function setRoles( array $roles)
    {
        $this->roles = $roles;
        return $this;
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
    public function eraseCredentials(){}

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
     * @return mixed
     */
    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    /**
     * @param mixed $plainPassword
     */
    public function setPlainPassword($plainPassword)
    {
        $this->plainPassword = $plainPassword;
    }

}
