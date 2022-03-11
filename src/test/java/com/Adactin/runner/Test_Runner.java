package com.Adactin.runner;


import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Adactin_Cucumber.Cucumber_practice.Adactin_base;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;





@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//Adactin//Feature",
glue="com.Adactin.sd",
monochrome= true,
dryRun= false,
strict=true,

tags = {"~@TC5"},

plugin = {"html:Reports/Report" ,"pretty",
		"json:Reports/Cucumber.json"}
		//,"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:Reports/report.html"}
)

	
public class Test_Runner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void set_up() {
		
	driver = Adactin_base.browserlanch("chrome");

	}
	
	
	@AfterClass
	public static void tear_Down() {

		Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
		//Reporter.setSystemInfo("Test User", System.getProperty("user.name"));
		Reporter.setSystemInfo("User Name", "AJ");
		Reporter.setSystemInfo("Application Name", "Test App ");
		Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
		Reporter.setSystemInfo("Environment", "Production");
		Reporter.setTestRunnerOutput("Test Execution Cucumber Report");
driver.quit();

	}

}
