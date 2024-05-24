sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], 
  
  function(Controller, JSONModel) {
    "use strict";
   

        return Controller.extend("leavemgmtsyst.controller.View1", {
            onInit: function() {
                var oModel = new JSONModel({
                  startDate: "",
                  endDate: "",
                  leaveTypes: [
                    { key: "Annual Leave", text: "Annual Leave" },
                    { key: "Compensatory Off", text: "Compensatory Off" }
                  ],
                  leaveHistory: [
                    { date: "2024-06-17", leaveType: "Annual Leave", status: "AVAILABLE" },
                    { date: "2024-06-22", leaveType: "Restricted Holiday", status: "AVAILABLE" },
                    // Add more leave history data here
                  ]
                });
                this.getView().setModel(oModel);
              },
           
              onApplyPress: function() {
                // TO DO: Implement leave application logic here
                console.log("Leave application submitted");
              }
            });
          });