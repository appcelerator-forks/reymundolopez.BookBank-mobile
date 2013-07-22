
var data = []
var dashboard = Alloy.createController("dashboard");
var currentView = Alloy.createController("search");

Ti.API.info(dashboard.getView());
data.push(dashboard.getView());

$.ds.leftTableView.data = data;
$.ds.contentview.add(currentView.getView());

function rowSelect(e) {
	if (currentView.id != e.row.customView) {
		$.ds.contentview.remove(currentView);
		currentView = Alloy.createController(e.row.customView).getView();
		$.ds.contentview.add(currentView);
	}
}

// Swap views on menu item click
$.ds.leftTableView.addEventListener('click', function selectRow(e) {
	rowSelect(e);
	$.ds.toggleLeftSlider();
});

Ti.App.addEventListener("sliderToggled", function(e) {
	if (e.direction == "right") {
		$.ds.leftMenu.zIndex = 2;
		$.ds.rightMenu.zIndex = 1;
	} else if (e.direction == "left") {
		$.ds.leftMenu.zIndex = 1;
		$.ds.rightMenu.zIndex = 2;
	}
});

$.ds.rightButton.visible = false;

$.Win.open();