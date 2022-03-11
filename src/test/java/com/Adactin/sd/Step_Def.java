package com.Adactin.sd;

import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.Adactin.runner.Test_Runner;
import com.Adactin_Cucumber.Cucumber_practice.Adactin_base;
import com.Test_data.File_Reader_Manager;

import Pom_Web.Ada_Page_Object_Manager;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Def extends Adactin_base {	
	
	public static WebDriver driver = Test_Runner.driver;
	
	public static Ada_Page_Object_Manager pom = new Ada_Page_Object_Manager(driver);
	static Logger log = Logger.getLogger(Step_Def.class);
	
	
	
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		PropertyConfigurator.configure("log4j.properties");
		
		String url = File_Reader_Manager.getInstance_frm().getInstance_CR().get_Url_Data();
		getUrl(url);
		
		log.info("Browser Launch");
		
			  
	}
	
	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String Username) throws Throwable {
		inputvalue(pom.getInstanceLogin().getSignin(),Username);
	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String Password) throws Throwable {
		inputvalue(pom.getInstanceLogin().getPassword(),Password);
	}

	@When("^user Enter The Username In Username Field$")
	public void user_Enter_The_Username_In_Username_Field() throws Throwable {
		String us = File_Reader_Manager.getInstance_frm().getInstance_CR().get_Username();
		inputvalue(pom.getInstanceLogin().getSignin(),us);
		
	}

	@When("^user Enter The Password In Password Field$")
	public void user_Enter_The_Password_In_Password_Field() throws Throwable {
		String Pwd = File_Reader_Manager.getInstance_frm().getInstance_CR().get_password();
		inputvalue(pom.getInstanceLogin().getPassword(), Pwd);
	}

	@Then("^user Click On Login Button And It Navigates To The Search Hotel Page$")
	public void user_Click_On_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page() throws Throwable {
	    
		//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		
		 elementClick(pom.getInstanceLogin().getLogin());
      
		 wait.until(ExpectedConditions.v
      
		
		log.info("Page loged in");
	}

	@When("^user Select The Hotel Location$")
	public void user_Select_The_Hotel_Location() throws Throwable {
		select("byValue", "London", pom.getInstanceSearchHotel().getLocation());
		
		
	}

	@When("^user Select The Hotel$")
	public void user_Select_The_Hotel() throws Throwable {
		select("index", "1", pom.getInstanceSearchHotel().getHotels());
		
	}

	@When("^user Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {
		select("byvisibletext", "Double", pom.getInstanceSearchHotel().getRoom_type());
		
	}

	@When("^user Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable {
		select("index", "1", pom.getInstanceSearchHotel().getRoom_nos());    
	}

	@When("^user Enter The Check In Date$")
	public void user_Enter_The_Check_In_Date() throws Throwable {
		inputvalue(pom.getInstanceSearchHotel().getCheck_in(), "18/01/2022");
	}

	@When("^user Enter The Check Out Date$")
	public void user_Enter_The_Check_Out_Date() throws Throwable {
		inputvalue(pom.getInstanceSearchHotel().getCheck_out(), "18/01/2022");
	}

	@When("^user Select Adults Per Room$")
	public void user_Select_Adults_Per_Room() throws Throwable {
		select("index", "1", pom.getInstanceSearchHotel().getAdult_room());
	}

	@When("^user Select Children Per Room$")
	public void user_Select_Children_Per_Room() throws Throwable {
		select("index", "1", pom.getInstanceSearchHotel().getChild_room());
	}

	@Then("^user Click On Search Button$")
	public void user_Click_On_Search_Button() throws Throwable {
		elementClick(pom.getInstanceSearchHotel().getSubmit());
		log.info("Search hotel completed");
	}

	@When("^user Click The Radio Button To Acknowledge Hotel Booking$")
	public void user_Click_The_Radio_Button_To_Acknowledge_Hotel_Booking() throws Throwable {
		elementClick(pom.getInstanceselectHotel().getRadio_button());
	}

	@Then("^user Click The Continue Button$")
	public void user_Click_The_Continue_Button() throws Throwable {
elementClick(pom.getInstanceselectHotel().getContinue());	
		
		log.info("Acknowleage completed");
		
	}

	@When("^user Enter First Name$")
	public void user_Enter_First_Name() throws Throwable {
		inputvalue(pom.getInstanceBook_Hotel().getFirst_name(), "Bhooba");
	}

	@When("^user Enter Last Name$")
	public void user_Enter_Last_Name() throws Throwable {
		inputvalue(pom.getInstanceBook_Hotel().getLast_name(), "Bhooba");
	}

	@When("^user Enter Billing Address$")
	public void user_Enter_Billing_Address() throws Throwable {
		inputvalue(pom.getInstanceBook_Hotel().getAddress(), "Bhooba");
	}

	@When("^user Enter Credit Card Number$")
	public void user_Enter_Credit_Card_Number() throws Throwable {
		inputvalue(pom.getInstanceBook_Hotel().getCc_details(), "1234567812345678");
	}

	@When("^user Select Credit Card Type$")
	public void user_Select_Credit_Card_Type() throws Throwable {
		select("index", "1", pom.getInstanceBook_Hotel().getCc_type());
	}

	@When("^user Select Expiry Date$")
	public void user_Select_Expiry_Date() throws Throwable {
		select("index", "6", pom.getInstanceBook_Hotel().getCc_exp_month());
		select("byValue", "2021", pom.getInstanceBook_Hotel().getCc_exp_year());
	}

	@When("^user Enter Cvv Number$")
	public void user_Enter_Cvv_Number() throws Throwable {
		inputvalue(pom.getInstanceBook_Hotel().getCc_cvv(), "021");
		
	    driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	    
	    
	}

	@Then("^user Click On Book Now Button$")
	public void user_Click_On_Book_Now_Button() throws Throwable {
		elementClick(pom.getInstanceBook_Hotel().getBook_now());
	}


	}

