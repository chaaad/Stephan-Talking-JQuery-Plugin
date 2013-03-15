if (!$) console.error("jQuery not loaded");
else if (!$.stephanTalking) console.error("jq_st.js not loaded");
else 
	if (!$.stephanTalking.translate) $.stephanTalking.translate= {};
	if (!$.stephanTalking.t_map) $.stephanTalking.t_map= {};




	//start fancyNumbers translator

	//say long numbers like "one thousand two hundred fifteen"
	//often, long numbers are not wanted - no way to distinguish
	//so this should be used in targeted fashion

	$.stephanTalking.t_map.fancyNumbers= {
		0:"zerO",
		1:"wun",
		2:"tU",
		3:"thrE",
		4:"for",
		5:"fIv",
		6:"siks",
		7:"seven",
		8:"At",
		9:"nIn",
		10:"ten",
		11:"Eleven",
		12:"twelv",
		13:"dert_tE_n",
		14:"fort_tE_n",
		15:"fift_tE_n",
		16:"sikst_tE_n",
		17:"sevent_tE_n",
		18:"At_tE_n",
		19:"nInt_tE_n",
		20:"twen_tE",
		30:"der_tE",
		40:"for_tE",
		50:"fif_tE",
		60:"siks_tE",
		70:"seven_tE",
		80:"At_tE",
		90:"nIn_tE",
		100:"hundred",
		"t1":"thousand",
		"t2":"mil-leon",
		"t3":"bil-leon",
		"t4":"tril-leon",
		"t5":"kwadril-leon",
		"t6":"kwintil-leon"
		//more->"undefined"
	};

	$.stephanTalking.translate.fancyNumbers= function(text) {
		var match_arr, number_words_str;
		if (match_arr= text.match(/[,\d]+/g)) {
			for (var i=0, match_str; match_str= match_arr[i]; i++) {
				number_words_str= translate(match_str);
				text= text.replace(match_str, number_words_str);
			}
		}
		return text;



		function translate(str) {
			var number_words_str= " ";
			var triplet_str, t_word_str;

			str= str.replace(/,/g, "");
			var t_ct= 0;
			do {
				translate_triplet(str.slice(-3));
				if (t_word_str.length>1) number_words_str= t_word_str +(t_ct ? $.stephanTalking.t_map.fancyNumbers["t" +t_ct] : "") +number_words_str;
				t_ct++;
				str= str.slice(0, -3);

			} while (str) 

			return number_words_str;



			var x, ltr, temp_str;
			function translate_triplet(triplet_str) {
				t_word_str= " "; 
				x= triplet_str *1;
				if (x>99) {
					ltr= triplet_str.slice(-3, 1);
					t_word_str+= $.stephanTalking.t_map.fancyNumbers[ltr] +" " +$.stephanTalking.t_map.fancyNumbers["100"] +" ";
				}

				ltr= triplet_str.slice(-2); //last 2 chars
				x= ltr *1;
				if (x) {
					if (x>9) {
						if (temp_str= $.stephanTalking.t_map.fancyNumbers[ltr]) {
							t_word_str+= temp_str +" ";
							if (x<21) return;

						} else {
							ltr= triplet_str.slice(-2, -1);
							if (temp_str= $.stephanTalking.t_map.fancyNumbers[ltr +"0"]) t_word_str+= temp_str +" ";
						}
					}

					ltr= triplet_str.slice(-1); //last char
					x= ltr *1;
					if (x) t_word_str+= $.stephanTalking.t_map.fancyNumbers[ltr] +" ";
				}
			}
		}
	};

	//end fancyNumbers translator
