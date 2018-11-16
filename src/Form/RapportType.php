<?php

namespace App\Form;

use App\Entity\Rapport;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class RapportType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre du document',
                'attr' => ['placeholder' => 'Titre du rapport']
            ])
            ->add('docFile', VichImageType::class, [
                'label' => false,
                'required' => false,
                'allow_delete' => true,
                'download_uri' => true,
                'image_uri' => true,
                'attr'  => ['data-provide' => 'dropify']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Rapport::class
        ]);
    }
}
