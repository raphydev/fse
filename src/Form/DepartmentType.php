<?php

namespace App\Form;

use App\Entity\Department;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\DataTransformer\NumberToLocalizedStringTransformer;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DepartmentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => "Nom du departement",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Renseignez le nom du departement'

                ]
            ])
            ->add('mission', TextareaType::class, [
                'label' => "Mission du departement",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Décrivez la mission du departement'
                ]
            ])
            ->add('number_employer', NumberType::class, [
                'label' => "Nombre d'employé",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.'
                ],
                'rounding_mode' => NumberToLocalizedStringTransformer::ROUND_HALF_UP
            ])
            ->add('manager_name', TextType::class, [
                'label' => "Responsable de departement",
                'required' => true,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Nom du responsable departement'
                ]
            ])
            ->add('manager_profile_experience', TextareaType::class, [
                'label' => "Profil et expérience du responsable",
                'required' => false,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Décrivez le profil et l\'experience du responsable'
                ]
            ])
            ->add('manager_strength_weaknesses', TextareaType::class, [
                'label' => "Forces et faiblesses du responsable",
                'required' => false,
                'attr' => [
                    'data-error' => 'Veuillez renseigner ce champ.',
                    'placeholder' => 'Decrivez les Forces et faiblesses du responsable'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Department::class,
        ]);
    }
}
