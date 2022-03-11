Feature: Hotel Booking In Adactin Application

@TC1
Scenario Outline: Login Page
Given user Launch The Application
When user Enter The "<Username>" In Username Field
And user Enter The "<Password>" In Password Field
Then user Click On Login Button And It Navigates To The Search Hotel Page

Examples:
|Username|Password|
|Abc|Abc@123|
|qwe|Qwe@12|
|bhooba123|6BN6KP|

@TC2
Scenario: Search Hotel

When user Select The Hotel Location
And user Select The Hotel
And user Select The Room Type
And user Select The Number Of Rooms 
And user Enter The Check In Date
And user Enter The Check Out Date
And user Select Adults Per Room
And user Select Children Per Room
Then user Click On Search Button

@TC3
Scenario: Select Hotel

When user Click The Radio Button To Acknowledge Hotel Booking
Then user Click The Continue Button 

@TC4
Scenario: Book A Hotel

When user Enter First Name
And user Enter Last Name
And user Enter Billing Address
And user Enter Credit Card Number
And user Select Credit Card Type
And user Select Expiry Date
And user Enter Cvv Number
Then user Click On Book Now Button

@TC5
Scenario: Booking Confirmation
 
 Then user Click Myitinerary Button
 
 
 


