<?php

namespace App\Form;

use App\Entity\shareholder;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ShareholderType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => "Actionnaire",
                'required' => true,
                'attr' => [
                    'placeholder' => 'Nom & prénom de l\'actionnaire'
                ]
            ])
            ->add('part', TextType::class, [
                'label' => "Nombre d'action",
                'required' => true,
                'attr' => [
                    'placeholder' => 'Nbre de part en %'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => shareholder::class,
        ]);
    }
}
