if (!$) console.error("jQuery not loaded");
else if (!$.stephanTalking) console.error("jq_st.js not loaded");
else 
	if (!$.stephanTalking.translate) $.stephanTalking.translate= {};
	if (!$.stephanTalking.t_map) $.stephanTalking.t_map= {};




	//start nato translator

	$.stephanTalking.t_map.nato= {
		a:"alf-a",
		b:"brav_O",
		c:"charlE",
		d:"delta",
		e:"ek-O",
		f:"fokstrot",
		g:"golf",
		h:"hOtel",
		i:"ind_E_a",
		j:"jUl_E_et",
		k:"kE_lO",
		l:"lE_ma",
		m:"mmIk_",
		n:"nOvembr",
		o:"oskar",
		p:"pa-pa",
		q:"kwU_bek",
		r:"rOm_E_O",
		s:"sE_era",
		t:"tangO",
		u:"yUnEform",
		v:"vik-tr",
		w:"wiskE",
		x:"eks_rA",
		y:"yankE",
		z:"zU_lU",
		"0":"zerO",
		"1":"wun",
		"2":"tU",
		"3":"trE",
		"4":"fow_r",
		"5":"fIf",
		"6":"siks",
		"7":"seven",
		"8":"At",
		"9":"nInr",
		".":"stop"
	};

	$.stephanTalking.translate.nato= function(text) {
		text= text.toLowerCase();
		var new_text= "";
		var ltr, nato_str;
		for (var i=0, L=text.length; i<L; i++) {
			ltr= text[i];
			if (nato_str= $.stephanTalking.t_map.nato[ltr]) new_text+= nato_str +" ";
			else new_text+= ltr;
		}
		return new_text;
	};

	//end nato translator
