<?php

namespace App\Form;

use App\Entity\Users;
use libphonenumber\PhoneNumberFormat;
use Misd\PhoneNumberBundle\Form\Type\PhoneNumberType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RegisterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstname', TextType::class, ['label' => false])
            ->add('lastname', TextType::class, ['label' => false])
            ->add('phone', PhoneNumberType::class, [
                'label' => false,
                'format' => PhoneNumberFormat::NATIONAL,
                'widget' => PhoneNumberType::WIDGET_COUNTRY_CHOICE,
                'preferred_country_choices' => array('CI', 'GN', 'Bj', 'NG', 'TG', 'FR'),
                'invalid_message' => 'Numero de téléphone incorrect'
            ])
            ->add('email', EmailType::class, ['label' => false])
            ->add('plainPassword', PasswordType::class, array(
                'label' => false
            ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
