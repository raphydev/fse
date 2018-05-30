<?php

namespace App\Form;

use App\Entity\Rapport;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RapportType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Renseignez le Titre',
                'attr' => ['placeholder' => 'Titre du rapport']
            ])
            ->add('docLink', TextType::class, [
                'label' => 'Insérez le lien du document'
            ])
            ->add('content', TextareaType::class, [
                'label' => 'Description',
                'attr' => [
                    'class' => 'ckeditor',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Rapport::class,
        ]);
    }
}
