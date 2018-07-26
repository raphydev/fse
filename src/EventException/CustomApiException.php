<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 20/07/2018
 * Time: 16:07
 */

namespace App\EventException;


use Symfony\Component\HttpFoundation\Response;

class CustomApiException extends \Exception implements ApiExceptionInterface
{
    public function __construct(string $message = null, $code = Response::HTTP_BAD_REQUEST)
    {
        parent::__construct($message, $code);
    }
}