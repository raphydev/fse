<?php

namespace App\Form;

use App\Entity\Intervenant;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class IntervenantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Renseignez le nom de l\'intervenant',
                'attr' => ['placeholder' => 'Nom du intervenant']
            ])
            ->add('office', TextType::class, [
                'label' => 'Renseignez le poste de l\'intervenant',
                'attr' => ['placeholder' => 'Poste du intervenant']
            ])
            ->add('position', NumberType::class, [
                'label' => 'Donnez la position de l\'ordre d\'affichage',
                'attr' => ['placeholder' => 'Numero de la position d\'affichage']
            ])
            ->add('imageFile', VichImageType::class, [
                'required' => false,
                'allow_delete' => true,
                'download_uri' => true,
                'image_uri' => true
            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Intervenant::class,
        ]);
    }
}
