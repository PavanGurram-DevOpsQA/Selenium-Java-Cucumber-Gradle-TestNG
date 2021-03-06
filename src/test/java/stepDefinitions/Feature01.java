package stepDefinitions;

import java.io.IOException;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import cucumber.api.*;
import cucumber.api.java.en.*;
import helpers.TestContext;
import managers.PageObjectManager;
import managers.WebDriverManager;

import org.apache.log4j.Logger;
import pageObjects.AuthenticationPage;
import pageObjects.BasePO;
import pageObjects.DressesSelectionPage;
import pageObjects.HomePage;
import pageObjects.MyAccountPage;
import pageObjects.WomenSelectionPage;

public class Feature01{

	HomePage homePage;
	AuthenticationPage authPage;
	MyAccountPage myAccPage;	
	SoftAssert sa;
	Logger log;
	
	TestContext testContext;
	
	public Feature01(TestContext context) {
		testContext = context;
		homePage = testContext.getPageObjectManager().getHomePage();
		authPage = testContext.getPageObjectManager().getAuthenticationPage();
		myAccPage = testContext.getPageObjectManager().getMyAccountPage();
		sa = new SoftAssert();
		log = Logger.getLogger(Feature01.class);
	}

	@Given("^I am on the HomePage$")
	public void launchHomePage() {		
		homePage.launchHomePage();
	}

	@When("^I click on SignIn button$")
	public void clickSignInBtn() throws Throwable {
		homePage.clickSignInLink();
	}

	@Then("^I should be on the Authentication page$")
	public void authenticationPageNavigation() throws Throwable {
		authPage.waitForPageToLoad();
//		 Assert.assertEquals("AUTHENTICATION", authPage.getPageHeading());
		sa.assertEquals("AUTHENTICATION", authPage.getPageHeading());
	}

	@Then("^I enter credentials$")
	public void enterCredentials(DataTable table) throws Throwable {
		Map<String, String> map = table.asMap(String.class, String.class);
		authPage.setCredentials(map);
	}

	@When("^I click on LogIn button$")
	public void logIn() throws Throwable {
		authPage.clickSignInBtn();
	}

	@Then("^I should be on the MyAccount page$")
	public void myAccountPageNavigation() throws Throwable {
		myAccPage.waitForPageToLoad();
		// Assert.assertEquals("fdfdf", authPage.getPageHeading());
		sa.assertEquals("MY ACCOUNT", myAccPage.getPageHeading());
	}

	@When("^I click on SignOut button$")
	public void signOut() throws Throwable {
		myAccPage.clickSignOutBtn();
		sa.assertAll();
	}
}
