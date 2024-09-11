sap.ui.define([
    "sap/ui/core/Control"
], (Control) => {
    "use strict";
    return Control.extend("project1.controls.Train", {
        metadata: {

            aggregations : {
                "wagons": { type: "project1.controls.Wagon", multiple: true }
			}        
        },

        // Renderer function
        renderer(oRM, oControl) {
            oRM.openStart("div", oControl);
			oRM.openEnd();

            // Render the aggregation 'wagons'
            var aWagons = oControl.getWagons();
            aWagons.forEach(function(oWagon) {
                oRM.renderControl(oWagon);
            });

            oRM.close("div");
        }
    });
});