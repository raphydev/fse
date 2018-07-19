<?php

namespace App\Form;

use App\Entity\Company;
use App\Entity\Domain;
use App\Entity\Legal;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CompanyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => "Nom de l'entreprise",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Renseignez le nom de votre entreprise'

                ]
            ])
            ->add('seat', TextType::class, [
                'label' => "Siège social",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Renseignez l\'adresse de l\'entreprise'
                ]
            ])
            ->add('city', TextType::class, [
                'label' => "Ville",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez ce champ.',
                    'placeholder' => 'Renseignez la ville de l\'entreprise'
                ]
            ])
            ->add('website', UrlType::class, [
                'label' => "Avez-vous un site internet ? 
                Si oui renseignez-le",
                'required' => false,
                'attr' => [
                    'placeholder' => 'http://www.exemple.com'
                ]
            ])
            ->add('domain', EntityType::class, [
                'class' => Domain::class,
                'choice_label' => 'name',
                'label' => 'Selectionnez votre domaine d\'activité',
                'required' => true,
                'placeholder' => 'Selectionnez'
            ])
            ->add('legal', EntityType::class, [
                'class' => Legal::class,
                'choice_label' => 'name',
                'label' => 'Selectionnez la forme Juridique',
                'required' => true,
                'placeholder' => 'Selectionnez'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Company::class,
        ]);
    }
}
