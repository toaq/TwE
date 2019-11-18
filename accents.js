jQuery(document).ready(function($) {
	$(".distinct-accent").html(function(i, oldhtml){
    var newhtml = "";
    for(var i = 0; i < oldhtml.length; i++){
        var nextChar = "";
        var code = oldhtml.charCodeAt(i);
        if((code > 64 && code < 90) ||
            (code > 96 && code < 123) || code == 32) nextChar = oldhtml[i];
        else if(code == 257 || code == 275 || code == 299 || code == 333 || code == 363) nextChar = "<span class='with-accent-t1' data-content='" + oldhtml[i] + "'>" + oldhtml[i] + "</span>";
		else if(code == 225 || code == 233 || code == 237 || code == 243 || code == 250) nextChar = "<span class='with-accent-t2' data-content='" + oldhtml[i] + "'>" + oldhtml[i] + "</span>";
		else if(code == 462 || code == 283 || code == 464 || code == 466 || code == 468) nextChar = "<span class='with-accent-t3' data-content='" + oldhtml[i] + "'>" + oldhtml[i] + "</span>";
		else if(code == 7843 || code == 7867 || code == 7881 || code == 7887 || code == 7911) nextChar = "<span class='with-accent-t4' data-content='" + oldhtml[i] + "'>" + oldhtml[i] + "</span>";
		else if(code == 226 || code == 234 || code == 238 || code == 244 || code == 251) nextChar = "<span class='with-accent-t5' data-content='" + oldhtml[i] + "'>" + oldhtml[i] + "</span>";
		else if(code == 224 || code == 232 || code == 236 || code == 242 || code == 249) nextChar = "<span class='with-accent-t6' data-content='" + oldhtml[i] + "'>" + oldhtml[i] + "</span>";
		else if(code == 227 || code == 7869 || code == 297 || code == 245 || code == 361) nextChar = "<span class='with-accent-t7' data-content='" + oldhtml[i] + "'>" + oldhtml[i] + "</span>";
        else {
            nextChar = "<span class='with-accent' data-content='" + oldhtml[i] + "'>" + oldhtml[i] + "</span>";
        }
        newhtml += nextChar;
    }
    return newhtml;
	})
	.each(function(){
		$(this).replaceWith($(this).clone(true));
	});
});