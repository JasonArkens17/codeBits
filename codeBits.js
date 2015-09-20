//These are just a bunch of random code bits I tooled around with for fun! 
----------------------------------------------------------------------------

//below is an array of Cities that I want to display on the page. 
   var cities = ["Seattle","San Francisco","Dallas"];

   //below appends all the information
   var to_be_run_on_server_response = function(weather_data){
     $('#container').append($('<div id="current-temp">').text("Current temperature in "+weather_data.name+" is: " + weather_data.main.temp));
     $('#container').append($('<div id="high">').text("High of today is: " +weather_data.main.temp_max));
     $('#container').append($('<div id="low">').text("Low of today is : " + weather_data.main.temp_min));
     $('#container').append($('<div id="conditions">').text("Condition for today is : " + weather_data.weather[0].main));
     $('#container').append($('<div id="wind-speed">').text("Wind speed for today is : " + weather_data.wind.speed + " MPH"));
     $('#container').append($('<div id="sunrise">').text(new Date(weather_data.sys.sunrise*1000)+" is Sunrise :)"));
     $('#container').append($('<div id="sunset">').text(new Date(weather_data.sys.sunset*1000)+" is Sunset :)"));
   }

   //this retrieves data and if successfull, runs the to_be_run_on_server_response
   $.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial').success(to_be_run_on_server_response);

   //this code waits for the click on an 'a' element, then prevents it from reloading the webpage, and it empties out the contents of the page, then alerts the user, then get the API information to fill out based on the 'a' element's id attribute ($(this).attr('id')).
   $('a').click(function(event) {
     event.preventDefault();
     $('#container').empty();
     //alert("Weather is currently getting fetched....");
     $.get('http://api.openweathermap.org/data/2.5/weather?q='+$(this).attr('id')+'&mode=json&units=imperial').success(to_be_run_on_server_response);
   });


/*   
   $('#dallas').click(function(event) {
     event.preventDefault();
     $('#container').empty();
     alert("Weather is currently getting fetched....");
     $.get('http://api.openweathermap.org/data/2.5/weather?q=dallas&mode=json&units=imperial').success(to_be_run_on_server_response);
   });
//code not needed anymore due to refractoring.
*/

----------------------------------------------------------------------------

	//Creating an empty array to push my final post into
	var posts = []

	//Created a functional Object to call info from 
var post = {
  url: 'http://jsonplaceholder.typicode.com/posts/',
  $el: $('<div class="post">').appendTo($('body')),
  // Initialize function taking the post ID numnber as the input
  initialize: function(id){
    // adding the post ID to the previously created Jquery div
    this.$el.attr('id', id)
    this.url += id
    var thisPost = this // wtf? http://stackoverflow.com/questions/4886632/what-does-var-that-this-mean-in-javascript :)
    $.get( this.url, function(data){
       console.log(this) // window
       thisPost.attributes = data
       thisPost.render()
     })
     posts.push(this)
  },
  // finally the render function which takes the above code and renders the $el onto the page via Jquery 
  render: function(){
    this.$el.append([
      $('<div>').addClass('title').text(this.attributes.title),
      $('<div>').addClass('body').text(this.attributes.body)
    ])
  }
}

post.initialize(4)

----------------------------------------------------------------------------

<script type="text/javascript">
$('body').prepend('<div id="container"></div>')

    var numP;
    numP = parseInt(prompt("How many Pokemons do you want?"));
    //this takes the string from the prompt and make it an integer
    while (numP > 152 || numP < 1) {
      numP = parseInt(prompt("Sorry, please enter a number between 1 and 152. How many Pokemons do you want?"));
    } 
    
    for (i=1; i<numP+1; i++) {
      var getRandom_height = Math.floor(Math.random()*(window.innerHeight-100));
      //alert("Height is " + window.innerHeight + ". Random height is " + getRandom_height);
      var getRandom_width = Math.floor(Math.random()*(window.innerWidth-100));
      //-100 off sets the scatter. It is closer to the center so all the pokemons can show.
      $('#container').append('<img class="' + 'pokemon' + getPokemonNumber(i) + '" src="" alt="">');
      $('.'+ 'pokemon' + getPokemonNumber(i)).attr('src','http://www.serebii.net/battletrozei/pokemon/' + getPokemonNumber(i) + '.png').css('position','fixed').css('top',getRandom_height).css('left',getRandom_width);

    }

    function getPokemonNumber(number) {
      //this function turns numbers into 3 digit number. For example, 0 will turn into 000. 

      //convert number into a string by number.toString()
      var strNum = number.toString();

      //if number is greater than 99,
      if (number > 99) {
        return strNum;
      } else if (number > 9) {
        return "0"+strNum;
      } else {
        return "00" + strNum;
      }
    return;
    }

----------------------------------------------------------------------------


//Fun way to play with Fizz Buzz! 

