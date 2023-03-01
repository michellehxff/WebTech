sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.webtech.controller.App", {
      onOpenDialog: function () {
        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: "sap.ui.demo.webtech.view.HelloDialog",
          });
        }
        this.pDialog.then(function (oDialog) {
          oDialog.open();
        });
      },
      onCloseDialog: function () {
        //Closing action
        this.byId("helloDialog").close();
      },
    });
  });