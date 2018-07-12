<?php

namespace App\Form;

use App\Entity\Former;
use App\Entity\Training;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('training', EntityType::class, [
                'label' => 'Selectionnez la thématique associée',
                'choice_label' => 'name',
                'class' => Training::class,
                'placeholder' => 'Selectionnez',
                'attr' => ['class' => 'w-350px']
            ])
            ->add('name', TextType::class, [
                'label' => 'Renseignez le nom de la formation',
                'attr' => ['placeholder' => 'Nom de la formation']
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
            'data_class' => Former::class,
        ]);
    }
}
