# GarageSession

Demo app for the fabulous SCP Garage Session on UI5 with Scott Dillon.
The session takes place on 24th of April, for more information please check the [event page](https://event.on24.com/wcc/r/1721484/7EFF8CF8FCA2E0A837AC679892422B98/311279?partnerref=SD).

## Abstract

Join us on April 24, 2019 as we zero in on SAPUI5, our Javascript application framework. This responsive toolkit works cross platform and supports our enterprise applications for our customers. For anyone willing to learn the ins and outs of SAPUI5, we’ve made the core components of the framework available as open source with OpenUI5. In addition, the UI5 technology is widely acknowledged as the foundation upon which other crucial applications like SAP Fiori, SAP Fiori Applications and SAP Fiori Elements were built and delivered. In this session, Michael Graf, an SAPUI5 Expert developer, will join us to see if he can substantiate Scott’s SAPUI5 knowledge and dispel some common myths about the toolkit. Scott will apply what he’s learned to create one or two simple applications that will illustrate some key aspects of developing great UI5 applications.

## Prerequisites


1. [Create a trial account](https://developers.sap.com/germany/tutorials/hcp-create-trial-account.html) on the SAP Hana Cloud Platform

2. [Create an account](https://developers.sap.com/germany/tutorials/gateway-demo-signup.html) on our SAP Gateway Demo System ES5

3. [Set up a destination](https://sapui5.hana.ondemand.com/#/topic/3a16c7a2f1e944deb000db49e5ece6be) to ES5 in your SAP Cloud Platform trial account

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
** Fiori 3 Theme
** Precofigured Fiori Flexible Column layout with two columns
** Best Practice starting point for custom app development

* Index
** Declarative Component Start
** Asynchronous loading of all resources
** CSP Compliant (no JavaScript in HTML pages)

* Quality
** Preconfigured mockserver and testing tools
** Basic test coverage of the template features
** Karma-ready unit and integration tests

### Create an Info View

TBD

### Add a Fiori 3 Card

TBD

### Enable Drag & Drop

TBD

## Questions

If you have questions on SAPUI5, feel free to join our OpenUI5 Slack group

## License

All example code in this repository is licensed under the Apache Software License, Version 2.0 except as noted otherwise in the [LICENSE](https://github.com/SAP/openSAP-ui5-course/blob/master/LICENSE) file.

