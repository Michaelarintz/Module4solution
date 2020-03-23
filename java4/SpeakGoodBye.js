
(function (window) {
var byeSpeaker = {};
byeSpeaker.names = {};
var speakWord = "Good Bye ";
byeSpeaker.sayGoodBye = function speak(name) {
	console.log(speakWord + " " + name);
}
	window.byeSpeaker = byeSpeaker;

})(window);



