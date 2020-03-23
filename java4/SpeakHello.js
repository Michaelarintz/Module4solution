
(function (window) {
var helloSpeaker = {};
helloSpeaker.names = {};
var speakWord = "Hello ";
helloSpeaker.sayHello = function speak(name) {
	console.log(speakWord + " " + name);
}
	window.helloSpeaker = helloSpeaker;

})(window);
