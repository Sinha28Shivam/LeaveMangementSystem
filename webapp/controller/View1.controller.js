sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/unified/DateRange",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent"
],

    function (Controller, Fragment, DateRange, JSONModel, UIComponent) {
        "use strict";

        return Controller.extend("leavemgmtsyst.controller.View1", {
            onInit : function () {
                var leaveData = new sap.ui.model.json.JSONModel();
                leaveData.loadData("model/leaveData.json");
                this.getView().setModel(leaveData, "lD");
            },

            onSubmitLeave: function () {
                var oView = this.getView();

                // Check if the dialog already exists
                if (!this.byId("idDialog")) {
                    console.log("Dialog does not exist. Loading fragment...");
                    // Load the dialog fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "leavemgmtsyst.view.DialogFrag",
                        type: "XML",
                        controller: this
                    }).then(function (oDialog) {
                        console.log("Fragment loaded successfully.");
                        // Add dialog as a dependent of the view and open it
                        oView.addDependent(oDialog);
                        oDialog.open();
                    }).catch(function (oError) {
                        console.error("Error loading fragment:", oError);
                    });
                } else {
                    console.log("Dialog exists. Opening dialog...");
                    // Open the existing dialog
                    this.byId("idDialog").open();
                }
            },

            onCloseDialog: function () {
                console.log("Closing dialog.");
                // Close the dialog
                this.byId("idDialog").close();
            },

            onSubmitDialog: function () {
                var oView = this.getView();
                var oDialog = this.byId("idDialog");
                var oCalendar = oView.byId("calendar");
                var sDescription = this.byId("descriptionInput").getValue();

                // Get the selected dates from the calendar
                var aSelectedDates = oCalendar.getSelectedDates();
                var oStartDate = null;
                var oEndDate = null;

                if (aSelectedDates.length > 0) {
                    oStartDate = aSelectedDates[0].getStartDate();
                    if (aSelectedDates.length > 1) {
                        oEndDate = aSelectedDates[aSelectedDates.length - 1].getEndDate();
                    }
                }

                // Create the JSON object with checks for null values
                var oLeaveData = {
                    from: oStartDate ? oStartDate.toString() : "", // Handle potential null startDate
                    to: oEndDate ? oEndDate.toString() : "",   // Handle potential null endDate
                    description: this.byId("descriptionInput").getValue()
                };

                // Log the JSON object or handle as needed
                console.log(JSON.stringify(oLeaveData));


                // reset the dialog box dataa
                this.byId("descriptionInput").setValue("");


                // Close the dialog
                oDialog.close();
            },

            onPress : function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("RouteprofileView");
            }
        });
    });