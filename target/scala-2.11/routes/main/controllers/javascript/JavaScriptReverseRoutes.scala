
// @GENERATOR:play-routes-compiler
// @SOURCE:/home/dodo/project/github_user/conf/routes
// @DATE:Tue Oct 25 13:38:54 IST 2016

import play.api.routing.JavaScriptReverseRoute
import play.api.mvc.{ QueryStringBindable, PathBindable, Call, JavascriptLiteral }
import play.core.routing.{ HandlerDef, ReverseRouteContext, queryString, dynamicString }


import _root_.controllers.Assets.Asset
import _root_.play.libs.F

// @LINE:5
package controllers.javascript {
  import ReverseRouteContext.empty

  // @LINE:8
  class ReverseAssets(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:8
    def at: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Assets.at",
      """
        function(path0,file1) {
        
          if (path0 == """ + implicitly[JavascriptLiteral[String]].to("/public") + """ && file1 == """ + implicitly[JavascriptLiteral[String]].to("robots.txt") + """) {
            return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "robots.txt"})
          }
        
          if (path0 == """ + implicitly[JavascriptLiteral[String]].to("/public") + """) {
            return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "assets/" + (""" + implicitly[PathBindable[String]].javascriptUnbind + """)("file", file1)})
          }
        
          if (path0 == """ + implicitly[JavascriptLiteral[String]].to("/public") + """ && file1 == """ + implicitly[JavascriptLiteral[String]].to("sitemap.xml") + """) {
            return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "sitemap.xml"})
          }
        
          if (path0 == """ + implicitly[JavascriptLiteral[String]].to("/public/img/") + """ && file1 == """ + implicitly[JavascriptLiteral[String]].to("icon.png") + """) {
            return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "favicon.ico"})
          }
        
        }
      """
    )
  
  }

  // @LINE:5
  class ReverseApplication(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:5
    def index: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Application.index",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + """"})
        }
      """
    )
  
  }


}
