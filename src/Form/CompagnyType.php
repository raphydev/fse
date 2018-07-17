<?php

namespace App\Form;

use App\Entity\Compagny;
use App\Entity\Domain;
use App\Entity\Legal;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CompagnyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => "Nom de l'entreprise",
                'required' => true
            ])
            ->add('seat', TextType::class, [
                'label' => "Siège social",
                'required' => true
            ])
            ->add('city', TextType::class, [
                'label' => "Ville",
                'required' => true
            ])
            ->add('website', TextType::class, [
                'label' => "Avez-vous un site internet ? Si oui renseignez le",
                'required' => false
            ])
            ->add('productService', TextareaType::class, [
                'label' => "Décrivez vos produits et services ?  Quelle est votre unique proposition de valeur pour ces offres ? ",
                'required' => true,
                'attr' => [
                    "id" => "editor-id",
                    "data-provide" => "quill",
                    "data-min-height" => "150",
                    "data-toolbar" => "slim",
                ]
            ])
            ->add('clientMarket', TextareaType::class, [
                'label' => "Quels sont vos principaux clients et marchés ?  (Maximum de 200 mots) ? Quelle est l’étendue de ce marché (géographie, taille, panier moyen, etc.) ?",
                'required' => true,
                'attr' => [
                    "id" => "editor-id",
                    "data-provide" => "quill",
                    "data-min-height" => "150",
                    "data-toolbar" => "slim",
                ]
            ])
            ->add('concurrent', TextareaType::class, [
                'label' => "Qui sont vos principaux compétiteurs ?  (Maximum de 100 mots) ? Comment vous différenciez-vous ? ",
                'required' => true,
                'attr' => [
                    "id" => "editor-id",
                    "data-provide" => "quill",
                    "data-min-height" => "150",
                    "data-toolbar" => "slim",
                ]
            ])
            ->add('objectif', TextareaType::class, [
                'label' => "Quels sont vos 3 principaux objectifs en termes de développement dans 3 ans ?",
                'required' => true,
                'attr' => [
                    "id" => "editor-id",
                    "data-provide" => "quill",
                    "data-min-height" => "150",
                    "data-toolbar" => "slim",
                ]
            ])
            ->add('strategie', TextareaType::class, [
                'label' => "Quelles sont vos principales stratégies pour atteindre ces objectifs ?  (Maximum de 100 mots)",
                'required' => true,
                'attr' => [
                    "id" => "editor-id",
                    "data-provide" => "quill",
                    "data-min-height" => "150",
                    "data-toolbar" => "slim",
                ]
            ])
            ->add('besoin', TextareaType::class, [
                'label' => "Quels sont vos principaux besoins pour réussir à atteindre ces objectifs ?  (Maximum de 100 mots)",
                'required' => true,
                'attr' => [
                    "id" => "editor-id",
                    "data-provide" => "quill",
                    "data-min-height" => "150",
                    "data-toolbar" => "slim",
                ]
            ])
            ->add('content', TextareaType::class, [
                'label' => "Comment pensez-vous que le programme pourrait vous aider à atteindre ces objectifs ? Pourquoi ? ",
                'required' => true,
                'attr' => [
                    "id" => "editor-id",
                    "data-provide" => "quill",
                    "data-min-height" => "150",
                    "data-toolbar" => "slim",
                ]
            ])
            ->add('domain', EntityType::class, [
                'class' => Domain::class,
                'choice_label' => 'name',
                'label' => 'Selectionnez votre domaine d\'activité',
                'required' => true
            ])
            ->add('legal', EntityType::class, [
                'class' => Legal::class,
                'choice_label' => 'name',
                'label' => 'Selectionnez la forme Juridique',
                'required' => true
            ])
            ->add('actionnaire', CollectionType::class, [
                'entry_type' => ActionnaireType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false
            ])
            ->add('departments', CollectionType::class, [
                'entry_type' => DepartmentType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Compagny::class,
        ]);
    }
}
