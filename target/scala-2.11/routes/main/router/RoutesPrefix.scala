
// @GENERATOR:play-routes-compiler
// @SOURCE:/home/dodo/project/github_user/conf/routes
// @DATE:Tue Oct 25 13:38:54 IST 2016


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
