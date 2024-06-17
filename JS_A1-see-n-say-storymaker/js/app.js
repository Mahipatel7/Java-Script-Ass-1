// script.js

// Arrays of words to form sentences
const subjects = ["The cat", "A dog", "The bird", "A turtle", "An elephant"];
const verbs = ["jumps", "runs", "flies", "swims", "walks"];
const adjectives = ["quickly", "slowly", "gracefully", "awkwardly", "happily"];
const objects = ["a ball", "the yard", "the sky", "the pond", "the jungle"];
const places = ["at home", "in the park", "in the forest", "in the zoo", "on the mountain"];

let story = {
    subject: "",
    verb: "",
    adjective: "",
    object: "",
    place: ""
};

function pickRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

document.getElementById("subject-btn").addEventListener("click", function() {
    story.subject = pickRandomWord(subjects);
    updateStoryOutput();
});

document.getElementById("verb-btn").addEventListener("click", function() {
    story.verb = pickRandomWord(verbs);
    updateStoryOutput();
});

document.getElementById("adjective-btn").addEventListener("click", function() {
    story.adjective = pickRandomWord(adjectives);
    updateStoryOutput();
});

document.getElementById("object-btn").addEventListener("click", function() {
    story.object = pickRandomWord(objects);
    updateStoryOutput();
});

document.getElementById("place-btn").addEventListener("click", function() {
    story.place = pickRandomWord(places);
    updateStoryOutput();
});

document.getElementById("speak-btn").addEventListener("click", function() {
    let textToSpeak = `${story.subject} ${story.verb} ${story.adjective} ${story.object} ${story.place}`;
    speakNow(textToSpeak);
});

document.getElementById("random-story-btn").addEventListener("click", function() {
    story.subject = pickRandomWord(subjects);
    story.verb = pickRandomWord(verbs);
    story.adjective = pickRandomWord(adjectives);
    story.object = pickRandomWord(objects);
    story.place = pickRandomWord(places);
    updateStoryOutput();
    let textToSpeak = `${story.subject} ${story.verb} ${story.adjective} ${story.object} ${story.place}`;
    speakNow(textToSpeak);
});

document.getElementById("reset-btn").addEventListener("click", function() {
    story = { subject: "", verb: "", adjective: "", object: "", place: "" };
    updateStoryOutput();
});

function updateStoryOutput() {
    document.getElementById("story-output").textContent = `${story.subject} ${story.verb} ${story.adjective} ${story.object} ${story.place}`;
}

function speakNow(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
