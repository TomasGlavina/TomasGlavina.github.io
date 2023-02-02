let init = () => {
    emailjs.init('x08SGiDfe4KcmXejL')
}

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

let showError = () => {
    const video = document.getElementById("video-example");
    video.src = "videos/error-sample.webm";
    video.setAttribute("type", "video/webm");
    const errorTab = document.getElementById("error");
    errorTab.classList.add("active");
    errorTab.classList.add("bg-primary");
    errorTab.classList.add("text-black");
    errorTab.classList.add("bg-opacity-75");
    const exampleTab = document.getElementById("example");
    exampleTab.classList.remove("active");
    exampleTab.classList.remove("bg-primary");
    exampleTab.classList.remove("text-black");
};

let showExample = () => {
    const video = document.getElementById("video-example");
    video.src = "videos/hotel-sample.webm";
    video.setAttribute("type", "video/webm");
    const errorTab = document.getElementById("error");
    errorTab.classList.remove("active");
    errorTab.classList.remove("bg-primary");
    errorTab.classList.remove("text-black");
    const exampleTab = document.getElementById("example");
    exampleTab.classList.add("active");
    exampleTab.classList.add("bg-opacity-75");
    exampleTab.classList.add("bg-primary");
    exampleTab.classList.add("text-black");
};

init();
