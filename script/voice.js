function startVoiceNavigation() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onresult = function (event) {
        const command = event.results[0][0].transcript.toLowerCase();
        speakAndNavigate(command);
    };

    recognition.start();
}

function speakAndNavigate(command) {
    let speech = '';
    switch (command) {
        case "home":
            speech = "Navigating to home page";
            speakAndRedirect(speech, 'index.html');
            break;
        case "about":
            speech = "Taking you to the about page";
            speakAndRedirect(speech, 'about.html');
            break;
        case "blog":
            speech = "Redirecting to the blog";
            speakAndRedirect(speech, 'blog.html');
            break;
        case "contact":
            speech = "Heading to the contact section";
            speakAndRedirect(speech, '#footer');
            break;
        case "book an appointment":
            openCalendlyPopup();
            break;
        case "services":
            speech = "Moving to services";
            speakAndRedirect(speech, 'services.html');
            break;
        case "portfolio":
            speech = "Viewing the portfolio";
            speakAndRedirect(speech, 'portfolio.html');
            break;
        default:
            alert("Voice command not recognized");
    }
}

function speakAndRedirect(speech, pageURL) {
    const utterance = new SpeechSynthesisUtterance(speech);
    utterance.onend = function () {
        window.location.href = pageURL;
    };

    speechSynthesis.speak(utterance);
}

function openCalendlyPopup() {
    const url = 'https://calendly.com/berryboneindia?background_color=4b0082&text_color=ffd700&primary_color=4169e1';
    const popup = window.open(url, '_blank', 'width=600,height=600');
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        window.location.href = url;
    }
}