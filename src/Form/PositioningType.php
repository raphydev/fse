<?php

namespace App\Form;

use App\Entity\Positioning;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PositioningType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('product_service', TextareaType::class, [
                'label' => "Décrivez vos produits et services ?  Quelle est votre unique proposition de valeur pour ces offres ? ",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Décrivez ici'
                ]
            ])
            ->add('client_market',TextareaType::class, [
                'label' => "Quels sont vos principaux clients et marchés ?  (Maximum de 200 mots) ? Quelle est l’étendue de ce marché (géographie, taille, panier moyen, etc.) ?",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Décrivez ici',
                    'data-rule-maxlength' => 200
                ]
            ])
            ->add('concurrent', TextareaType::class, [
                'label' => "Qui sont vos principaux compétiteurs ?  (Maximum de 100 mots) ? Comment vous différenciez-vous ? ",
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Décrivez ici',
                    'data-rule-maxlength' => 100
                ]
            ])
            ->add('principe_objectif', TextareaType::class, [
                'label' => "Quels sont vos 3 principaux objectifs en termes de développement dans 3 ans ? ",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Décrivez ici'
                ]
            ])
            ->add('strategie', TextareaType::class, [
                'label' => "Quelles sont vos principales stratégies pour atteindre ces objectifs ?  (Maximum de 100 mots)",
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Décrivez ici',
                    'data-rule-maxlength' => 100
                ]
            ])
            ->add('besoin', TextareaType::class, [
                'label' => "Quels sont vos principaux besoins pour réussir à atteindre ces objectifs ?  (Maximum de 100 mots)",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Décrivez ici',
                    'data-rule-maxlength' => 100
                ]
            ])
            ->add('program_help', TextareaType::class, [
                'label' => "Quels sont vos principaux besoins pour réussir à atteindre ces objectifs ?  (Maximum de 100 mots)",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Décrivez ici',
                    'data-rule-maxlength' => 100
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Positioning::class,
        ]);
    }
}
