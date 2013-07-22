$.Win.open();

$.SigninButton.addEventListener("click", function(e){
	var win = Alloy.createController("main");

	win.getView().open({ animated : true });
});

$.SignupLabel.addEventListener("click", function(e){
	var win = Alloy.createController("signup");

	win.getView().open({ animated : true });
});
