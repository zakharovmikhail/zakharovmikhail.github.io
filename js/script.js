function Task(){
	var self = this;
	this.init = function(){
		self.menu();


	}
   	this.menu = function(){
   		$(".burger-menu").click(function () {
	   			$(this).toggleClass("menu-on");
	   			$(".headerContent").slideToggle();
		});
   	}

    this.init();
}
$(window).ready(function(){
	var task = new Task();
});
