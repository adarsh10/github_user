package controllers;

import play.api.Play;
import play.mvc.Controller;
import play.mvc.Result;

public class Application extends Controller {

    public static Result index() {
        return ok(views.html.index.render());
    }
}