function makeLandscape(){
	document.getElementById("textdisplay").style.maxWidth = "80vw";
	document.getElementById("textdisplay").style.width = "80vw";
	document.getElementById("textdisplay").style.minHeight = '40vh';
	document.getElementById("textdisplay").style.justifyContent = "space_between";
	document.getElementById("textdisplay").style.fontSize = "25px";
	document.getElementById("title").style.fontSize = "50px";
	document.getElementById("alphabet").style.fontSize = "75px";
	document.getElementById("playagain").style.fontSize = "20px";
	document.getElementById("retryimg").style.height = "20px";
	document.getElementById("retryimg").style.width = "20px";
	return;
}

function makePortrait(){
	document.getElementById("textdisplay").style.maxWidth = "80vw";
	document.getElementById("textdisplay").style.width = "80vw";
	document.getElementById("textdisplay").style.justifyContent = "space_between";
	document.getElementById("textdisplay").style.fontSize = "75px";
	document.getElementById("player").style.fontSize = "60px";
	document.getElementById("title").style.fontSize = "100px";
	document.getElementById("alphabet").style.fontSize = "125px";
	document.getElementById("playagain").style.fontSize = "30px";
	document.getElementById("retryimg").style.height = "30px";
	document.getElementById("retryimg").style.width = "30px";
	document.getElementById("correct").style.fontSize = "60px";
	document.getElementById("begin").style.fontSize = "60px";
	document.getElementById("nextturn").style.fontSize = "60px";
	document.getElementById("incorrect").style.fontSize = "60px";
	document.getElementById("correct").style.minWidth = "35vw";
	document.getElementById("begin").style.minWidth = "35vw";
	document.getElementById("nextturn").style.minWidth = "40vw";
	document.getElementById("incorrect").style.minWidth = "35vw";
	document.getElementById("timerbar").style.height = "80px";
	document.getElementById("timerbar").style.width = "70vw";
	document.getElementById("timerbar").style.borderRadius = "30px";
	document.getElementById("timerbarprogress").style.borderRadius = "30px";
	document.getElementById("count").style.fontSize = "40px";
	document.getElementById("type").style.fontSize = "80%";
	document.getElementById("description").style.fontSize = "80%";
	document.getElementById("begin").style.borderRadius = "20px";
	document.getElementById("correct").style.borderRadius = "20px";
	document.getElementById("incorrect").style.borderRadius = "20px";
	document.getElementById("nextturn").style.borderRadius = "20px";
	document.getElementById("textdisplay").style.borderRadius = "80px";
	$(".labelwrapper").css("font-size", "60%");
	$(".slider").css("height", "40px");
	$('input[type=range]').addClass('mobileslider');
	$(".checkbox").css({"height": "40px", "width": "40px"});
	return;
}

var correct_audio = new Audio('correct.mp3');
correct_audio.loop = false;
var incorrect_audio = new Audio('incorrect.mp3');
incorrect_audio.loop = false;

function correct(){
	stopCounter();
	document.getElementById("correct").style.backgroundColor = "#49c973";
	document.getElementById("correct").style.borderColor = "#339654";
	hideButtons();
	document.getElementById("buttonspace").style.marginBottom = "0px";
	document.getElementById("type").style.display = "inline-block";
	document.getElementById("type").style.color = "#49c973";
	var random_reward = rewards[Math.floor(Math.random() * rewards.length)];
	document.getElementById("type").innerHTML=random_reward;
	document.getElementById("nextturn").style.display = "inline-block";
	correct_audio.load();
	correct_audio.play();
}

function incorrect(){
	stopCounter();
	document.getElementById("incorrect").style.backgroundColor = "#ff5c5c"
	document.getElementById("incorrect").style.borderColor = "#9c3535";
	hideButtons();
	document.getElementById("buttonspace").style.marginBottom = "0px";
	document.getElementById("type").style.display = "inline-block";
	document.getElementById("type").style.color = "#ff5c5c";
	var random_punishment = punishments[Math.floor(Math.random() * punishments.length)];
	document.getElementById("type").innerHTML=random_punishment;
	document.getElementById("nextturn").style.display = "inline-block";
	incorrect_audio.load();
	incorrect_audio.play();
}

var timer;

