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
