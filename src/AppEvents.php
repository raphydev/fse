<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 12/04/2018
 * Time: 20:44
 */

namespace App;


final class AppEvents
{
    /**
     * @Event("App\Event\UserEvent")
     */
    const AUTO_LOGGED_USER = "auto_logged_user";
}