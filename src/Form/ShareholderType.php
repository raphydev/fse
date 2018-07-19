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
                'label' => "Nom de l'actionnaire",
                'required' => true,
                'attr' => [
                    'class' => 'col-md-10 col-xl-8',
                    'placeholder' => 'shareholder'
                ]
            ])
            ->add('part', TextType::class, [
                'label' => "Nombre de part ou pourcentage",
                'required' => true,
                'attr' => [
                    'class' => 'col-md-3 col-xl-2',
                    'placeholder' => '...%'
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