function updateCounter(){
	var time = document.getElementById("count").innerHTML;
	if (time == 1){
		stopCounter();
		return;
	}
	document.getElementById("count").innerHTML = time - 1;
}

function stopCounter(){
	document.getElementById("timerbarprogress").style.width = 0;
	document.getElementById("timerbar").style.display = "none";
	clearInterval(timer);
}

function showButtons(){
	document.getElementById("correct").style.display = "inline-block";
	document.getElementById("incorrect").style.display = "inline-block";
}

function hideButtons(){
	document.getElementById("correct").style.display = "none";
	document.getElementById("incorrect").style.display = "none";
}

var players = 1;
var currentPlayerDiv = document.getElementById("player1");
var currentPlayer;
var playerList = new Array();

function addPlayer(){
    var clone = currentPlayerDiv.cloneNode(true);
    clone.id = "player" + ++players;
	clone.value = "";
    currentPlayerDiv.parentNode.insertBefore(clone, currentPlayerDiv.nextSibling);
	currentPlayerDiv = clone;
}

function createPlayerList(){
	var i;
	for (i = 1; i < (players + 1); i++){
		var player = document.getElementById("player" + i);
		playerList.push(player.value);
	}
}

function nextPlayer(){
	var i = currentPlayer + 1;
	if (i >= playerList.length){
		i = 0;
	}
	return i;
}

function startGame(){
	document.getElementById("pregamewrapper").style.display = "none";
	document.getElementById("gamewrapper").style.display = "block";
	createPlayerList();
	newTurn();
}

if (/Mobi|Android/i.test(navigator.userAgent)){
	if (screen.availHeight > screen.availWidth){
		<!-- mobile landscape -->
		makePortrait();
	} else {
		<!-- mobile portrait -->
		makeLandscape();
	}
} else if (document.documentElement.clientWidth < document.documentElement.clientHeight){
	<!-- other tall device -->
	document.getElementById("textdisplay").style.maxWidth = '80vw';
	document.getElementById("textdisplay").style.width = "80vw";
	document.getElementById("textdisplay").style.minHeight = '40vh';
	document.getElementById("textdisplay").style.justifyContent = "space_between";
	document.getElementById("textdisplay").style.fontSize = "40px";
	document.getElementById("title").style.fontSize = "50px";
	document.getElementById("timerbar").style.width = "50vw";
	document.getElementById("correct").style.fontSize = "20px";
	document.getElementById("incorrect").style.fontSize = "20px";
	document.getElementById("correct").style.maxWidth = "35vw";
	document.getElementById("incorrect").style.maxWidth = "35vw";
}

