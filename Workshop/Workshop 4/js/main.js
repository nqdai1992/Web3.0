$(document).ready(function () {
	var source = $("#girl_item_template").html();

	var girlitemtemplate = Handlebars.compile(source);
	
	var requestpage;
	
	requestNextPage(girlitemtemplate);
	
	
	$(window).on("scroll", function () {
			if ($(document).height() <= $(window).scrollTop() + $(window).height() + 400) {		
				clearTimeout(requestpage);
				requestpage = window.setTimeout(function() {
									requestNextPage(girlitemtemplate)
							},3000);			
		}
	});
	
	$('.topup_button').on("click", function () {
		window.scrollTo(0,0)
	});
	loadingBarAnimation();
	
	addPopoverSocialPanel();
});
var dataLoading = false;
var masonryInit = false;
var page = 1;

function requestNextPage(girlitemtemplate) {
	if (dataLoading)
		return;
	
	dataLoading = true;
	
	$.ajax({
		type: "GET",
		url: "http://techkids.vn:4949/hotgirls/page/" + page,
	}).done(function(data) {
		if (masonryInit) {
			var girlitem = $(girlitemtemplate(data.items));
			$("#girl_item_container").append(girlitem).masonry('appended',girlitem);
		} else {
			$("#girl_item_container").html(
				girlitemtemplate(data.items)
			);
			$("#girl_item_container").masonry({
				itemSelector: '.girl_item',
				columnWidth: '.girl_item',
				percentPosition: true
			});
			masonryInit = true;
			
		}
		dataLoading = false;
		page++;
	}).fail(function(error){
		console.log("Error");
		console.log(error);
	});
	
	return dataLoading;
}

function loadingBarAnimation() {
	$('.loading_ball_one').animate({backgroundColor:'#a1a1a1'}, 400, function(){
		$('.loading_ball_three').animate({backgroundColor:'#707070'})
		$('.loading_ball_two').animate({backgroundColor:'#a1a1a1'}, 400, function(){
			$('.loading_ball_one').animate({backgroundColor:'#707070'})		
			$('.loading_ball_three').animate({backgroundColor:'#a1a1a1'}, 400, function(){
				$('.loading_ball_two').animate({backgroundColor:'#707070'})
				loadingBarAnimation();
			});
		});
	});
}

function addPopoverSocialPanel() {
	 var popoverTemplate = ['<div class="popover social_popover">',
                                '<div class="arrow"></div>',
                                '<div class="popover-content">',  
                                '</div>',
                            '</div>'].join('');
	var content = ['<div>Chốn lầu xanh riêng của gia đình Tech Kids</div>',
					'<div>',
                   '<div class="social_button"><img src="img/Twitter Icon.png" class="img-responsive" aria-hidden="true"></span></div>',
				   '<div class="social_button"><img src="img/RSS Icon.png" class="img-responsive" aria-hidden="true"></span></div>',
				   '<div class="social_button"><img src="img/Facebook Icon.png" class="img-responsive" aria-hidden="true"></span></div>',
				   '<div class="social_button"><img src="img/Pinterest.png" class="img-responsive" aria-hidden="true"></span></div>',
					'</div>'].join('');

	$('.social_panel').popover({
		template : popoverTemplate,
		trigger: 'hover click',
		content: content,
		placement: "top",
		html: true,
	});
}