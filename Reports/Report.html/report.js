$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "Abc",
        "Abc@123"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "qwe",
        "Qwe@12"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    },
    {
      "cells": [
        "bhooba123",
        "6BN6KP"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"Abc\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Abc@123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 4594015100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 275998500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc@123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 187971100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 465089400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"qwe\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Qwe@12\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 255825000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwe",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 147330100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwe@12",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 152117800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 372102000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"bhooba123\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"6BN6KP\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 250546700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhooba123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 256325100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6BN6KP",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 127070400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1913122800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user Select The Hotel Location",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Enter The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Enter The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Select Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Select Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Click On Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Select_The_Hotel_Location()"
});
formatter.result({
  "duration": 264741000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 294517700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 218262000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 254527000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Check_In_Date()"
});
formatter.result({
  "duration": 146096700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Check_Out_Date()"
});
formatter.result({
  "duration": 144193800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Adults_Per_Room()"
});
formatter.result({
  "duration": 203631900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Children_Per_Room()"
});
formatter.result({
  "duration": 242474100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_Search_Button()"
});
formatter.result({
  "duration": 516212900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Select Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user Click The Radio Button To Acknowledge Hotel Booking",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user Click The Continue Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_The_Radio_Button_To_Acknowledge_Hotel_Booking()"
});
formatter.result({
  "duration": 105002400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_The_Continue_Button()"
});
formatter.result({
  "duration": 532165500,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Book A Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@TC4"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "user Enter First Name",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user Enter Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Enter Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Enter Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Select Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Select Expiry Date",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Enter Cvv Number",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user Click On Book Now Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Enter_First_Name()"
});
formatter.result({
  "duration": 171888400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_Last_Name()"
});
formatter.result({
  "duration": 135972500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_Billing_Address()"
});
formatter.result({
  "duration": 142526300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_Credit_Card_Number()"
});
formatter.result({
  "duration": 179563900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Credit_Card_Type()"
});
formatter.result({
  "duration": 230143000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Expiry_Date()"
});
formatter.result({
  "duration": 507614400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_Cvv_Number()"
});
formatter.result({
  "duration": 137305800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_Book_Now_Button()"
});
formatter.result({
  "duration": 107753600,
  "status": "passed"
});
});