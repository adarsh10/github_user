
// @GENERATOR:play-routes-compiler
// @SOURCE:/home/dodo/project/github_user/conf/routes
// @DATE:Tue Oct 25 13:38:54 IST 2016

import play.api.mvc.{ QueryStringBindable, PathBindable, Call, JavascriptLiteral }
import play.core.routing.{ HandlerDef, ReverseRouteContext, queryString, dynamicString }


import _root_.controllers.Assets.Asset
import _root_.play.libs.F

// @LINE:5
package controllers {

  // @LINE:8
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:8
    def at(path:String, file:String): Call = {
    
      (path: @unchecked, file: @unchecked) match {
      
        // @LINE:8
        case (path, file) if path == "/public" && file == "robots.txt" =>
          implicit val _rrc = new ReverseRouteContext(Map(("path", "/public"), ("file", "robots.txt")))
          Call("GET", _prefix + { _defaultPrefix } + "robots.txt")
      
        // @LINE:9
        case (path, file) if path == "/public" =>
          implicit val _rrc = new ReverseRouteContext(Map(("path", "/public")))
          Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[PathBindable[String]].unbind("file", file))
      
        // @LINE:10
        case (path, file) if path == "/public" && file == "sitemap.xml" =>
          implicit val _rrc = new ReverseRouteContext(Map(("path", "/public"), ("file", "sitemap.xml")))
          Call("GET", _prefix + { _defaultPrefix } + "sitemap.xml")
      
        // @LINE:11
        case (path, file) if path == "/public/img/" && file == "icon.png" =>
          implicit val _rrc = new ReverseRouteContext(Map(("path", "/public/img/"), ("file", "icon.png")))
          Call("GET", _prefix + { _defaultPrefix } + "favicon.ico")
      
      }
    
    }
  
  }

  // @LINE:5
  class ReverseApplication(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:5
    def index(): Call = {
      import ReverseRouteContext.empty
      Call("GET", _prefix)
    }
  
  }


}