var category = new Array("Celebrities", "Child stars", "Famous artists (non-musical)", "Movie Stars", "Bands / musicians", "Athletes", "NFL players", "NBA players", "Historical figures", "Politicians / World leaders", "US Presidents", "Current international rulers / politicians", "US politicians", "Notorious / infamous people", "Tropical places", "New York City things", "A nation or state capital", "A river", "Bodies of water", "Countries", "Cities", "US states", "US cities", "US places (cities, states, counties, parks)", "World sites of interest", "Places in the Northern Hemisphere", "Places in the Southern Hemisphere", "Places in the Eastern Hemisphere", "Languages", "Adjective that describes another player", "Internet lingo", "Acronyms", "Words with double letters", "Foreign words used in English", "Four-letter words", "Slang terms", "Line / lyric from a song", "Measurements", "Things found in groups / sets", "Economic / financial terms", "Math terms", "Types of math", "Things found in space", "Biomes", "Winter things", "Summer things", "Spring things", "Weather terms", "Autumn things", "Diseases / illnesses", "Parts of the body", "Plants", "Trees", "Flowers", "Animals", "Zoo animals", "Sea creatures", "Animals native to Africa", "Mammals", "Insects", "Types of birds", "Things with a tail", "Reptiles / amphibians", "Pets", "Art supplies", "Artistic mediums", "Works of art", "Junk food", "Frozen foods", "Seafood / fish", "Diet foods", "Ethnic foods", "Breakfast foods", "Types / brands of alcohol", "Types of drinks", "Food", "Spicy foods", "Kinds of soup", "Dessert", "Foods eaten raw", "Ice cream flavors", "Types / brands of candy", "Vegetables", "Fruits", "Cocktail names", "Seasonings, spices, or herbs", "Songs", "TV Shows", "Movie titles / series", "Book titles / series", "Magazines / newspapers", "Video games", "Children’s shows / movies", "Children’s books", "Authors", "Plays / musicals", "Book characters", "Movie characters", "Mythological beings", "Heroes", "Villains", "Monsters", "Cartoon characters", "Colors", "Things that are white", "Things that are black", "Things that are bright", "Things that are yellow", "Things that are brown", "Things that are grey", "Things that are red", "Things that are striped", "Things with spots", "Things not visible to the naked eye", "Things that are smooth", "Things that are sticky", "Liquids", "Things that are round", "Things that are flat", "Things that are long and thin, polelike", "Things that fit in the palm of your hand", "Things that are larger than a car", "Things that are larger than a house", "Things that are small", "Things that are huge", "Things that are square", "Things that are balls / orbs", "Things that are high off the ground", "Store names", "Types / brands of cars", "Major companies", "Local businesses", "Clothing brands", "Restaurants", "Sports Teams", "Olympic events or athletes", "Christmas things", "Things at a football game", "Things at a baseball game", "Things at a basketball game", "Sporting events", "Holidays", "Historical / cultural events", "Awards / trophies / titles / ceremonies", "Furniture", "Sports played outdoors", "Tourist attractions", "Computer / electronic components", "Software", "Websites", "Board / card games", "Games", "Appliances", "Drugs", "Medicines", "Something in this room", "Types of stone / gem / mineral", "Toys", "Sports equipment", "Tools / utensils", "Electronics", "Cosmetics / toiletries", "Containers", "Metal objects", "Famous buildings", "Musical instruments", "Weapons", "Types of clothing", "Halloween costumes", "Footwear types / brands", "Things that have wheels", "Activities you can do for free", "Things you find in a library", "Things that have buttons", "Things with a switch or dial", "Things you do everyday", "Things you sit, lay, or rest on", "Things found in vending machines", "Things you hold in one hand", "Things you see only outside", "Things you see only indoors", "Thing that are cold", "Things that grow", "Things in the kitchen", "Things in a grocery store", "Things seen at the beach", "Things that jump or bounce", "Something you keep hidden", "Things in a suitcase", "Things you replace periodically", "Things found in a desk", "Things related to exercise", "Things at a circus / fair", "Things that are disposable", "Things that use a remote", "Things you shouldn’t touch", "Things that use wires", "Things you buy tickets for", "Things that are wireless", "Things found in a hospital", "Things you make", "Things that can kill you", "Things to do on a date", "Things found on a farm", "Things in the sky", "Things that are hot", "Things that float", "Things that spin / turn", "Things in a purse", "Skills / talents", "Cleaning things / terms", "Building materials", "Construction site things / terms", "Ethnicities / nationalities", "Professions", "Revolutionary War things / terms", "Civil War things / terms", "WWII things / terms", "Personality traits", "A boy’s name", "A girl’s name", "School subjects", "A relative’s name", "A common hobby", "Colleges / Universities", "Couples’ pet names (terms of endearment)", "Crimes", "Bad habits", "Leisure activities", "Common allergies", "Chores", "Ways to get from here to there", "Famous duos and trios", "Old-fashioned things", "Reasons a child gets grounded", "Kindergarten classroom things / terms", "Words related to space travel", "Excuses for being late", "Reason to call 911", "People in uniform", "College things / terms", "Boat things / terms", "Religion things / terms");
var alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "Y");
var punishments = new Array("Take a shot", "Take a shot", "Take a shot", "Take a shot", "Take two shots (double trouble)", "Take two shots (double trouble)", "Take a shot and chase it with beer", "Take a shot and chase it with beer", "Take a shot and chase it with beer", "Shotgun a beer", "Shotgun a beer", "Take a shot poured by another player", "Take a shot poured by another player", "Take a shot with another player of your choice", "Take a shot with another player of your choice", "Drink some beer", "Drink some beer", "Drink some beer", "Drink some beer", "Finish your beer", "Finish your beer", "One-beer game of flip-cup with another player", "Do 5 pushups", "Sing your favorite lyrics", "Post a horse quote on your story", "Pour a shot into your beer (Superbeer)", "Hurricane Katrina", "Put salt in your beer (Michelada style)", "Viking shot", "Nudie", "Do an impression of the player to your left, or across", "Use your best pickup line on a player of the opposite sex", "Take a shot poured in your mouth by another player", "Call a family member and tell them how drunk you are", "Stand on one leg until your next turn. If you fall, take a shot.", "Take a swig of beer and sing the alphabet before swallowing.", "DUI CHECK: straight-line walk (heel to toe) nine steps. If you fall or lose balance in any way, take a shot.");
var rewards = new Array("Give another player a shot", "Give another player a shot", "Give two other players a shot", "All other players drink", "All other players drink", "All other players drink", "Make another player kill their drink", "Make another player kill their drink", "Switch two players’ drinks", "Choose a player to freestyle rap", "Choose a player to do an impression / accent of your choice", "Start a game of telephone. All other players must drink after passing the message. You must drink if your message ends unaltered.", "Choose two players to kiss (or arm-wrestle, but that’s totally up to you)...", "Choose a player to think of a haiku. If you don’t like it, they drink.", "Staring contest, loser takes a shot.", "Choose another player to dance for you. Everyone else drink while enjoying the show.", "Tea Time: Choose another player who from now on must raise their pinky finger whenever drinking. Any time they’re caught slacking by another, they must take a shot.");

