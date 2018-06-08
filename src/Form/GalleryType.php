<?php

namespace App\Form;

use App\Entity\Gallery;
use App\Entity\Tag;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GalleryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('tag', EntityType::class, [
                'label' => 'Ajouter un Tag à la galeries pour mieux les organiser',
                'choice_label' => 'name',
                'class' => Tag::class
            ])
            ->add('name', TextType::class, [
                'label' => 'Renseignez  le nom de la galerie',
                'attr' => ['placeholder' => 'Nom de la galerie']
            ])
        ;
    }


    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Gallery::class,
        ]);
    }
}
