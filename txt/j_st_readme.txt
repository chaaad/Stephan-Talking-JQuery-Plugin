Stephan Talking jQ API:


HTML:

include this after jQuery lib...
<script src="jq_stephanTalking.min.js"></script>

for translators, include after after stephanTalking lib...
<script src="jq_stephanTalking_t-numbers.js"></script>





JS:

2 functions:
	$.stephanTalking.speak(parameter) //the main call
	$.stephanTalking.setting(parameter)   //advanced, only use if you want to tweak internal settings





$.stephanTalking.speak(parameter):

	simplest usage, parameter as a stephantalk string:
	$.stephanTalking.speak("wats up dok");


	more versatile usage, parameter as a data object:
	$.stephanTalking.speak({
	  p:pitch,   //optional, 50 to 450
	  c:cadence, //optional, 1.0 to 0.3
	  v:vol,     //optional, 0.3 to 1.0
	  i:input    //required, more details on 'input' below
	});


	'input' can be either::
		- stephantalk string
		  eg.
		  "wats up dok"

		or
		- stephantalk obj
		  eg.
		  [
			{k:"w"},
			{k:"a", p:100, v:.9, d:1}, //required: k(ey) | these 3 are optional: p(itch) -50 to 50 | v(ol) 0.1 to 2.0 | d(ur) -5 to 100
			{k:"t"},
			{k:"s"},
			{k:" "},
			{k:"u"},
			{k:"p"},
			{k:" "},
			{k:"d"},
			{k:"o"},
			{k:"k"}
		  ]




	actual examples:

		$.stephanTalking.speak("hellO");

		//with modifying overall pitch
		$.stephanTalking.speak({
		  p:75,
		  i:"hellO"
		});

		//with modifying overall pitch, cadence and volume
		$.stephanTalking.speak({
		  p:50,
		  c:.9,
		  v:.6,
		  i:"hellO"
		});

		//with modifying overall cadence
		//and pitch for letter "e"
		//and volume and duration for letter "O"
		$.stephanTalking.speak({
		  c:.4,
		  i: [
			{k:"h"},
			{k:"e", p:-10},
			{k:"l"},
			{k:"l"},
			{k:"O", v:1.5, d:20}
		  ]
		});


		//with modifying overall pitch and cadence
		$.stephanTalking.speak({
		  p:60,
		  c:.33,
		  i:"yO  yO   chek it out"
		});



$.stephanTalking.setting(parameter):
	parameter is a data obj

	5 possible settings:
		sample_resolution (default: 12000)
		phonemes: (see source for data structure)
		space_ltrs (default: " .,\n")
		quarter_spc_ltr (default: "_")
		eighth_spc_ltr (default: "-")


	actual examples:

		//add 'semi-colon' to space_ltrs
		$.stephanTalking.setting({
			space_ltrs:" .,;\n"
		});

		//change sample_resolution to 8000 hz
		//and add 'tab' to space_ltrs
		$.stephanTalking.setting({
			sample_resolution:8000,
			space_ltrs:" .,\n\t"
		});
