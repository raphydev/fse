<?php

namespace App\Form;

use App\Entity\Section;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SectionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre de la cérémonie',
                'attr' => ['placeholder' => 'ex: Diner Gala ', 'class' => 'col-md-6']
            ])
            ->add('tagName', TextType::class, [
                'label' => 'Nom du tag (Facilite les recherches)',
                'attr' => ['placeholder' => '#forum ou #gala']
            ])
            ->add('intervalHoraire', TextType::class, [
                'label' => 'Renseignez de temps',
                'attr' => ['placeholder' => 'ex: 9h30 - 20h', 'class' => 'col-md-3']
            ])
            ->add('lieu', TextType::class, [
                'label' => 'Renseignez le lieu',
                'attr' => ['placeholder' => 'MAISON DE L’ENTREPRISE, ABIDJAN - PLATEAU', 'class' => 'col-md-6']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Section::class,
        ]);
    }
}
