<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 23/05/2018
 * Time: 18:03
 */

namespace App\Form;


use App\Entity\Users;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('roles', ChoiceType::class, [
                'label' => 'Choix du niveau d\'accès',
                'multiple' => true,
                'expanded' => true,
                'choices' => [
                    'Roles' => [
                        'MEMBRE' => 'ROLE_USER',
                        'MODERATEUR' => 'ROLE_ADMIN',
                        'ADMINISTRATEUR' => 'ROLE_SUPER_ADMIN'
                    ]
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Users::class
        ]);
    }
}