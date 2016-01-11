sap.ui.controller("sap.ui.demo.SapRestDemo.view.NotFound", {

	onInit : function () {
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
		this._router.getTargets().getTarget("notFound").attachDisplay(this._handleDisplay, this);
	},

	_msg : "<div class='titlesNotFound'>The requested member '{0}' is unknown to the mORMot app.</div>",

	_handleDisplay : function (oEvent) {
		var oData = oEvent.getParameter("data");
		var html = this._msg.replace("{0}", oData.hash);
		this.getView().byId("msgHtml").setContent(html);
	},

	handleNavBack : function () {
		this._router._myNavBack();
	}
});
