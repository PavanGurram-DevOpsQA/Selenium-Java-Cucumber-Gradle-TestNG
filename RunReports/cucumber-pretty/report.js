$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature01.feature");
formatter.feature({
  "line": 1,
  "name": "Application tests that covers",
  "description": "Links Presence, Successful Registration, Unsuccessful Registration",
  "id": "application-tests-that-covers",
  "key);
formatter.before({
  "duration": 27{
  "duration": 2733972437,
  "s);
formatter.background({
  "line": 4,
  "{
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword":formatter.step({
  "line": 5,
  "{
  "line": 5,
  "name": "I am on the HomePage",
  "ke);
formatter.match({
  "location": "Feature01.launchHomePage()"
});
formatter.result({
  "duration": 3166604620,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "#\t\t|UserName02|Password02|"
    }
  ],
  "line": 22,
  "name": "out sc ex",
  "description": "",
  "id": "application-tests-that-covers;out-sc-ex",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@test3"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on women button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see WomenTitle displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Feature02.selectType()"
});
formatter.result({
  "duration": 1870171093,
  "status": "passed"
});
formatter.match({
  "location": "Feature02.validateWomenTitle()"
});
formatter.result({
  "duration": 13042236,
  "status": "passed"
});
formatter.after({
  "duration": 105298390,
  "status": "passed"
});
});ame": "I click on LogIn button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be on the MyAccount page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on SignOut button",
  "keyword": "And "
});
formatter.match({
  "location": "Feature01.clickSignInBtn()"
});
formatter.result({
  "duration": 1358975101,
  "status": "passed"
});
formatter.match({
  "location": "Feature01.authenticationPageNavigation()"
});
formatter.result({
  "duration": 70710383,
  "status": "passed"
});
formatter.match({
  "location": "Feature01.enterCredentials(DataTable)"
});
formatter.result({
  "duration": 214837963,
  "status": "passed"
});
formatter.match({
  "location": "Feature01.logIn()"
});
formatter.result({
  "duration": 1267656788,
  "status": "passed"
});
formatter.match({
  "location": "Feature01.myAccountPageNavigation()"
});
formatter.result({
  "duration": 28411385,
  "status": "passed"
});
formatter.match({
  "location": "Feature01.signOut()"
});
formatter.result({
  "duration": 1629208191,
  "status": "passed"
});
formatter.after({
  "duration": 97970938,
  "status": "passed"
});
});