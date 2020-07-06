oci_r_scale = ['Not at all', 'A little', 'Moderately', 'A lot', 'Extremely']; 
sds_scale = ['A little of the time', 'Some of the time', 'Good part of the time', 'Most of the time']; 
stai_scale = ['Not at all', 'Somewhat', 'Moderately so', 'Very much so']; 
audit_1_scale = ['Never', 'Monthly or less', '2 to 4 times a month', '2 to 3 times a week', '4 or more times a week']; 
audit_2_scale = ['1 or 2', '3 or 4', '5 or 6', '7, 8, or 9', '10 or more']; 
audit_3_scale = ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily']; 
audit_4_scale = ['No', 'Yes, but not in the last year', 'Yes, during the last year']; 
rbq_p1_scale = ['Never or rarely', 'One or more times daily', '15 or more times daily']; 
rbq_p2_scale = ['Never or rarely', 'Mild or occasional', 'Marked or notable']; 
rbq_p3_scale = ['Never or rarely', 'Mild or occasional (does not affect others)', 'Marked or notable (occasionally affects others)']; 
rbq_p4_scale = ['Never or\nrarely', 'Mild or occasional (not entirely resistant to change or new things)', 'Marked or notable (will tolerate changes when necessary)']; 
rbq_p5_scale = ['A range of different and flexible selfchosen', 'Some varied and flexible interests but commonly choose the same activities', 'Almost always choose from a restricted range of repetitive activities']; 
eat_p1_scale = ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never']; 
eat_p2_scale = ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never']; 
eat_p3_scale = ['Never', 'Once a month or less', '2-3 times a month', 'Once a week', '2-6 times a week', 'Once a day or more ']; 
eat_p4_scale = ['Yes', 'No']; 
abis_scale = ['Rarely/Never', 'Occasionally', 'Often', 'Almost Always/Always']; 
o_life_scale = ['Yes', 'No']; 
asrs_scale = ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often']; 
ftnd_1_scale = ['Within 5 minutes', '6‐30 minutes', '31‐60 minutes ', 'After 60 minutes']; 
ftnd_2_scale = ['Yes', 'No']; 
ftnd_3_scale = ['The first in the morning', 'Any other']; 
ftnd_4_scale = ['10 or less', '11 ‐ 20', '21 ‐ 30', '31 or more']; 
ptq_scale = ['Never', 'Rarely', 'Sometimes', 'Often', 'Almost Always']; 
dem_1_scale = ['Male', 'Female', 'Non-binary', 'Not Applicable']; 
dem_2_scale = ['Not Hispanic or Latino', 'Hispanic or Latino', 'Unknown']; 
dem_3_scale = ['American Indian/ Alaska Native', 'Asian', 'Native Hawaiian or Other Pacific Islander', 'Black or African American', 'White', 'More than One Race', 'Unkown']; 
dem_4_scale = ['No', 'Yes']; 
recontact_scale = ['Yes, I agree to be contacted about future research studies.', 'No, I do not want to be contacted about future research studies.']; 
qs_instructions = {
	oci_r: "The following statements refer to experiences that many people have in their everyday lives. Circle the number that best describes HOW MUCH that experience has DISTRESSED or BOTHERED you during the PAST MONTH.", 
	sds: "For each item below, please select which best describes how often you felt or behaved this way during the past several days", 
	stai_p1: "A number of statements which people have used to describe themselvesare given below. Read each statement and then select the appropriate number to theright of the statement to indicate how you feel right now, that is, at this moment.There are no wrong or right answers. Do not spend too much time on any onestatement but give the answer which seems to describe your present feelings best.", 
	stai_p2: "A number of statements which people have used to describe themselvesare given below. Read each statement and then circle the appropriate number to theright of the statement to indicate how you generally feel. There are no wrong or rightanswers. Do not spend too much time on any one statement but give the answer whichseems to describe how you generally feel.", 
	audit: "Your answers will remain confidential so please be honest. Place select the choice that best describes your answer to each question.", 
	rbq_2a: "For each statement, indicate the degree to which that statement applies to you.Select the most appropriate response.", 
	eat: "Please fill out the below form as accurately, honestly and completelyas possible. There are no right or wrong answers. All of your responses are confidential.", 
	abis: "People differ in the ways they act and think in different situations. This is a test to measure some of the ways in which you act and think. Read each statement and select the appropriate response. Do not spend too much time on any statement. Answer quickly and honestly.", 
	o_life: "For each statement, say whether it applies to you or not.", 
	asrs: "Please answer the questions below, rating yourself on each of thecriteria shown using the scale. As you answer each question, select the answer that best describes how you have felt and conducted yourself over the past six months.", 
	ftnd: "Please select one answer for each question.", 
	ptq: "In this questionnaire, you will be asked to describe how you typically think aboutnegative experiences or problems. Please read the following statements and rate the extent towhich they apply to you when you think about negative experiences or problems.", 
	dem: "Please respond to the following demographic information", 
	recontact: "Test"
}; 
questionnaires = {
 'oci_r': [
	{name: "OCI-R_01", prompt: "I have saved up so many things that they get in the way.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_02", prompt: "I check things more often than necessary. ", labels: oci_r_scale, required: false},
 	{name: "OCI-R_03", prompt: "I get upset if objects are not arranged properly.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_04", prompt: "I feel compelled to count while I am doing things.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_05", prompt: "I find it difficult to touch an object when I know it has been touched by strangers or certain people.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_06", prompt: "I find it difficult to control my own thoughts.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_07", prompt: "I collect things I don’t need.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_08", prompt: "I repeatedly check doors, windows, drawers, etc.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_09", prompt: "I get upset if others change the way I have arranged things.", labels: oci_r_scale, required: false},
 	{name: "CHECK_01", prompt: "If you are paying attention to these questions, please select ’A little’ as your answer", labels: oci_r_scale, required: false},
 	{name: "OCI-R_10", prompt: "I feel I have to repeat certain numbers.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_11", prompt: "I sometimes have to wash or clean myself simply because I feel contaminated.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_12", prompt: "I am upset by unpleasant thoughts that come into my mind against my will.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_13", prompt: "I avoid throwing things away because I am afraid I might need them later.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_14", prompt: "I repeatedly check gas and water taps and light switches after turning them off.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_15", prompt: "I need things to be arranged in a particular way.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_16", prompt: "I feel that there are good and bad numbers.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_17", prompt: "I wash my hands more often and longer than necessary.", labels: oci_r_scale, required: false},
 	{name: "OCI-R_18", prompt: "I frequently get nasty thoughts and have difficulty in getting rid of them.", labels: oci_r_scale, required: false}
],

 'sds': [
	{name: "sds_01", prompt: "I feel down-hearted and blue.", labels: sds_scale, required: false},
 	{name: "sds_02", prompt: "Morning is when I feel the best", labels: sds_scale, required: false},
 	{name: "sds_03", prompt: "I have crying spells or feel like it.", labels: sds_scale, required: false},
 	{name: "sds_04", prompt: "I have trouble sleeping at night.", labels: sds_scale, required: false},
 	{name: "sds_05", prompt: "I eat as much as I used to.", labels: sds_scale, required: false},
 	{name: "sds_06", prompt: "I still enjoy sex.", labels: sds_scale, required: false},
 	{name: "sds_07", prompt: "I notice that I am losing weight.", labels: sds_scale, required: false},
 	{name: "sds_08", prompt: "I have trouble with constipation.", labels: sds_scale, required: false},
 	{name: "sds_09", prompt: "My heart beats faster than usual.", labels: sds_scale, required: false},
 	{name: "sds_10", prompt: "I get tired for no reason.", labels: sds_scale, required: false},
 	{name: "sds_11", prompt: "My mind is as clear as it used to be.", labels: sds_scale, required: false},
 	{name: "sds_12", prompt: "I find it easy to do the things I used to.", labels: sds_scale, required: false},
 	{name: "sds_13", prompt: "I am restless and can’t keep still.", labels: sds_scale, required: false},
 	{name: "sds_14", prompt: "I feel hopeful about the future.", labels: sds_scale, required: false},
 	{name: "sds_15", prompt: "I am more irritable than usual.", labels: sds_scale, required: false},
 	{name: "sds_16", prompt: "I find it easy to make decisions.", labels: sds_scale, required: false},
 	{name: "sds_17", prompt: "I feel that I am useful and needed.", labels: sds_scale, required: false},
 	{name: "sds_18", prompt: "My life is pretty full.", labels: sds_scale, required: false},
 	{name: "sds_19", prompt: "I feel that others would be better off if Iwere dead.", labels: sds_scale, required: false},
 	{name: "sds_20", prompt: "I still enjoy the things I used to do.", labels: sds_scale, required: false},
 	{name: "CHECK_02", prompt: "If you are paying attention to these questions, please select ’A little of the time’ as your answer", labels: sds_scale, required: false}
],

 'stai_p1': [
	{name: "stai_01", prompt: "I feel calm", labels: stai_scale, required: false},
 	{name: "stai_02", prompt: "I feel secure", labels: stai_scale, required: false},
 	{name: "stai_03", prompt: "I am tense", labels: stai_scale, required: false},
 	{name: "stai_04", prompt: "I am regretful", labels: stai_scale, required: false},
 	{name: "stai_05", prompt: "I feel at ease", labels: stai_scale, required: false},
 	{name: "stai_06", prompt: "I feel upset", labels: stai_scale, required: false},
 	{name: "stai_07", prompt: "I am presently worrying over possible misfortunes", labels: stai_scale, required: false},
 	{name: "stai_08", prompt: "I feel rested", labels: stai_scale, required: false},
 	{name: "stai_09", prompt: "I feel anxious", labels: stai_scale, required: false},
 	{name: "stai_10", prompt: "I feel comfortable", labels: stai_scale, required: false},
 	{name: "stai_11", prompt: "I feel self-confident", labels: stai_scale, required: false},
 	{name: "stai_12", prompt: "I feel nervous", labels: stai_scale, required: false},
 	{name: "stai_13", prompt: "I am jittery", labels: stai_scale, required: false},
 	{name: "stai_14", prompt: "I feel “high strung”", labels: stai_scale, required: false},
 	{name: "stai_15", prompt: "I am relaxed", labels: stai_scale, required: false},
 	{name: "stai_16", prompt: "I feel confident", labels: stai_scale, required: false},
 	{name: "stai_17", prompt: "I am worried", labels: stai_scale, required: false},
 	{name: "stai_18", prompt: "I feel over-excited and “rattled”", labels: stai_scale, required: false},
 	{name: "stai_19", prompt: "I feel joyful", labels: stai_scale, required: false},
 	{name: "stai_20", prompt: "I feel pleasant", labels: stai_scale, required: false}
],

 'stai_p2': [
	{name: "stai_21", prompt: "I feel pleasant", labels: stai_scale, required: false},
 	{name: "stai_22", prompt: "I tire quickly", labels: stai_scale, required: false},
 	{name: "stai_23", prompt: "I feel like crying", labels: stai_scale, required: false},
 	{name: "stai_24", prompt: "I wish I could be as happy as others seem to be", labels: stai_scale, required: false},
 	{name: "stai_25", prompt: "I am losing out on things because I can’t make up my mind soon enough", labels: stai_scale, required: false},
 	{name: "stai_26", prompt: "I feel rested", labels: stai_scale, required: false},
 	{name: "stai_27", prompt: "I am “calm, cool, and collected”", labels: stai_scale, required: false},
 	{name: "stai_28", prompt: "I feel that difficulties are piling up so that I cannot overcome them", labels: stai_scale, required: false},
 	{name: "stai_29", prompt: "I worry too much over something that doesn’t really matter", labels: stai_scale, required: false},
 	{name: "stai_30", prompt: "I am happy", labels: stai_scale, required: false},
 	{name: "stai_31", prompt: "I am inclined to take things hard", labels: stai_scale, required: false},
 	{name: "stai_32", prompt: "I lack self-confidence", labels: stai_scale, required: false},
 	{name: "stai_33", prompt: "I feel secure", labels: stai_scale, required: false},
 	{name: "stai_34", prompt: "I try to avoid facing a crises or difficulty", labels: stai_scale, required: false},
 	{name: "stai_35", prompt: "I feel blue", labels: stai_scale, required: false},
 	{name: "stai_36", prompt: "I am content", labels: stai_scale, required: false},
 	{name: "stai_37", prompt: "Some unimportant thought runs through my head and bothers me", labels: stai_scale, required: false},
 	{name: "stai_38", prompt: "I take disappointments so keenly that I can’t put them out of my mind", labels: stai_scale, required: false},
 	{name: "stai_39", prompt: "I am a steady person", labels: stai_scale, required: false},
 	{name: "stai_40", prompt: "I get in a state of tension or turmoil as I think over my recent concerns and interests", labels: stai_scale, required: false}
],

 'audit': [
	{name: "audit_01", prompt: "How often do you have a drink containing alcohol?", labels: audit_1_scale, required: false},
 	{name: "audit_02", prompt: "How many drinks containing alcohol do you have on a typical day when you are drinking?", labels: audit_2_scale, required: false},
 	{name: "audit_03", prompt: "How often do you have six or more drinks on one occasion?", labels: audit_3_scale, required: false},
 	{name: "audit_04", prompt: "How often during the last year have you found that you were not able to stop drinking once you had started?", labels: audit_3_scale, required: false},
 	{name: "audit_05", prompt: "How often during the last year have you failed to do what was normally expected from you because of drinking?", labels: audit_3_scale, required: false},
 	{name: "audit_06", prompt: "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?", labels: audit_3_scale, required: false},
 	{name: "audit_07", prompt: "How often during the last year have you had a feeling of guilt or remorse after drinking?", labels: audit_3_scale, required: false},
 	{name: "audit_08", prompt: "How often during the last year have you been unable to remember what happened the night before because you had been drinking?", labels: audit_3_scale, required: false},
 	{name: "audit_09", prompt: "Have you or someone else been injured as a result of your drinking?", labels: audit_4_scale, required: false},
 	{name: "audit_10", prompt: "Has a relative or friend or a doctor or another health worker been concerned about your drinking or suggested you cut down?", labels: audit_4_scale, required: false}
],

 'rbq_2a': [
	{name: "rbq-2a_01", prompt: "Do you like to arrange items in rows or patterns?", labels: rbq_p1_scale, required: false},
 	{name: "rbq-2a_02", prompt: "Do you repetitively fiddle with items? (e.g. spin,twiddle, bang, tap, twist, or flick anythingrepeatedly)?", labels: rbq_p1_scale, required: false},
 	{name: "rbq-2a_03", prompt: "Do you spin yourself around and around?", labels: rbq_p1_scale, required: false},
 	{name: "rbq-2a_04", prompt: "Do you rock backwards and forwards, or side toside, either when sitting or when standing?", labels: rbq_p1_scale, required: false},
 	{name: "rbq-2a_05", prompt: "Do you pace or move around repetitively (e.g. walk to and fro across a room, or around the samepath in the garden)?", labels: rbq_p1_scale, required: false},
 	{name: "rbq-2a_06", prompt: "Do you make repetitive hand and/or fingermovements? (e.g. flap, wave, or flickyour hands or fingers repetitively?)", labels: rbq_p2_scale, required: false},
 	{name: "rbq-2a_07", prompt: "Do you have a fascination with specific objects(e.g. trains, road signs, or other things?)", labels: rbq_p2_scale, required: false},
 	{name: "rbq-2a_08", prompt: "Do you like to look at objects from particular or unusual angles?*", labels: rbq_p2_scale, required: false},
 	{name: "rbq-2a_09", prompt: "Do you have a special interest in the smell ofpeople or objects?", labels: rbq_p2_scale, required: false},
 	{name: "rbq-2a_10", prompt: "Do you have a special interest in the feel ofdifferent surfaces?*", labels: rbq_p2_scale, required: false},
 	{name: "rbq-2a_11", prompt: "Do you have any special objects you like tocarry around?*", labels: rbq_p2_scale, required: false},
 	{name: "rbq-2a_12", prompt: "Do you collect or hoard items of any sort?", labels: rbq_p3_scale, required: false},
 	{name: "rbq-2a_13", prompt: "Do you insist on things at home remaining thesame? (e.g. furniture staying in the sameplace, things being kept in certainplaces, or arranged in certain ways?)**", labels: rbq_p3_scale, required: false},
 	{name: "rbq-2a_14", prompt: "Do you get upset about minor changes toobjects (e.g. flecks of dirt on yourclothes, minor scratches on objects?)", labels: rbq_p3_scale, required: false},
 	{name: "rbq-2a_15", prompt: "Do you insist that aspects of daily routine must remain the same?", labels: rbq_p3_scale, required: false},
 	{name: "rbq-2a_16", prompt: "Do you insist on doing things in a certain way orre-doing things until they “just right”?", labels: rbq_p3_scale, required: false},
 	{name: "rbq-2a_17", prompt: "Do you play the same music, game or video, orread the same book repeatedly?*", labels: rbq_p4_scale, required: false},
 	{name: "rbq-2a_18", prompt: "Do you Insist on wearing the same clothes orrefuse to wear new clothes?* ", labels: rbq_p4_scale, required: false},
 	{name: "rbq-2a_19", prompt: "Do you Insist on eating the same foods, or avery small range of foods, at everymeal?*", labels: rbq_p4_scale, required: false},
 	{name: "rbq-2a_20", prompt: "What sort of activity will you choose ifyou are left to occupy yourself?", labels: rbq_p5_scale, required: false}
],

 'eat': [
	{name: "eat_01", prompt: "Am terrified about being overweight.", labels: eat_p1_scale, required: false},
 	{name: "eat_02", prompt: "Avoid eating when I am hungry.", labels: eat_p1_scale, required: false},
 	{name: "eat_03", prompt: "Find myself preoccupied with food.", labels: eat_p1_scale, required: false},
 	{name: "eat_04", prompt: "Have gone on eating binges where I feel that I may not be able to stop.", labels: eat_p1_scale, required: false},
 	{name: "eat_05", prompt: "Cut my food into small pieces.", labels: eat_p1_scale, required: false},
 	{name: "eat_06", prompt: "Aware of the calorie content of foods that I eat.", labels: eat_p1_scale, required: false},
 	{name: "eat_07", prompt: "Particularly avoid food with a high carbohydrate content (i.e. bread, rice, potatoes, etc.) ", labels: eat_p1_scale, required: false},
 	{name: "eat_08", prompt: "Feel that others would prefer if I ate more.", labels: eat_p1_scale, required: false},
 	{name: "eat_09", prompt: "Vomit after I have eaten.", labels: eat_p1_scale, required: false},
 	{name: "eat_10", prompt: "Feel extremely guilty after eating.", labels: eat_p1_scale, required: false},
 	{name: "eat_11", prompt: "Am preoccupied with a desire to be thinner.", labels: eat_p1_scale, required: false},
 	{name: "eat_12", prompt: "Think about burning up calories when I exercise.", labels: eat_p1_scale, required: false},
 	{name: "eat_13", prompt: "Other people think that I am too thin.", labels: eat_p1_scale, required: false},
 	{name: "eat_14", prompt: "Am preoccupied with the thought of having fat on my body. ", labels: eat_p1_scale, required: false},
 	{name: "eat_15", prompt: "Take longer than others to eat my meals.", labels: eat_p1_scale, required: false},
 	{name: "eat_16", prompt: "Avoid foods with sugar in them.", labels: eat_p1_scale, required: false},
 	{name: "eat_17", prompt: "Eat diet foods.", labels: eat_p1_scale, required: false},
 	{name: "eat_18", prompt: "Feel that food controls my life.", labels: eat_p1_scale, required: false},
 	{name: "eat_19", prompt: "Display self-control around food.", labels: eat_p1_scale, required: false},
 	{name: "eat_20", prompt: "Feel that others pressure me to eat.", labels: eat_p1_scale, required: false},
 	{name: "eat_21", prompt: "Give too much time and thought to food.", labels: eat_p1_scale, required: false},
 	{name: "eat_22", prompt: "Feel uncomfortable after eating sweets.", labels: eat_p1_scale, required: false},
 	{name: "eat_23", prompt: "Engage in dieting behavior.", labels: eat_p1_scale, required: false},
 	{name: "eat_24", prompt: "Like my stomach to be empty.", labels: eat_p1_scale, required: false},
 	{name: "eat_25", prompt: "Have the impulse to vomit after meals.", labels: eat_p1_scale, required: false},
 	{name: "eat_26", prompt: "Enjoy trying new rich foods.", labels: eat_p2_scale, required: false},
 	{name: "eat_a", prompt: "Gone on eating binges where you feel that you may not be able to stop?", labels: eat_p3_scale, required: false},
 	{name: "eat_b", prompt: "Ever made yourself sick (vomited) to control your weight or shape?", labels: eat_p3_scale, required: false},
 	{name: "eat_c", prompt: "Ever used laxatives, diet pills or diuretics (water pills) to control your weight or shape?", labels: eat_p3_scale, required: false},
 	{name: "eat_d", prompt: "Exercised more than 60 minutes a day to lose or to control your weight?", labels: eat_p3_scale, required: false},
 	{name: "eat_e", prompt: "Lost 20 pounds or more in the past 6 months", labels: eat_p4_scale, required: false}
],

 'abis': [
	{name: "abis_01", prompt: "I am a careful thinker.", labels: abis_scale, required: false},
 	{name: "abis_02", prompt: "I plan trips well ahead of time.", labels: abis_scale, required: false},
 	{name: "abis_03", prompt: "I do things without thinking.", labels: abis_scale, required: false},
 	{name: "abis_04", prompt: "I concentrate easily.", labels: abis_scale, required: false},
 	{name: "abis_05", prompt: "I plan for job security.", labels: abis_scale, required: false},
 	{name: "abis_06", prompt: "I act “on impulse.”", labels: abis_scale, required: false},
 	{name: "abis_07", prompt: "I am self controlled.", labels: abis_scale, required: false},
 	{name: "abis_08", prompt: "I say things without thinking.", labels: abis_scale, required: false},
 	{name: "abis_09", prompt: "I don’t “pay attention.”", labels: abis_scale, required: false},
 	{name: "abis_10", prompt: "I act on the spur of the moment.", labels: abis_scale, required: false},
 	{name: "abis_11", prompt: "I plan tasks carefully.", labels: abis_scale, required: false},
 	{name: "abis_12", prompt: "I am a steady thinker.", labels: abis_scale, required: false},
 	{name: "abis_13", prompt: "I am future oriented.", labels: abis_scale, required: false},
 	{name: "CHECK_03", prompt: "If you are paying attention to these questions, please select ’Often’ as your answer", labels: abis_scale, required: false}
],

 'o_life': [
	{name: "o-life_01", prompt: "When in the dark do you often see shapes and forms even though there is nothing there?", labels: o_life_scale, required: false},
 	{name: "o-life_02", prompt: "Are your thoughts sometimes so strong that you can almost hear them?", labels: o_life_scale, required: false},
 	{name: "o-life_03", prompt: "Have you ever thought that you had special, almost magical powers?", labels: o_life_scale, required: false},
 	{name: "o-life_04", prompt: "Have you sometimes sensed an evil presence around you, even though you could not see it?", labels: o_life_scale, required: false},
 	{name: "o-life_05", prompt: "Do you think that you could learn to read other's minds if you wanted to?", labels: o_life_scale, required: false},
 	{name: "o-life_06", prompt: "When you look in the mirror does your face sometimes seem quite different from usual?", labels: o_life_scale, required: false},
 	{name: "o-life_07", prompt: "Do ideas and insights sometimes come to you so fast that you cannot express them all?", labels: o_life_scale, required: false},
 	{name: "o-life_08", prompt: "Can some people make you aware of them just by thinking about you?", labels: o_life_scale, required: false},
 	{name: "o-life_09", prompt: "Does a passing thought ever seem so real it frightens you?", labels: o_life_scale, required: false},
 	{name: "o-life_10", prompt: "Do you feel that your accidents are caused by mysterious forces?", labels: o_life_scale, required: false},
 	{name: "o-life_11", prompt: "Do you ever have a sense of vague danger or sudden dread for reasons that you do not understand?", labels: o_life_scale, required: false},
 	{name: "o-life_12", prompt: "Does your sense of smell sometimes become unusually strong?", labels: o_life_scale, required: false},
 	{name: "o-life_13", prompt: "Are you easily confused if too much happens at the same time?", labels: o_life_scale, required: false},
 	{name: "o-life_14", prompt: "Do you frequently have difficulty in starting to do things?", labels: o_life_scale, required: false},
 	{name: "o-life_15", prompt: "Are you a person whose mood goes up and down easily?", labels: o_life_scale, required: false},
 	{name: "o-life_16", prompt: "Do you dread going into a room by yourself where other people have already gathered and are talking?", labels: o_life_scale, required: false},
 	{name: "o-life_17", prompt: "Do you find it difficult to keep interested in the same thing for a long time?", labels: o_life_scale, required: false},
 	{name: "o-life_18", prompt: "Do you often have difficulties in controlling your thoughts?", labels: o_life_scale, required: false},
 	{name: "o-life_19", prompt: "Are you easily distracted from work by daydreams?", labels: o_life_scale, required: false},
 	{name: "o-life_20", prompt: "Do you ever feel that your speech is difficult to understand because the words are all mixed up and don't make sense?", labels: o_life_scale, required: false},
 	{name: "o-life_21", prompt: "Are you easily distracted when you read or talk to someone?", labels: o_life_scale, required: false},
 	{name: "o-life_22", prompt: "Is it hard for you to make decisions?", labels: o_life_scale, required: false},
 	{name: "o-life_23", prompt: "When in a crowded room, do you often have difficulty in following a conversation?", labels: o_life_scale, required: false},
 	{name: "o-life_24", prompt: "Are there very few things that you have ever enjoyed doing?", labels: o_life_scale, required: false},
 	{name: "o-life_25", prompt: "Are you much too independent to get involved with other people?", labels: o_life_scale, required: false},
 	{name: "o-life_26", prompt: "Do you love having your back massaged?", labels: o_life_scale, required: false},
 	{name: "o-life_27", prompt: "Do you find the bright lights of a city exciting to look at?", labels: o_life_scale, required: false},
 	{name: "o-life_28", prompt: "Do you feel very close to your friends?", labels: o_life_scale, required: false},
 	{name: "o-life_29", prompt: "Has dancing or the idea of it always seemed dull to you?", labels: o_life_scale, required: false},
 	{name: "o-life_30", prompt: "Do you like mixing with people?", labels: o_life_scale, required: false},
 	{name: "o-life_31", prompt: "Is trying new foods something you have always enjoyed?", labels: o_life_scale, required: false},
 	{name: "o-life_32", prompt: "Have you often felt uncomfortable when your friends touch you?", labels: o_life_scale, required: false},
 	{name: "o-life_33", prompt: "Do you prefer watching television to going out with people?", labels: o_life_scale, required: false},
 	{name: "o-life_34", prompt: "Do you consider yourself to be pretty much an average sort of person?", labels: o_life_scale, required: false},
 	{name: "o-life_35", prompt: "Would you like other people to be afraid of you?", labels: o_life_scale, required: false},
 	{name: "o-life_36", prompt: "Do you often feel the impulse to spend money which you know you can't afford?", labels: o_life_scale, required: false},
 	{name: "o-life_37", prompt: "Are you usually in an average kind of mood, not too high and not too low?", labels: o_life_scale, required: false},
 	{name: "o-life_38", prompt: "Do you at times have an urge to do something harmful or shocking?", labels: o_life_scale, required: false},
 	{name: "o-life_39", prompt: "Do you stop to think things over before doing anything?", labels: o_life_scale, required: false},
 	{name: "o-life_40", prompt: "Do you often overindulge in alcohol or food?", labels: o_life_scale, required: false},
 	{name: "o-life_41", prompt: "Do you ever have the urge to break or smash things?", labels: o_life_scale, required: false},
 	{name: "o-life_42", prompt: "Have you ever felt the urge to injure yourself?", labels: o_life_scale, required: false},
 	{name: "o-life_43", prompt: "Do you often feel like doing the opposite of what other people suggest even though you know they are right?", labels: o_life_scale, required: false}
],

 'asrs': [
	{name: "asrs_01", prompt: "How often do you make careless mistakes when you have to work on a boring or difficult project?", labels: asrs_scale, required: false},
 	{name: "asrs_02", prompt: "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?", labels: asrs_scale, required: false},
 	{name: "asrs_03", prompt: "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?", labels: asrs_scale, required: false},
 	{name: "asrs_04", prompt: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?", labels: asrs_scale, required: false},
 	{name: "asrs_05", prompt: "How often do you have difficulty getting things in order when you have to do a task that requires organization?", labels: asrs_scale, required: false},
 	{name: "asrs_06", prompt: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?", labels: asrs_scale, required: false},
 	{name: "asrs_07", prompt: "How often do you misplace or have difficulty finding things at home or at work?", labels: asrs_scale, required: false},
 	{name: "asrs_08", prompt: "How often are you distracted by activity or noise around you?", labels: asrs_scale, required: false},
 	{name: "asrs_09", prompt: "How often do you have problems remembering appointments or obligations?", labels: asrs_scale, required: false},
 	{name: "asrs_10", prompt: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?", labels: asrs_scale, required: false},
 	{name: "asrs_11", prompt: "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?", labels: asrs_scale, required: false},
 	{name: "asrs_12", prompt: "How often do you feel restless or fidgety?", labels: asrs_scale, required: false},
 	{name: "asrs_13", prompt: "How often do you have difficulty unwinding and relaxing when you have time to yourself?", labels: asrs_scale, required: false},
 	{name: "asrs_14", prompt: "How often do you feel overly active and compelled to do things, like you were driven by a motor?", labels: asrs_scale, required: false},
 	{name: "asrs_15", prompt: "How often do you find yourself talking too much when you are in social situations?", labels: asrs_scale, required: false},
 	{name: "asrs_16", prompt: "When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?", labels: asrs_scale, required: false},
 	{name: "asrs_17", prompt: "How often do you have difficulty waiting your turn in situations when turn-taking is required?", labels: asrs_scale, required: false},
 	{name: "asrs_18", prompt: "How often do you interrupt others when they are busy?", labels: asrs_scale, required: false}
],

 'ftnd': [
	{name: "ftnd_01", prompt: "How soon after waking do you smoke your first  cigarette?", labels: ftnd_1_scale, required: false},
 	{name: "ftnd_02", prompt: "Do you find it difficult to refrain from smoking in places where it is forbidden? e.g. Church, Library, etc.", labels: ftnd_2_scale, required: false},
 	{name: "ftnd_03", prompt: "Which cigarette would you hate to give up?", labels: ftnd_3_scale, required: false},
 	{name: "ftnd_04", prompt: "How many cigarettes a day do you smoke?", labels: ftnd_4_scale, required: false},
 	{name: "ftnd_05", prompt: "Do you smoke more frequently in the morning?", labels: ftnd_2_scale, required: false},
 	{name: "ftnd_06", prompt: "Do you smoke even if you are sick in bed most of the day?", labels: ftnd_2_scale, required: false}
],

 'ptq': [
	{name: "ptq_01", prompt: "The same thoughts keep going through my mind again and again.", labels: ptq_scale, required: false},
 	{name: "ptq_02", prompt: "Thoughts intrude into my mind.", labels: ptq_scale, required: false},
 	{name: "ptq_03", prompt: "I can’t stop dwelling on them.", labels: ptq_scale, required: false},
 	{name: "ptq_04", prompt: "I think about many problems without solving any of them.", labels: ptq_scale, required: false},
 	{name: "ptq_05", prompt: "I can’t do anything else while thinking about my problems.", labels: ptq_scale, required: false},
 	{name: "ptq_06", prompt: "My thoughts repeat themselves.", labels: ptq_scale, required: false},
 	{name: "ptq_07", prompt: "Thoughts come to my mind without me wanting them to.", labels: ptq_scale, required: false},
 	{name: "ptq_08", prompt: "I get stuck on certain issues and can’t move on.", labels: ptq_scale, required: false},
 	{name: "ptq_09", prompt: "I keep asking myself questions without finding an answer.", labels: ptq_scale, required: false},
 	{name: "ptq_10", prompt: "My thoughts prevent me from focusing on other things.", labels: ptq_scale, required: false},
 	{name: "ptq_11", prompt: "I keep thinking about the same issue all the time.", labels: ptq_scale, required: false},
 	{name: "ptq_12", prompt: "Thoughts just pop into my mind.", labels: ptq_scale, required: false},
 	{name: "ptq_13", prompt: "I feel driven to continue dwelling on the same issue.", labels: ptq_scale, required: false},
 	{name: "ptq_14", prompt: "My thoughts are not much help to me.", labels: ptq_scale, required: false},
 	{name: "ptq_15", prompt: "My thoughts take up all my attention.", labels: ptq_scale, required: false}
],

 'dem': [
	{name: "dem_01", prompt: "What gender do you identify as?", labels: dem_1_scale, required: false},
 	{name: "dem_02", prompt: "Please specify your ethnicity.", labels: dem_2_scale, required: false},
 	{name: "dem_03", prompt: "Please specify your race.", labels: dem_3_scale, required: false},
 	{name: "dem_04", prompt: "Do you have a diagnosis of a learning or attention disorder?", labels: dem_4_scale, required: false},
 	{name: "dem_05", prompt: "Do you have a diagnosis of a neurological disorder?", labels: dem_4_scale, required: false},
 	{name: "dem_06", prompt: "Do you or have you ever been diagnosed with a mental health disorder?", labels: dem_4_scale, required: false},
 	{name: "dem_07", prompt: "Have you ever had a traumatic head injury?", labels: dem_4_scale, required: false}
],

 'recontact': [
	{name: "recontact_01", prompt: "We may wish to contact you in the future to see if you would be interested in participating in another research study. Please indicate below if you are willing to be contacted about any future research studies. ", labels: recontact_scale, required: false}
] 
};