function newTurn() {
	if (currentPlayer == null){
		currentPlayer = Math.floor(Math.random() * playerList.length);
	} else {
		currentPlayer = nextPlayer();
	}
	document.getElementById("player").innerHTML = playerList[currentPlayer];
	var timerlength = document.getElementById("timerlength").value;
	document.getElementById("timerbarprogress").style.animation = "none";
	document.getElementById("timerbarprogress").offsetHeight;
	document.getElementById("timerbarprogress").style.animation = "updateTimer " + timerlength + "s linear 0s 1 forwards";
	document.getElementById("timerbarprogress").style.animationPlayState = "paused";
	document.getElementById("count").innerHTML = timerlength;
	document.getElementById("nextturn").style.display = "none";
	document.getElementById("alphabet").style.visibility = "hidden";
	document.getElementById("timerbar").style.display = "flex";
    document.getElementById("timerbar").style.visibility = "hidden";
	document.getElementById("correct").style.backgroundColor = "#49c973";
	document.getElementById("correct").style.borderColor = "#49c973";
	document.getElementById("incorrect").style.backgroundColor = "#ff5c5c"
	document.getElementById("incorrect").style.borderColor = "#ff5c5c";
	document.getElementById("buttonspace").style.marginBottom = "30px";
	document.getElementById("type").style.display = "none";
	document.getElementById("playagain").style.visibility = "visible";
	var random_reward = rewards[Math.floor(Math.random() * rewards.length)];
	document.getElementById("type").innerHTML=random_reward;
    var random_category = category[Math.floor(Math.random() * category.length)];
    document.getElementById("letters").innerHTML = random_category;
    var cateWrapper = document.querySelector('#category #letters');
    cateWrapper.innerHTML = cateWrapper.textContent.replace(/\S+/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false})
    .add({
        targets: '#category .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1600,
        delay: (el, i) => 100 * (i + 1)
    })
    .add({
        targets: '#category .letter',
        translateY: ["0.5em", 0],
        translateZ: 0,
        duration: 1200,
        delay: (el, i) => 30 * i
    });
    var random_alphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.getElementById("alphabet").innerHTML = random_alphabet;
    setTimeout(function() {
        document.getElementById("alphabet").style.visibility = "visible";
    }, 2000);
    setTimeout(function() {
        document.getElementById("timerbar").style.visibility = "visible";
		showButtons();
		document.getElementById("timerbarprogress").style.animationPlayState = "running";
		timer = setInterval(updateCounter, 1000);
    }, 2000);
}

var dark = false;

function toggleDark(){
	if (dark == false){
		document.body.style.backgroundColor = "#363636";
		document.getElementById("textdisplay").style.backgroundColor = "#5c5c5c";
		document.getElementById("player").style.color = "#ffffff";
		document.getElementById("darkmode").style.backgroundColor = "#33c9ff";
		dark = true;
	} else {
		document.body.style.backgroundColor = "#f5f5f5";
		document.getElementById("textdisplay").style.backgroundColor = "#ebebeb";
		document.getElementById("player").style.color = "#5c5c5c";
		document.getElementById("darkmode").style.backgroundColor = "inherit";
		dark = false;
	}
}