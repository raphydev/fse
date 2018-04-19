<?php

namespace App\Form;

use App\Entity\PartnerType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PartnerTypeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Renseignez le Titre du Type',
                'attr' => ['placeholder' => 'Nom de type de partenaires']
            ])
            ->add('position', NumberType::class, [
                'label' => 'Donnez la position de l\'ordre d\'affichage',
                'attr' => ['placeholder' => 'Numero de la position d\'affichage']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PartnerType::class,
        ]);
    }
}
