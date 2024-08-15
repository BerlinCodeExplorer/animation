document.addEventListener("DOMContentLoaded", () => {
    const banners = [
        {text: "Want to become a programmer? Learn English!", bgClass: 'bg1', textClass: 'text1'},
        {text: "Do your homework and improve your skills.", bgClass: 'bg2', textClass: 'text2'},
        {text: "Join us for coding workshops and more!", bgClass: 'bg3', textClass: 'text3'},
        {text: "Become a part of our coding community!", bgClass: 'bg4', textClass: 'text4'}
    ];

    let currentIndex = 0;
    const bannerElement = document.querySelector(".banner");
    const bannerTextElement = document.querySelector(".banner-text");
    const updateBanner = () => {
        const {bgClass, textClass, text} = banners[currentIndex];

        bannerTextElement.textContent = text;
        bannerElement.className = `banner ${bgClass}`;
        bannerTextElement.className = `banner-text ${textClass}`;
        currentIndex = (currentIndex + 1) % banners.length;
    }
    setInterval(updateBanner, 2000);
    updateBanner();
});