var data = [
	  {
		"imageUrl"      : "http://www.vatcss.info/web1.0/TechKidsGirls/1.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/web1.0/TechKidsGirls/1.png",
		"posterName"    : "Dzungggg",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/web1.0/TechKidsGirls/3.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/web1.0/TechKidsGirls/2.png",
		"posterName"    : "Sannnn",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/web1.0/TechKidsGirls/2.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/web1.0/TechKidsGirls/1.png",
		"posterName"    : "Tranggggg",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/web1.0/TechKidsGirls/4.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/web1.0/TechKidsGirls/3.png",
		"posterName"    : "Ngannnnn",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/web1.0/TechKidsGirls/1.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/web1.0/TechKidsGirls/1.png",
		"posterName"    : "Dzungggg",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/web1.0/TechKidsGirls/3.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/web1.0/TechKidsGirls/2.png",
		"posterName"    : "Sannnn",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/web1.0/TechKidsGirls/2.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/web1.0/TechKidsGirls/1.png",
		"posterName"    : "Tranggggg",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  },
	  {
		"imageUrl"      : "http://www.vatcss.info/web1.0/TechKidsGirls/4.png",
		"view"          : 857,
		"date"          : "07/05/12",
		"plus"          : 588,
		"posterAvatar"  : "http://www.vatcss.info/web1.0/TechKidsGirls/3.png",
		"posterName"    : "Ngannnnn",
		"posterTitle"   : "HRC Photo",
		"content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
	  }
	]
$(document).ready(function () {
	var source = $("#girl_item_template").html();
	var girlitemtemplate = handlebars.compile(source);
	
	console.log(girlitemtemplate(data[0]);
});