<html>
<head>
	<title>Function exercise 7</title>
	<style type="text/css">
	body {
		background-color:lightslategrey;
	}
	#target {

	}
	#fizzBuzz{
		color: red;
		text-align: center;
		font-size: 250%;
	}
	#buzz{
		color: blue;
		text-align: right;
		font-size: 200%;
	}
	#fizz{
		color: green;
		font-size: 150%;
	}
	#num{
		font-size: 200%;
	}
	</style>
</head>
<body>

<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script type="text/javascript">
	var this_that = function (str1, str2, count_up_to, num1, num2) {

	var result = ''
	var number = 1 
	while (number <= count_up_to) {
		if (number % num1 === 0 && number % num2 === 0) {
			result = result + $('body').append('<div id=fizzBuzz>' + str1 + ' ' + str2 + '</div>')
		}
		else if (number % num1 === 0){
			result = result + $('body').append('<div id=fizz>' + str1 + '</div>')
		}
		else if (number % num2 === 0){
			result = result + $('body').append('<div id=buzz>' + str2 + '</div>')
		}
		else {
			result = result + $('body').append('<div id=num>' + number + '</div>')
		}
		
		number++
	}
}
</script>
</body>
</html>

----------------------------------------------------------------------------

function answer_collector (funcArray){
  var results_array = [];
  for (var i = 0 ; i < funcArray.length; i++){
    results_array.push(funcArray[i]());
  }
  return results_array;
	
	var fn1 = function () {
  return "this should be the first value in results array"
}

answer_collector([fn1, function(){ return "this should be the second value in results array" }])

----------------------------------------------------------------------------

var person = {
  name: 'Jason',
  location: 'Oakland!',
  age: 29,
  hobbies: ['working', 'partying', 'surfing', 'traveling', 'working out', 'learing'],
  pet: {
    name: "Tommy",
    hobbies: [ "Kicking ass and taking names!", "Being smart as fuck" ]
  },
  party: function(){
    console.log('drink, smoke, take drugs!')
  }
}

person.work = function() {
  console.log('Hey, Im ' + this.name +  ' I know I am already ' + this.age + ', but I am very certain I can become a GREAT software engineer, here in ' + this.location + '!')
}

person.workout = function() {
  console.log('Although I love ' + this.hobbies[0] + ' and ' + this.hobbies[2]+ ' I also love working out!')
}

person.float_through_life_on_autopilot = function(){
  console.log(this.work())
  console.log(this.party())
  console.log(this.workout())
}

var dog = {
  name: 'Tommy', 
  location: 'Oakland', 
  favorite_food: 'kibble',
  hungry: true,
  party: party_fn,
  eat: eat_fn,
  park: go_to_park_fn,
};

var party_fn = function() {
    console.log(this.name + ' dances his ass off!');
  };

var eat_fn = function(){
    console.log(this.name + ' loves ' + this.favorite_food);
    this.hungry = false; 
  };
var go_to_park_fn = function(){
    console.log(this.name + ' is at the park in ' + this.location);
      this.hungry = true;
  };

  var fetch_adder = function(dog){
    dog.fetch = function{
      this.hungry = true,
      console.log(this.name + ' runs super fast and loves to fetch!'),

    }
  };

----------------------------------------------------------------------------

<html>
<head>
	<title>functions excersise 2</title>
</head>
<body>
	
	<p></p>

<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script type="text/javascript">
	function get_sentence () {
		var x = Math.floor(Math.random() * 15)
			if (x <= 5) {
				return 'This is string number 1. It should only appear if x was less then or equal to 5!'
			} else if (x <=10) {
				return ' This is super string numnber 2! It should ony appear if x was greater then 5 but less then or equal to 10!'
			} else {
				return 'This is string 3! Its the final option for my random function. It means that x was greater then 10!'
			}
	}
	var counter = 0
		while (counter <= 10) {
			console.log (get_sentence())
			counter++
		}
	// This was the code I took out in the excersise. var new_sentence = get_sentence()
	$('p').append(get_sentence())
</script>
</body>
</html>

----------------------------------------------------------------------------

<script type="text/javascript">
	
	function log_and_return() {
		console.log(arguments)
		return arguments
	}
	
	var returned_values = log_and_return()

	log_and_return(returned_values)

</script>

----------------------------------------------------------------------------

var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are"
	var scrambled_array = scrambled_poem.split(' ')
	var unscrambled_array = []
	
	while (scrambled_array.length > 0) {
		 //scrambled_array.shift(unscrambled_array)
		 // scrambled_array.pop(unscrambled_array)
		 unscrambled_array.push(scrambled_array.shift())
		 unscrambled_array.push(scrambled_array.pop())
		
	}

----------------------------------------------------------------------------

var reverser = function(array) {
 var reversed_array = [];
 for (var i=0; i < array.length; i++) {
   reversed_array.unshift(array[i]);
 }
 return reversed_array;
}
​
console.log(Reverser([0,1,2,3]))	

----------------------------------------------------------------------------

<html>
<head>
	<title>functions excersise 5</title>
	<style type="text/css">
	#output {
		text-align: center;

	}
	#noun {
		color: red;
	}
	#adjective {
		color: blue;
	}
	#verb {
		color: green;
	}
	#adverb {
		color: yellow;
	}
	</style>
