<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 12/04/2018
 * Time: 21:01
 */

namespace App\Subscriber;


use App\AppEvents;
use App\Event\UserEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class UserSubscriber implements EventSubscriberInterface{

    /**
     * Returns an array of event names this subscriber wants to listen to.
     *
     * The array keys are event names and the value can be:
     *
     *  * The method name to call (priority defaults to 0)
     *  * An array composed of the method name to call and the priority
     *  * An array of arrays composed of the method names to call and respective
     *    priorities, or 0 if unset
     *
     * For instance:
     *
     *  * array('eventName' => 'methodName')
     *  * array('eventName' => array('methodName', $priority))
     *  * array('eventName' => array(array('methodName1', $priority), array('methodName2')))
     *
     * @return array The event names to listen to
     */
    public static function getSubscribedEvents()
    {
        return [
            AppEvents::APP_AUTO_LOGGED_USER => "autoLoggedUser"
        ];
    }


    public function autoLoggedUser(UserEvent $event)
    {
        dump($event);
        die ('ok');
    }
}