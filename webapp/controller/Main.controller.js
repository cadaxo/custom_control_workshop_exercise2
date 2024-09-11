sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.Main", {
            onInit: function () {

            },

            onPressEvent: function(oEvent) {
                const oWagon = oEvent.getSource();
                const bWagonSelected = oWagon.getSelected();
                const sWagonLabel = oWagon.getLabel();

                if (bWagonSelected) {
                    sap.m.MessageToast.show("Wagon " + sWagonLabel + " selected.");
                }
            }            
        });
    });
