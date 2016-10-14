/* var data = [
	  {
		"imageUrl"      : "http://www.vatcss.info/TechKidsGirls/1.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
		"posterName"    : "Dzungggg",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/TechKidsGirls/3.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/2.png",
		"posterName"    : "Sannnn",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/TechKidsGirls/2.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
		"posterName"    : "Tranggggg",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/TechKidsGirls/4.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/3.png",
		"posterName"    : "Ngannnnn",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/TechKidsGirls/1.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
		"posterName"    : "Dzungggg",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/TechKidsGirls/3.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/2.png",
		"posterName"    : "Sannnn",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/TechKidsGirls/2.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
		"posterName"    : "Tranggggg",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/TechKidsGirls/4.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterName"    : "Ngannnnn",
		"posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/3.png",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  }
	] */
$(document).ready(function () {
	var source = $("#girl_item_template").html();

	var girlitemtemplate = Handlebars.compile(source);
	
	requestNextPage(girlitemtemplate);
	
	animate();
	/* $("#girl_item_container").masonry({
		itemSelector: '.girl_item',
		columnWidth: '.girl_item',
		percentPosition: true
	}); */
	
	/* $(window).on("scroll", function () {
			if ($(document).height() <= $(window).scrollTop() + $(window).height() + 400) {				
				requestNextPage(girlitemtemplate);
		}
	}); */
	
	AddPopoverSocialPanel();
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
		page++;
	}).fail(function(error, data){
		console.log("Error");
		console.log(error);
	}).always(function(){
		
		dataLoading = false;
	});
}

function animate() {
	$('.loading_ball_one').animate({backgroundColor:'#a1a1a1'}, 400, function(){
		$('.loading_ball_three').animate({backgroundColor:'#707070'})
		$('.loading_ball_two').animate({backgroundColor:'#a1a1a1'}, 400, function(){
			$('.loading_ball_one').animate({backgroundColor:'#707070'})		
			$('.loading_ball_three').animate({backgroundColor:'#a1a1a1'}, 400, function(){
				$('.loading_ball_two').animate({backgroundColor:'#707070'})
				animate();
			});
		});
	});
}

function AddPopoverSocialPanel() {
	 var popoverTemplate = ['<div class="popover">',
                                '<div class="arrow"></div>',
                                '<div class="popover-content">',                                    
                                '</div>',
                            '</div>'].join('');
	var content = ['<div>Chốn lầu xanh riêng của gia đình Tech Kids</div>',
                   '<div><img src="" class="twitter_button" aria-hidden="true"></span></div>',
				   '<div><img class="rss_button" aria-hidden="true"></span></div>',
				   '<div><img class="facebook_button" aria-hidden="true"></span></div>'
				   '<div><img class="pinterest_button" aria-hidden="true"></span></div>'
					].join('');
	$('.social_button').popover({
		template : popoverTemplate,
		trigger: 'click',
		content: content,
		placement: "top",
		html: true
	});
}