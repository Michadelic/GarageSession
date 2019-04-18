sap.ui.define([
	"sap/m/Button"
], function (Button) {
	"use strict";

	return Button.extend("garage.session.control.DeleteButton", {

		metadata : {
			dnd: {
				droppable: true
			}
		},
		renderer : {}

	});
});