document.addEventListener("DOMContentLoaded", function () {

    const slides = [
        {
            img: "./Images/sec1_img2.png",
            title: "Trendy House Plant",
            name: "Calathea Plant"
        },
        {
            img: "./Images/sec1_img3.png",
            title: "Small Desk Ai Plant",
            name: "Monstera Plant"
        },
        {
            img: "./Images/sec1_img4.png",
            title: "Fresh Desk Plant",
            name: "Snake Plant"
        }
    ];

    let currentSlide = 0;

    const slideImage = document.getElementById("slideImage");
    const slideTitle = document.getElementById("slideTitle");
    const slideName = document.getElementById("slideName");

    const nextBtn = document.getElementById("nextSlide");
    const prevBtn = document.getElementById("prevSlide");

    // Function to show slide with fade
    function showSlide(index) {
        const slide = slides[index];
        slideImage.style.opacity = 0; // fade out
        setTimeout(() => {
            slideImage.src = slide.img;
            slideTitle.textContent = slide.title;
            slideName.textContent = slide.name;
            slideImage.style.opacity = 1; // fade in
        }, 200);
    }

    // Initial display
    showSlide(currentSlide);

    // Next button
    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Previous button
    prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

});
