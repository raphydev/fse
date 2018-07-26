<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 20/07/2018
 * Time: 09:23
 */

namespace App\Service;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class HelperSerializer
{
    /**
     * @var ValidatorInterface
     */
    private $validator;

    public function __construct(ValidatorInterface $validator)
     {
         $this->validator = $validator;
     }

     public function validationAndCreate($data, $entityClassName) {
         $encoders = array(new JsonEncoder());
         $normalizers = array(new ObjectNormalizer());
         $serializer = new Serializer($normalizers, $encoders);
         $result = $serializer->deserialize($data, $entityClassName, 'json');
         $errors = $this->validator->validate($result);
         if (count($errors) > 0) {
            return new JsonResponse([
                'errors' => $errors,
                'status' => Response::HTTP_BAD_REQUEST
            ]);
         }
         return $result;
     }
}