<?php

namespace App\Form;

use App\Entity\Organizer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class OrganizerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Renseignez le nom de l\'organisateur',
                'attr' => ['placeholder' => 'Nom de l\' organisateur']
            ])
            ->add('website', TextType::class, [
                'label' => 'Renseignez le site web de l\'organisateur',
                'attr' => ['placeholder' => 'le site web de l\'organisateur']
            ])
            ->add('imageFile', VichImageType::class, [
                'required' => false,
                'allow_delete' => true,
                'download_uri' => true,
                'image_uri' => true
            ])
            ->add('content', TextareaType::class, [
                'label' => 'Description',
                'attr' => [
                    'data-provide' => 'summernote',
                    'data-min-height' => '150'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Organizer::class,
        ]);
    }
}
