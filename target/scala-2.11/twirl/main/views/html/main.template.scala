
package views.html

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object main_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import java.lang._
import java.util._
import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import play.core.j.PlayMagicForJava._
import play.mvc._
import play.data._
import play.api.data.Field
import play.mvc.Http.Context.Implicit._

class main extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template0[play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply():play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.1*/("""<!doctype html>
<head>
    <title>Github Users - By Adarsh Raj Shah</title>
    <link rel="stylesheet" type="text/css" href="/assets/css/materialize.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/myStyle.css">
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet">

    <meta name="theme-color" content="#48485e">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
    <div class="mainContainer">
        <h4 class="container" style="padding: 0 0 16px 0">Github User Finder!</h4>
        <div class="subContainer">
            <form class="container" id="form_get_data">
                <div class="row" style="padding: 24px 0 24px 0;">
                    <div class="input-field col s8 m3">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="userName" type="text" class="validate">
                        <label for="userName">First Name</label>
                    </div>
                    <div class="input-field col s3">
                        <a id="submitBtn" class="waves-effect waves-light btn" type="submit" onclick="fetchGitHubUser()">Get data</a>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div id="sortBy">
        <div class="container">
            <span>Sort by: </span>
            <span onclick="sortBy(1)" class="sortItem">Name</span>
            <span onclick="sortBy(2)" class="sortItem">Followers</span>
        </div>
    </div>

    <div class="container" id="users" style="padding: 24px">
        <div class="row" id="row_no_1"></div>
    </div>

    <div class="bottomLabel">
        <center>Made with <img src="/assets/img/heart.svg" width="12px"> by Adarsh Raj Shah</center>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="/assets/js/main.js"></script>
<script type="text/javascript" src="/assets/js/materialize.js"></script>
</html>"""))
      }
    }
  }

  def render(): play.twirl.api.HtmlFormat.Appendable = apply()

  def f:(() => play.twirl.api.HtmlFormat.Appendable) = () => apply()

  def ref: this.type = this

}


}

/**/
object main extends main_Scope0.main
              /*
                  -- GENERATED --
                  DATE: Tue Oct 25 14:00:01 IST 2016
                  SOURCE: /home/dodo/project/github_user/app/views/main.scala.html
                  HASH: 4cd55f9fde64de5d2d0204c356671acaf9aa9ca2
                  MATRIX: 825->0
                  LINES: 32->1
                  -- GENERATED --
              */
          