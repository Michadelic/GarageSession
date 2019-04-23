# GarageSession

Demo app for the fabulous SCP Garage Session on UI5 with Scott Dillon.
The session takes place on 24th of April, for more information please check the [event page](https://event.on24.com/wcc/r/1721484/7EFF8CF8FCA2E0A837AC679892422B98/311279?partnerref=SD).

If you like to learn UI5, check out the upcoming openSAP course [Evolved Web Apps With SAPUI5](https://open.sap.com/courses/ui52), it is a free online course that starts *May 8th 2019*!
You can also find alot more information on [SAPUI5](https://ui5.sap.com) and [OpenUI5](https://openui5.org) on our official info pages.

## Abstract

Join us on April 24, 2019 as we zero in on SAPUI5, our Javascript application framework. This responsive toolkit works cross platform and supports our enterprise applications for our customers. For anyone willing to learn the ins and outs of SAPUI5, we’ve made the core components of the framework available as open source with OpenUI5. In addition, the UI5 technology is widely acknowledged as the foundation upon which other crucial applications like SAP Fiori, SAP Fiori Applications and SAP Fiori Elements were built and delivered. In this session, Michael Graf, an SAPUI5 Expert developer, will join us to see if he can substantiate Scott’s SAPUI5 knowledge and dispel some common myths about the toolkit. Scott will apply what he’s learned to create one or two simple applications that will illustrate some key aspects of developing great UI5 applications.

## Why SAPUI5?

[SAPUI5](http://ui5.sap.com) and it's open source variant [OpenUI5](https://openui5.org) are a perfect match for creating enterprise-grade web apps.
They come with feature-rich UI controls, powerful development concepts and  well-aligned development tools that will boost your developer productivity and get your app up and running in no time.

### Feature-Rich Controls

Besides bread and butter controls like buttons, lists, images and so on UI5 comes with a massive amount of feature-rich controls ready to be used out of the box.
More than 400 UI controls empower you to implement complex application scenarios with little coding efforts when it comes to defining the UI.
There are UI controls for predefined Fiori layouts, charts for data visualization, various filtering and personalization options, and [much more](https://ui5.sap.com/#/controls).

### Enterprise-Grade Features

When using UI5, you will get a whole suite of tools that makes your life as a developer easier. You can make use of powerful development concepts like data binding and OData, use well-aligned tools like SAP Web IDE and easily integrate with SAP infrastructure and services on the SAP Cloud Platform.
Your app will automatically be ready for localization (translation, RTL support, calendars, measures) and for accessibility (high contrast themes, keyboard support, screenreader support). During development, the UI5 support tools will help you find errors and optimize your app. Once released, Flexibility services can be used to adapt and extend your apps.

### Responsive & Consistent Fiori Design

Web apps built with UI5 run on any device and platform - they implement device-specific features and adapt to the available real estate out of the box or based on your preferences.
The award-winning Fiori design language is implemented in all UI5 controls and brings consistency and a beautiful UI to your applications without any additional efforts.
Templates that implement specific Fiori floorplans guarantee that actions are always located in the same places and look and feel the same across applications and screens.

Fiori Elements for floorplans - or custom development for custom UI


## Prerequisites


1. [Create a trial account](https://developers.sap.com/germany/tutorials/hcp-create-trial-account.html) on the SAP Hana Cloud Platform. You can also re-use an existing account.

2. [Create an account](https://developers.sap.com/germany/tutorials/gateway-demo-signup.html) on our SAP Gateway Demo System ES5. All necessary steps are described in the tutorial.

3. [Set up a destination](https://sapui5.hana.ondemand.com/#/topic/3a16c7a2f1e944deb000db49e5ece6be) to ES5 in your SAP Cloud Platform trial account. To do so, simply import the file [ES5](ES5) into your destinations.

## Setup

To follow along the demo, please do the following set up steps

1. Go to SAP Web IDE and clone this repository into your workspace

> *Note:* if you prefer local development you can use your favorite IDE with [UI5 tooling](https://github.com/SAP/ui5-tooling))

2. Go to the `git` pane on the right and click the `+` sign next to the `master` branch

3. Create a new branch `start` based on `origin/start`

4. Run the file `index.html` and make sure that you see the Garage Sale app and list of products.

5. If you have trouble with the ES5 connection, you can fallback to mock data using `test/mockServer.html` as an entry point.

## Steps

These steps will enhance the Garage Sale app with a third column and other new and advanced features of SAPUI5.
The solution of all steps is located in the `master` branch.

### Explore the project

Note that the project is set up according to our [evolved best practices for app developers](https://sapui5.hana.ondemand.com/#/topic/28fcd55b04654977b63dacbee0552712).

* General
  * Fiori 3 Theme
  * Precofigured Fiori Flexible Column layout with two columns
  * Best Practice starting point for custom app development

* Index
  * Declarative Component Start
  * Asynchronous loading of all resources
  * CSP Compliant (no JavaScript in HTML pages)

* Quality
  * Preconfigured mockserver and testing tools
  * Basic test coverage of the template features
  * Karma-ready unit and integration tests

### Create an Info View

1. **Detail.view.xml:** Add a new Button at the end of the `<semantic:headerContent>`section of detail page:

``` xml
  <Button type="Emphasized" text="info"/>
```

2. In SAP Web IDE, go to the `Storyboard Editor` perspective

3. Choos the project `Garage Session`

4. Add a new view called `Info`

5. Click on the view `Detail.view.xml` and select the arrow button (configure navigation):

6. Choose the following settings

* Control: info Button
* Navigate to: Info
* Open target as: `endColumnPages`

7. **Info.controller.js:** Update the info controller (set up a formatter and switch to three column layout):

``` js
sap.ui.define([
   	"sap/ui/core/mvc/Controller",
   	"../model/formatter"
   ], function (Controller, formatter) {
   	"use strict";

   	return Controller.extend("garage.session.controller.Info", {

   		formatter: formatter,

   				/**
   		 * Called when a controller is instantiated and its View controls (if available) are already created.
   		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
   		 * @memberOf garage.session.view.Info
   		 */
   		onInit: function () {
   			this.getOwnerComponent().getRouter().getRoute("Info").attachPatternMatched(function () {
   				this.getView().getModel("appView").setProperty("/layout", "ThreeColumnsMidExpanded");
   			}.bind(this));
   		}

   	});

   });
```

8. **.manifest.json:** Adjust the targets to display all three columns (add entries "master and "object")

``` json
{
    "name": "Info",
    "pattern": "Info",
    "target": [
        "master",
        "object",
        "Info"
    ]
}
```

> *Note:* Technically the info route pattern needs to be adjusted to contain the `objectId` as a context parameter, we skip this step to keep the example simple. To learn more about Navigation, check the [Navigation and Routing tutorial](https://ui5.sap.com/#/topic/1b6dcd39a6a74f528b27ddb22f15af0d).

9. Test that the new setup works

### Add layout controls to the new view

Let's add some new UI controls to the app to display additional product infos

1. In the `storyboard editor` perspective double click on the info view

2. Adjust the title to "Product Info"

3. Drop a `Panel` from the `Container` section and name it `Image`

4. Remove the `Text` control with text `panel content`

5. Drop an `Image` control from the `Display` section and set width to `100%`, height to nothing

6. **Info.view.xml:** Exchange the image with our product image and formatter

``` xml
<Image src="{ path: 'Name', formatter: '.formatter.pictureURL' }" width="100%" id="image0"/>
```

7. Drop an `IconTabBar` control from the `Container` section

8. Open the app and test the new features

### Add a Fiori 3 Card

Fiori 3 offers an evolved [cards](https://experience.sap.com/fiori-design-web/overview-page-card/) concept. Let's integrate this feature in our app.

1. Go to https://ui5.sap.com/ > Documentation > What's new > What's new with 1.64

2. Take a look at the `sap.f.Card` examples and click on [sample](https://ui5.sap.com/#/entity/sap.f.Card/sample/sap.f.sample.Card)

3. Click on the `Show source code` button in the upper right

4. **Info.view.xml:** Add the following namespaces at the top and code after the image panel to show a card

``` xml
	xmlns:f="sap.f"
	xmlns:card="sap.f.cards"
	xmlns:tnt="sap.tnt"
```

``` xml
	<f:Card
		class="sapUiMediumMargin"
		width="300px">
		<f:header>
			<card:Header
				title="Project Cloud Transformation"
				subtitle="Revenue per Product | EUR"/>
		</f:header>
		<f:content>
			<List
				showSeparators="None"
				items="{path: '/productItems'}" >
				<CustomListItem>
					<HBox
						 alignItems="Center"
						justifyContent="SpaceBetween">
						<VBox class="sapUiSmallMarginBegin sapUiSmallMarginTopBottom" >
							<Title level="H3" text="{title}" />
							<Text text="{subtitle}"/>
						</VBox>
						<tnt:InfoLabel
							class="sapUiTinyMargin"
							text="{revenue}"
							colorScheme= "{statusSchema}"/>
					</HBox>
				</CustomListItem>
			</List>
		</f:content>
	</f:Card>
```

5. Browse the [metadata.xml](webapp/localService/metadata.xml) file to see which other entities the ES5 service `GWSAMPLE_BASIC` offers

6. Let's implement a panel with customers that bought the product with the following code:

``` xml
	<f:Card class="sapUiMediumMargin" width="300px">
		<f:header>
			<card:Header title="Customers" subtitle="This product was bought by"/>
		</f:header>
		<f:content>
			<List showSeparators="None" items="{path: '/ContactSet'}">
				<CustomListItem>
					<HBox alignItems="Center" justifyContent="SpaceBetween">
						<VBox class="sapUiSmallMarginBegin sapUiSmallMarginTopBottom">
							<Title level="H3" text="{FirstName} {LastName}"/>
							<Text text="{EmailAddress}"/>
							<Text text="{Address/City}"/>
						</VBox>
						<tnt:InfoLabel class="sapUiTinyMargin" text="{BusinessPartnerID}" colorScheme="{	  path: 'BusinessPartnerID',	  formatter: '.formatter.deliveryStatus'	 }"/>
					</HBox>
				</CustomListItem>
			</List>
		</f:content>
	</f:Card>
```

7. Open the app and check that everything is working as designed

### Enable Drag & Drop

Drag and drop has been added as a recent feature. To configure it you only need to add configuration

1. **Master.view.xml:** Add the drag and drop namespace and config to your view to allow reordering of the master list items:

``` xml
	xmlns:dnd="sap.ui.core.dnd"
``` xml
<List>
	<dragDropConfig>
		<dnd:DragDropInfo sourceAggregation="items" targetAggregation="items" dropPosition="Between" drop=".onReorder"/>
	</dragDropConfig>
...
```

2. **Master.controller.js:** Add the controller logic to reorder the items in the UI (in productive apps the new order would also be persisted on the back end, of course):

``` js
		/**
		 * Reorder the list based on drag and drop actions
		 * @param {sap.ui.base.Event} oEvent the drop event of the sap.ui.core.dnd.DragDropInfo
		 */
		onReorder: function (oEvent) {
			var oDraggedItem = oEvent.getParameter("draggedControl"),
				oDroppedItem = oEvent.getParameter("droppedControl"),
				sDropPosition = oEvent.getParameter("dropPosition"),
				oList = this.byId("list"),
				// get the index of dragged item
				iDraggedIndex = oList.indexOfItem(oDraggedItem),
				// get the index of dropped item
				iDroppedIndex = oList.indexOfItem(oDroppedItem),
				// get the new dropped item index
				iNewDroppedIndex = iDroppedIndex + (sDropPosition === "Before" ? 0 : 1) + (iDraggedIndex < iDroppedIndex ? -1 : 0);

			// remove the dragged item
			oList.removeItem(oDraggedItem);
			// insert the dragged item on the new drop index
			oList.insertItem(oDraggedItem, iNewDroppedIndex);
		}
```

3. Open the app and drag and drop an item in the list.

4. That's all for today, feel free to dig deeper and play around with the existing codebase!

I hope you liked the garage session about UI5!

Have fun,

**Michael**

## Questions

If you have questions on SAPUI5, feel free to join our OpenUI5 Slack group

## License

All example code in this repository is licensed under the Apache Software License, Version 2.0 except as noted otherwise in the [LICENSE](https://github.com/SAP/openSAP-ui5-course/blob/master/LICENSE) file.

