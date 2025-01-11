document.getElementById("searchButton").onclick = function(event) {
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
    openModal();
};

// Allow Enter to trigger the search button
document.getElementById("urlInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});

// Modal functionality
function openModal() {
    document.getElementById("modal").style.display = "block";
}

document.getElementById("closeModal").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

// Particle.js config for ember effect
particlesJS("particles-js", {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#FF4500"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#FF4500"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.1
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#FF4500",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        }
    },
    retina_detect: true
});
