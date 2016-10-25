name := "github_user"

version := "1.0-SNAPSHOT"

scalaVersion := "2.11.7"

routesGenerator := StaticRoutesGenerator

testOptions in Test := Seq(Tests.Argument(TestFrameworks.JUnit, "-a"))

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

//unmanagedJars in Compile += file(Path.userHome+"/truprojects/trucommon/tru-proto/repos/in.trujobs.proto/tru-proto/1.0.0/tru-proto-1.0.0.jar")

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs,
  filters,
  "mysql" % "mysql-connector-java" % "5.1.27",
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.0" % "test",
  "com.amazonaws" % "aws-java-sdk" % "1.3.11"
  )

libraryDependencies += "com.google.api-client" % "google-api-client" % "1.20.0"

libraryDependencies += evolutions
