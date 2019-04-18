sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue : function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},

		/**
		 * Converts the delivery status value from the data into a number used for the colorScheme propery of the InfoLabel control.
		 *
		 * @public
		 * @param {string} sValue The value to be formatted
		 * @returns {int} The formatted delivery status value for the InfoLabel colorScheme
		 */
		deliveryStatus: function(sValue) {
			var aStates = [1,2,3,4,5,6,7,8];
			return aStates[Math.floor(aStates.length * Math.random())];
		},

		convertCurrencyCodeToSymbol: function (sValue) {
			switch (sValue) {
				case "USD":
					return "$";
				case "EUR":
					return "€";
				default:
					return sValue;
			}
		},

		pictureURL: function (sName) {
			var aPictures = [
				"281422_ClothingOnHanger_R_orange.png",
				"281444_FullShelves_R_blue.png",
				"281448_GiftBag_R_blue.png",
				"281492_SewingMachine_R_purple.png",
				"281532_TShirt_R_green.png",
				"281552_Suitcase2_R_blue.png",
				"281584_GroceryBasket2_R_orange.png",
				"281626_MilkJug_R_orange.png",
				"282500_RunningShoes_R_green.png",
				"282619_Nail-polish_R_purple.png"
			];

			return sap.ui.require.toUrl("garage/session/images/" + aPictures[Math.floor(aPictures.length * Math.random())]);
		}
	};

});