<?php

namespace App\Form;

use App\Entity\Intervenant;
use App\Entity\Part;
use App\Entity\Program;
use App\Entity\Schecule;
use App\Entity\Section;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProgramType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('hours', TextType::class, [
                'label' => 'Renseignez l\'heure du programme',
                'attr' => ['placeholder' => 'ex: 9:30 mm', 'class' => 'col-md-3']
            ])
            ->add('section', EntityType::class, [
                'class' => Section::class,
                'choice_label' => 'title',
                'label' => 'Section de la cérémonie concernée',
                'attr' => ['class' => 'col-md-6']
            ])
            ->add('part', EntityType::class, [
                'class' => Part::class,
                'choice_label' => 'title',
                'label' => 'Partir concernée',
                'attr' => ['class' => 'col-md-6']
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
            'data_class' => Program::class,
        ]);
    }
}
