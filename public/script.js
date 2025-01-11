document.getElementById("urlInput").addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("searchButton").click();
            }
        });

        // Open iframe in modal
        document.getElementById("searchButton").onclick = function (event) {
            event.preventDefault();
            let url = document.getElementById("urlInput").value;
            let searchUrl = "https://www.google.com/search?q=";

            if (!url.includes(".")) {
                url = searchUrl + encodeURIComponent(url);
            } else {
                if (!url.startsWith("http://") && !url.startsWith("https://")) {
                    url = "https://" + url;
                }
            }

            document.getElementById("iframeWindow").src = __uv$config.prefix + __uv$config.encodeUrl(url);
            document.getElementById("iframeModal").style.display = "block";
        };

        // Close modal
        document.getElementById("closeModal").onclick = function () {
            document.getElementById("iframeModal").style.display = "none";
        };

        // Close modal on outside click
        window.onclick = function (event) {
            if (event.target === document.getElementById("iframeModal")) {
                document.getElementById("iframeModal").style.display = "none";
            }
        };

        // Particle.js configuration
        particlesJS("particle-container", {
            particles: {
                number: { value: 100 },
                color: { value: "#ff4500" },
                shape: { type: "circle" },
                opacity: { value: 0.7 },
                size: { value: 3 },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: true,
                    out_mode: "out",
                },
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "repulse" },
                },
            },
        });
    </script>
</body>
</html>