</head>
<body>
<div id="output"></div>





<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script type="text/javascript">
	
	var string_printer = function (input) { 
		return $('#output').text(input)
	}
	var funny_sentence = function (noun, adjective, verb, adverb) {
		return $('#output').append('<span id="noun"> ' + noun + ' </span> ', ' <span id="adjective"> ' + adjective + ' </span> ', ' <span id="verb">' + verb + ' </span> ', ' <span id="adverb"> ' + adverb + '</span>')
		}
		funny_sentence('Barn', 'alarmed', 'bleed', 'Firmly')
		funny_sentence('Jason', 'compassionate', 'deny', 'Wearily')
		funny_sentence('Hack Reactor', 'glamorous', 'hide', 'Brutally')
		funny_sentence('Car', 'impolite', 'joke', 'Sloppily')
		funny_sentence('Deck', 'terrific', 'pelt', 'Wickedly')
	
</script>
</body>
</html>

----------------------------------------------------------------------------

<script type="text/javascript">
	var count_by_n = function (count_by, count_up_to) {
		var results = 0
		while (results < count_up_to) {
			results += count_by
			console.log(results++)
			
		}
		
	}

</script>
<script type="text/javascript">
	function fact(n) { 
	result = 1 
	while(n > 1) { 
		result *= n; 
			n--; 
	} 
		return result 
} 
</script>

----------------------------------------------------------------------------

<html>
<head>
  <title>HTML Document</title>


</head>
<body>
<h1>This is my PAGE!</h1>
<p>Here is some random text!!</p>

  	<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
	<script type="text/javascript">
	var answer
  while(!answer) {
    answer = prompt("Pick a color (red, green or blue)");
    if (answer === "green" || answer === "blue") {
      break;
    } else if (answer === "red") {
      answer = "salmon"
    } else {
      answer = false;
    }
  }

  $('body').css('background-color', answer);
  $('p').css('color', 'light' + answer);
  $('h1').css('color', 'dark' + answer);
 

</script>

 
</body>
</html>

----------------------------------------------------------------------------

//Random Event function for button press 
<html>
<head>
	<title>events test</title>
	<style type="text/css">
	#target{

	}
	</style>
</head>
<body>
<div id="target"><button type="button">Click Me!</button></div>




<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script type="text/javascript">
// This is my random color generator
var randomColor = '#' + Math.random().toString(16).slice(2, 8)

document.querySelector('#target').addEventListener('click', function() {
  return $('body').append('<div>Beep</div>').css('background-color', randomColor) }
  )
</script>
</body>
</html>

----------------------------------------------------------------------------

// This is a funny page that again deals with button events and funny images. 

<html>
<head>
	<title>events test</title>
	<style type="text/css">
	#money{

	}
	#oprah{

	}
	#opera{

	}
	</style>
</head>
<body>
<div id="money"><button type="button">Click Me!</button></div>
<div id="oprah"><button type="button">Click Me!</button></div>
<div id="opera"><button type="button">Click Me!</button></div>




<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script type="text/javascript">
$('#money').click(function(){
  $('#money').show().append('<img src="http://www.alamomoneymart.com/dollar-bills-fan.png">')
})
$('#oprah').click(function(){
	$('#money').show().append('<img src="https://pbs.twimg.com/profile_images/517424562279944192/HPYrGBlP.jpeg">')
})
$('#opera').click(function(){
	$('#opera').show().append('<img src="http://www.makeitcrafty.com/images/detailed/1/soprano-opera-singer.jpg">')
})

</script>
</body>
</html>

----------------------------------------------------------------------------

<html>
<head>
	<title>events test</title>
	<style type="text/css">
	#target{

	}
	.highlighted{
		font-size: 300%;
		text-align: center;
		color: red;
		background-color: black;

	}
	#magic {
		text-align: center;
	}

	</style>
</head>
<body>
<div id="target">Random text here for my highlight test</div>
<div id='magic'><img src='https://upload.wikimedia.org/wikipedia/commons/2/2e/Margaret_Hamilton.gif'></div>




<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script type="text/javascript">
$('#target').on('mouseover', function(){
  $('#target').addClass('highlighted')
})
$('#target').on('mouseleave', function(){
  $('#target').removeClass('highlighted')
})
$('#magic').hover(function(){
	$('#magic').hide()
})
$('#magic').hover(function(){
	$('#magic').show("slow")
})
</script>
</body>
</html>

----------------------------------------------------------------------------