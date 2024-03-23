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
    let destinationURL = '';

    switch (command) {
        case "hi":
            speech = "Hello!, I am Navika AI assistant. Welcome to Upract. How can I assist you Today?";
            break;
        case "home":
            speech = "Navigating to home page";
            destinationURL = 'index.html';
            break;
        case "doctor":
            speech = "Viewing Top and Trusted Doctors Near You";
            destinationURL = 'doctors.html';
            break;
        case "caregivers":
            speech = "Viewing Top and Trusted Caregivers For You";
            destinationURL = 'caregivers.html';
            break;
        case "contributors":
            speech = "Viewing Our Contributors";
            destinationURL = 'contributors.html';
            break;
        case "hospital appointment":
            speech = "Opening Hospital Appointment Page";
            destinationURL = 'appointment.html';
            break;
        case "hospitals":
            speech = "Viewing Best Hospitals Near You";
            destinationURL = 'hospitals.html';
            break;
        case "frequently asked questions":
            speech = "Viewing Our frequently asked questions";
            destinationURL = 'FAQ.html';
            break;
        case "subscriptions":
            speech = "Viewing Top and Trusted Caregivers For You";
            destinationURL = 'subscription.html';
            break;
        case "blood doners":
            speech = "Showing Up Some Doners For your Help";
            destinationURL = 'blood-doners.html';
            break;
        case "BMI calculator":
            speech = "Taking you to BMI calculator page";
            destinationURL = 'blood-doners.html';
            break;
          
        case "about":
            speech = "Taking you to the about page";
            destinationURL = 'about.html';
            break;
        case "blog":
            speech = "Redirecting to the blog";
            destinationURL = 'blogs.html';
            break;
        case "contact":
            speech = "Heading to the contact section";
            destinationURL = 'contact.html';
            break;
        case "book an appointment":
            openCalendlyPopup();
            break;
        case "privacy policy":
            speech = "Moving to Privacy Policy";
            destinationURL = 'privacy-policy.html';
            break;
        case "refund policy":
            speech = "Moving to Refund Policy of Upract";
            destinationURL = 'Refund-Policy.html';
            break;
        case "terms and conditions":
            speech = "Viewing the Terms and Conditions of Upract";
            destinationURL = 'terms-and-conditions.html';
            break;
        default:
            alert("Voice command not recognized");
            return;
    }

    speakAndRedirect(speech, destinationURL);
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