<?php

namespace App\Form;

use App\Entity\Department;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
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
                'label' => "Département ou pôle d'activité clés",
                'required' => true,
                'attr' => [
                    'class' => 'col-md-10 col-xl-8',
                    'placeholder' => 'Departement clés'
                ]
            ])
            ->add('mission', TextType::class, [
                'label' => "Mission principale du Département",
                'required' => true,
                'attr' => [
                    'class' => 'col-md-10 col-xl-8',
                    'placeholder' => 'Mission',
                    'data-error'  => 'Renseignez la mission du departement'
                ]
            ])
            ->add('employer', NumberType::class, [
                'label' => "Nombre d'employé du département",
                'required' => true,
                'attr' => [
                    'class' => 'col-md-3 col-xl-3',
                    'placeholder' => '3'
                ]
            ])
            ->add('chief', TextType::class, [
                'label' => "Responsable du département",
                'required' => true,
                'attr' => [
                    'class' => 'col-md-10 col-xl-8',
                    'placeholder' => 'Responsable'
                ]
            ])
            ->add('content', TextareaType::class, [
                'label' => "Force & faiblesse du responsable",
                'required' => true,
                'attr' => [
                    "data-min-height" => "150"
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Department::class
        ]);
    }
}
