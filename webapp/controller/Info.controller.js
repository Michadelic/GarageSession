sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("opensap.orders.controller.Info", {

		formatter: formatter,

				/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf opensap.orders.view.Info
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("Info").attachPatternMatched(function () {
				this.getView().getModel("appView").setProperty("/layout", "ThreeColumnsMidExpanded");
			}.bind(this));
		}

	});

});