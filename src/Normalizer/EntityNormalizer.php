<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 22/07/2018
 * Time: 20:39
 */

namespace App\Normalizer;


use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;
use Symfony\Component\PropertyInfo\PropertyTypeExtractorInterface;
use Symfony\Component\Serializer\Mapping\ClassDiscriminatorResolverInterface;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactoryInterface;
use Symfony\Component\Serializer\NameConverter\NameConverterInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class EntityNormalizer extends ObjectNormalizer
{

    /**
     * Entity Manager
     * @var EntityManagerInterface
     */
    protected $em;

    public function __construct(
        EntityManagerInterface $em,
        ?ClassMetadataFactoryInterface $classMetadataFactory = null,
        ?NameConverterInterface $nameConverter = null,
        ?PropertyAccessorInterface $propertyAccessor = null,
        ?PropertyTypeExtractorInterface $propertyTypeExtractor = null,
        ?ClassDiscriminatorResolverInterface $classDiscriminatorResolver = null
    )
    {
        parent::__construct(
            $classMetadataFactory,
            $nameConverter,
            $propertyAccessor,
            $propertyTypeExtractor,
            $classDiscriminatorResolver
        );

        $this->em = $em;
    }

    /**
     * @param $data
     * @param $type
     * @param null $format
     * @return bool
     */
    public function supportsDenormalization($data, $type, $format = null)
    {
        return strpos($type, 'App\\Entity\\') === 0 && (is_numeric($data) || is_string($data));
    }

    /**
     * @param $data
     * @param $class
     * @param null $format
     * @param array $context
     * @return object
     */
    public function denormalize($data, $class, $format = null, array $context = array())
    {
        return $this->em->find($class, $data);
    }

}