<?php

namespace App\Form;

use App\Entity\Schecule;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ScheculeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('dateName', TextType::class, [
                'label' => 'Renseignez la Date',
                'attr' => ['placeholder' => 'ex: 22 Novembre 2018']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Schecule::class,
        ]);
    }
}
