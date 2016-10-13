var data = [
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
	]
$(document).ready(function () {
	var source = $("#girl_item_template").html();
	var girlitemtemplate = Handlebars.compile(source);
	
	$("#girl_item_container").html(
		girlitemtemplate(data)
	);
	
	$("#girl_item_container").masonry({
		itemSelector: '.girl_item',
		columnWidth: '.girl_item',
		percentPosition: true
	});
});