        function startVoiceNavigation() {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();

            recognition.onresult = (event) => {
                const command = event.results[0][0].transcript.toLowerCase();
                navigateByVoiceCommand(command);
            };

            recognition.start();
        }

        function navigateByVoiceCommand(command) {
            switch (command) {
                case "home":
                    window.location.href = 'index.html'; // Replace with your homepage URL
                    break;
                case "about":
                    window.location.href = 'about.html'; // Replace with your about page URL
                    break;
                case "blog":
                    window.location.href = 'blog.html'; // Replace with your blog page URL
                    break;
                case "contact":
                    window.location.href = '#footer'; // Replace with your contact page URL
                    break;
                case "book an appointment":
                    openCalendlyPopup();
                    break;
                default:
                    // Voice command not recognized, you can handle this here
                    alert("Voice command not recognized");
            }
        }

        function redirectToWebsite() {
            window.location.href = "https://berrybone.github.io/in";
        }

        function openCalendlyPopup() {
            const url = 'https://calendly.com/berryboneindia?background_color=4b0082&text_color=ffd700&primary_color=4169e1';
            const popup = window.open(url, '_blank', 'width=600,height=600');
            if (!popup || popup.closed || typeof popup.closed === 'undefined') {
                // Popup blocked, show an alert or redirect to Calendly's URL
                window.location.href = url;
            }
        }