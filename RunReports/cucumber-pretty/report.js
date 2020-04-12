$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Feature02);
formatter.feature({
  "line": 1,
  "name": "Application tests that covers",
  "description": "Links Presence, Successful Registration, Unsuccessful Registration",
  "id": "application-tests-that-covers",
  "keywo
formatter.before({
  "duration": 20{
  "duration": 2095651248,
  "statformatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "Feature01.launchHomePage()"
});
formatter.result({formatter.result({
  "duration": 2882380881,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Simple sign in scenario",
  "description": "",
  "id": "application-tests-that-covers;simple-sign-in-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@test1"
    },
    {
      "line": 7,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be on the Authentication page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter credeformatter.result({
  "duration": 2387517546,
  "status": "passed"
});
formatter.match({
  "location": "Feature02.validateWomenTitle()"
});
formatter.result({
  "duration": 13080830,
  "status": "passed"
});
formatter.after({
  "duration": 111138452,
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
  "duration": 1780283613,
  "status": "passed"
});
formatter.match({
  "location": "Feature01.authenticationPageNavigation()"
});
formatter.result({
  "duration": 37896156,
  "status": "passed"
});
formatter.match({
  "location": "Feature01.enterCredentials(DataTable)"
});
formatter.result({
  "duration": 339595987,
  "status": "passed"
});
formatter.match({
  "location": "Feature01.logIn()"
});
formatter.result({
  "duration": 1098489873,
  "status": "passed"
});
formatter.match({
  "location": "Feature01.myAccountPageNavigation()"
});
formatter.result({
  "duration": 27140480,
  "status": "passed"
});
formatter.match({
  "location": "Feature01.signOut()"
});
formatter.result({
  "duration": 1302591459,
  "status": "passed"
});
formatter.after({
  "duration": 107156542,
  "status": "passed"
});
});