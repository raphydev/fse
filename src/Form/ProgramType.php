<?php

namespace App\Form;

use App\Entity\Intervenant;
use App\Entity\Program;
use App\Entity\Schecule;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProgramType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Renseignez le Titre',
                'attr' => ['placeholder' => 'Titre du programme']
            ])
            ->add('hours', TextType::class, [
                'label' => 'Renseignez l\'heure',
                'attr' => ['placeholder' => 'ex: 9:30 mm', 'class' => 'col-md-3']
            ])
            ->add('intervenant', EntityType::class, [
                'class' => Intervenant::class,
                'choice_label' => 'name',
                'label' => 'choix de l\'intervenant',
                'attr' => ['class' => 'col-md-6']

            ])
            ->add('schecule', EntityType::class, [
                'class' => Schecule::class,
                'choice_label' => 'dateName',
                'label' => 'Date du programme',
                'attr' => ['class' => 'col-md-6']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Program::class,
        ]);
    }
}
