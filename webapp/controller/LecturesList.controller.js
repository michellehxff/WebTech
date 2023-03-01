sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", 'sap/m/library'],
  function (Controller, JSONModel, library) {
    "use strict";

    return Controller.extend("sap.ui.demo.webtech.controller.LecturesList", {
      onInit: function () {
        var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/webtech/Lectures.json"));
			this.getView().setModel(oModel);
      },
      formatDate: function(sDate) {
        var oDate = new Date(sDate);
        const options= {weekday:'long', year:'numeric', month:'long', day:'numeric'};
        return oDate.toLocaleDateString('de-DE',options);
      }
    });
  }
);
