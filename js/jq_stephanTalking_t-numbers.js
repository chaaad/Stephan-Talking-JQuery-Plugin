if (!$) console.error("jQuery not loaded");
else if (!$.stephanTalking) console.error("jq_st.js not loaded");
else 
	if (!$.stephanTalking.translate) $.stephanTalking.translate= {};
	if (!$.stephanTalking.t_map) $.stephanTalking.t_map= {};




	//start numbers translator

	$.stephanTalking.t_map.numbers= {
		0:"zerO",
		1:"wun",
		2:"tU",
		3:"thrE",
		4:"for",
		5:"fIv",
		6:"siks",
		7:"seven",
		8:"At",
		9:"nIn"
	};

	$.stephanTalking.translate.numbers= function(text) {
		var match_arr, number_words_str;
		if (match_arr= text.match(/\d+/g)) {
			for (var i=0, match_str; match_str= match_arr[i]; i++) {
				number_words_str= translate(match_str);
				text= text.replace(match_str, number_words_str);
			}
		}
		return text;




		function translate(str) {
			var number_words_str= " ";

			for (var i=0, L= str.length; i<L; i++) {
				ltr= str.charAt(i);
				number_words_str+= $.stephanTalking.t_map.numbers[ltr] +" ";
			}

			return number_words_str;
		}
	};

	//end numbers translator
