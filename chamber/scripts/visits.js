document.addEventListener("DOMContentLoaded", function () {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date().getTime();
    let message = "Welcome! Let us know if you have any questions.";

    if (lastVisit) {
        const timeDiff = now - lastVisit;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        if (days < 1) {
            message = "Welcome back! You last visited today.";
        } else if (days < 7) {
            message = `Welcome back! You last visited ${days} days ago.`;
        } else {
            message = "It's been a while! Check out what's new.";
        }
    }

    document.getElementById("visit-message").textContent = message;
    localStorage.setItem("lastVisit", now);

    const lazyImages = document.querySelectorAll(".lazy-load");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    }, { rootMargin: "50px" });

    lazyImages.forEach(img => observer.observe(img));
});