
/*
   Responsive voice plugin code that reads the history.html page out loud.
   It adds the pause/play button and counts number of clicks.
   Reads out only sections chosen by me that's why the code is so lengthy.
*/

var clickCount=0;
  function reading() { 
     clickCount++;
	 if(clickCount == 2) {
	 $('#reading').css('background-image', 'url("icons/speaker.png")');
	     $("#pause").fadeOut(500);	 
	     responsiveVoice.cancel();
		 clickCount=0;
		 $('#pause').css('background-image', 'url("icons/pause-outlined-big-symbol.png")');
		 clickCount2=1;
	 } else {
	 $("#pause").fadeIn(500);
	 $('#reading').css('background-image', 'url("icons/mute.png")');
     var text = document.getElementById("schmidt"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("lesson-1"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("web-lesson"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("leeread"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("2ndpar"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("table"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("table-explanation"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("lesson-2"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("table-explanation-one"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("table-explanation-two"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("interneth2"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("3rdpar"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("4thpar"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("5thpar"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("60block"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("lesson-3"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("protocol"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("protocols"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("par6th"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("7thpar"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("tcp"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("routing"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("iprouting"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("protocol2"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("delivery"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("par8th"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	  
	 text = document.getElementById("par9th"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 }

}

/*
   Responsive voice plugin used to stop the text-to-speech audio.
   Changes the pause/play button's image.
*/

 var clickCount2=1;
 
function pause(){

     if(clickCount2 == 1) {
	     $('#pause').css('background-image', 'url("icons/play.png ")');
         responsiveVoice.pause();
		 clickCount2++;
		 }
     else {
	     $('#pause').css('background-image', 'url("icons/pause-outlined-big-symbol.png ")');
	     responsiveVoice.resume();
		 clickCount2 = 1;
	 }
 
}

/*
   When the user decides to leave the page, text-to-speech needs to completely terminate
   and triggered variabls reset.
*/

 $(window).bind('beforeunload', function(){
      clickCount=0;
	  clickCount2=0;
	  clickCountIndex=0;
	  clickCountTest=0;
	  clickCountCss=0;
      responsiveVoice.cancel();
    });
	
/*
   On hover changes the color and text font of buttons that lead to different lessons.
*/

	 $(document).ready(function(){
         $("#lesson1, #lesson2, #lesson3").hover(function(){
         $(this).css("background-color", "rgb(0, 102, 0)");
		 $(this).css("color", "white");
         }, function(){
         $(this).css("background-color", "white");
		 $(this).css("color", "#323c46");
         });
         });

/*
   Finds where item needed is placed and does a jQuery slide down
   transition depending by how much the user has scrolle down.
*/
		 
		  
		 window.addEventListener("scroll",function() {
		 var internetScroll = $('.internetscroll').offset().top;
         if(window.scrollY > internetScroll-600) {
         $('.internetscroll').slideDown(1500);
         }
         else {
         $('.internetscroll').slideUp(1000);
         }
        },false);
		
		
		window.addEventListener("scroll",function() { 
		var delivery = $('#delivery').offset().top; 
         if(window.scrollY > delivery-600) {
         $('#delivery').slideDown(1500);
         }
         else {
         $('#delivery').slideUp(1000);
         }
        },false);
	
/*
   Takes the positions of three different lesson anouncing divs and when user scrolls past them,
   they get fixed on top of the page. 
   The code is lengthy, because others need to be disabled when user scrolls down a particular one.
*/	
      if($('#lesson1menu').length && $('#lesson2menu').length && $('#lesson3menu').length){
	         var fixLesson1 = $('#lesson1menu').offset().top; 
	         var fixLesson2 = $('#lesson2menu').offset().top; 
	         var fixLesson3 = $('#lesson3menu').offset().top; 
	 
         // get initial position of the element
         var x=0;
		 var y=0;
		 var z=0
         $(window).scroll(function() {                  // assign scroll event listener
            
			 
            var currentScroll = $(window).scrollTop(); // get current position
            if (currentScroll >= fixLesson1 && currentScroll < fixLesson2) {
				// apply position: fixed if you
                 $('#lesson1menu').css({ 			 // scroll to that element or below it
                 position: 'fixed',
                 top: '50px',
                 left: '0',
				'box-shadow': '0px 10px 10px #888',
                '-moz-box-shadow' : '0px 10px 10px #888',
                '-webkit-box-shadow' : '0px 10px 10px #888'

                 				 
             });
			 y=1;
			 if(x==1) {
			    $('#lesson2menu').css({                      // if you scroll above it
                position: 'static',
				'box-shadow': 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none'
                });
				x=0;
			 }
			 if(z==1) {
			    $('#lesson3menu').css({                      // if you scroll above it
                position: 'static',
				'box-shadow': 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none'
                });
				z=0;
			 }
            } 
			
			if(currentScroll < fixLesson1){
			     $('#lesson1menu').css({                      // if you scroll above it
                  position: 'static',
                  'box-shadow': 'none',
                  '-moz-box-shadow' : 'none',
                  '-webkit-box-shadow' : 'none'				  
                 });
				 
				 $('#lesson2menu').css({                      // if you scroll above it
                  position: 'static',
                  'box-shadow': 'none',
                  '-moz-box-shadow' : 'none',
                  '-webkit-box-shadow' : 'none'				  
                 });
				 
				 $('#lesson3menu').css({                      // if you scroll above it
                  position: 'static',
                  'box-shadow': 'none',
                  '-moz-box-shadow' : 'none',
                  '-webkit-box-shadow' : 'none'				  
                 });
			
			}
		
			if(currentScroll >= fixLesson2){                                   // apply position: static
                 if(y==1) {
				  $('#lesson1menu').css({                      // if you scroll above it
                  position: 'static',
                  'box-shadow': 'none',
                  '-moz-box-shadow' : 'none',
                  '-webkit-box-shadow' : 'none'				  
                 });
				 y=0;
				 }
				 
				if(z==1) {
			    $('#lesson3menu').css({                      // if you scroll above it
                position: 'static',
				'box-shadow': 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none'
                });
				z=0;
			 }
						     // get current position

                      // apply position: fixed if you
				 
				 $('#lesson2menu').css({                      // scroll to that element or below it
                 position: 'fixed',
                 top: '50px',
                 left: '0',
				 'box-shadow': '0px 10px 10px #888',
                 '-moz-box-shadow' : '0px 10px 10px #888',
                 '-webkit-box-shadow' : '0px 10px 10px #888'
                });
				x=1;
			  
            }
			
			if(currentScroll >= fixLesson3){                                   // apply position: static
                 if(y==1) {
				  $('#lesson1menu').css({                      // if you scroll above it
                  position: 'static',
                  'box-shadow': 'none',
                  '-moz-box-shadow' : 'none',
                  '-webkit-box-shadow' : 'none'				  
                 });
				 y=0;
				 }
				 
			    if(x==1) {
			    $('#lesson2menu').css({                      // if you scroll above it
                position: 'static',
				'box-shadow': 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none'
                });
				x=0;
			 }
						     // get current position

                      // apply position: fixed if you
				 
				 $('#lesson3menu').css({                      // scroll to that element or below it
                 position: 'fixed',
                 top: '50px',
                 left: '0',
				'box-shadow': '0px 10px 10px #888',
                '-moz-box-shadow' : '0px 10px 10px #888',
                '-webkit-box-shadow' : '0px 10px 10px #888'
                });
				z=1;
			  
            }
            
           
});
}

/*
   Responsive voice plugin code that reads the index.html page out loud.
   It adds the pause/play button and counts number of clicks.
   Reads out only sections chosen by me that's why the code is so lengthy.
*/

 var clickCountIndex=1;
  function readingIndex() { 
     
	 if(clickCountIndex == 2) {
	 $('#readingIndex').css('background-image', 'url("icons/speaker.png")');
	     $("#pause").fadeOut(500);		
	     responsiveVoice.cancel();
		 clickCountIndex=1; 
		 $('#pause').css('background-image', 'url("icons/pause-outlined-big-symbol.png")');
		 clickCount2=1;
	 } else {
	 $("#pause").fadeIn(500);
	 $('#readingIndex').css('background-image', 'url("icons/mute.png")');
	 clickCountIndex++;
     var text = document.getElementById("rewind"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("indexRow"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 }

};


/*
   Adds form's results to array and trims down user's answer, also sets it to lowercase, then checks it
   with the value in the array and generates a score, shows it visually to user through a fade in animation.
*/

function calculate() {
		     
		   var result = 0;
			 
		   var answers = ["packet", "postcard", "address", "cables", "inanimate",
			 "hypertext", "net", "memex", "janet", "pipe", "worldwideweb", "cern", 
			 "universities", "websites", "rendering", "academic", "commercial", 
             "social", "creative", "urban", "cloud", "semantic", "machinery", "hudson",
             "wallstreet", "stock", "algorithmic", "opposite" 		 
			 ];
			 
           var i;
    
			 for(i=0; i<answers.length; i++){
			     var x = document.forms["test1"][answers[i]].value;
			     x = x.trim();
			     x = x.toLowerCase();
			     x = x.replace(/ +/g, "");
			     if (x == answers[i])
				     result += 3.5;	
					 		         
			 }
			 
		 result = Math.round(result);
		 
		 if(result >= 95) {
		     result = 100;
		 }
		 
		 document.getElementById("text2").innerHTML = result + "%";
		 $("#div1").fadeIn(1500);
		 $("#div1").fadeOut(1500);
		 return false;
      
         }

/*
   Does the same animating to the second form.
*/
		 
	  function calculate2() {
		     
		    var result2 = 0;
		   
		   var ids = ['ssh', 'physicalnetwork', 'networkutility', 'best-effort-delivery', 
		   'connection', 'corrupted', 
		   'sequence', 'lost', 'drop']; 
	 
		   var x;
         	  
		    for(x=0; x<ids.length; x++){ 
		      var p = document.forms['test2'][ids[x]].value;
			  p = p.trim();
			  p = p.toLowerCase();
			  p = p.replace(/ +/g, "");

			  if (p == ids[x]){
				 result2 += 10;
				 
			  }
			  
		   } 
		  
		  var y = document.getElementById("correct");
                     if(y.checked === true) {
		             result2 += 10;
		             }   
					 
		  
		 result = Math.round(result2);
		 
		 document.getElementById("text3").innerHTML = result2 + "%";
		 $("#div2").fadeIn(1500);
		 $("#div2").fadeOut(1500);
		 return false;
      
         }

/*
   Does the same animating to css/html's section first form.
*/
		 
		 function calculate3() {
		  
		   var result3 = 0;
		   
		   var ids = ['link', 'form', 'line', 'mandatory', 
		   'printed', 'consistent', 'editing', 'tags',
		   'render', 'htmlversion', 'header', 'body']; 
	 
		   var l;
         	   
		    for(l=0; l<ids.length; l++){ 
		      var p = document.forms['test3'][ids[l]].value;
			  p = p.trim();
			  p = p.toLowerCase();
			  p = p.replace(/ +/g, "");

			  if (p == ids[l]){
				 result3 += 8.3;
				 
			  }
			  
		   }
		  
		  var y = document.getElementById("correct2");
                     if(y.checked === true) {
		             result3 += 8.3;
		             }   
					  
		  
		 result3 = Math.round(result3);
		
		 document.getElementById("text4").innerHTML = result3 + "%";
		 $("#div3").fadeIn(1500);
		 $("#div3").fadeOut(1500); 
		 return false;
      
         }
		  
		  var clickCountTest=0;
 
/*
   Reads out test.html material.
*/
 
  function readingTest() { 
     clickCountTest++;
	 if(clickCountTest == 2) {
	 $('#readingTest').css('background-image', 'url("icons/speaker.png")');
	     $("#pause").fadeOut(500);	 
	     responsiveVoice.cancel();
		 clickCountTest=0;
		 $('#pause').css('background-image', 'url("icons/pause-outlined-big-symbol.png ")');
		 clickCount2=1;
	 } else {
	 $("#pause").fadeIn(500);
	 $('#readingTest').css('background-image', 'url("icons/mute.png")');
     
	 var text = document.getElementById("history-1"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 var text = document.getElementById("history-test1"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("history-test2"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
     
	 text = document.getElementById("cssContainer"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);	 
	
	 }

}

/*
   Reads out htmlcss.html page's selected material.
*/

 var clickCountCss=0;
  function readingCss() { 
     clickCountCss++;
	 if(clickCountCss == 2) {
	 $('#readingCss').css('background-image', 'url("icons/speaker.png")');
	     $("#pause").fadeOut(500);	 
	     responsiveVoice.cancel();
		 clickCountCss=0;
		 $('#pause').css('background-image', 'url("icons/pause-outlined-big-symbol.png")');
		 clickCount2=1;
	 } else {
	 $("#pause").fadeIn(500);
	 $('#readingCss').css('background-image', 'url("icons/mute.png")');
     
	 var text = document.getElementById("internetContainer"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("lesson1css"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("web-lesson"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("lee"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("2ndpar"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("3rdpar"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("table"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("table-explanation1"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("lesson2css"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 
	 text = document.getElementById("table-explanation"),
     htmlContent = text.innerHTML,
     textContent = text.textContent;
     responsiveVoice.speak(textContent);
	 

}
}

/*
   In htmlcss.html changes the background-color and text color on hover of the buttons leading 
   to different sections (lesson 1, lesson 2).
*/

 $(document).ready(function(){
         $("#lesson1, #lesson2").hover(function(){
         $(this).css("background-color", "rgb(0, 102, 0)");
		 $(this).css("color", "white");
         }, function(){
         $(this).css("background-color", "white");
		 $(this).css("color", "#323c46");
         });
         });
       