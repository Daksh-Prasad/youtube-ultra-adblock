const hideAds = () => {
    const adElements = document.querySelectorAll(
      ".ad-container, .video-ads, .ytp-ad-module"
    );
    adElements.forEach(ad => ad.style.display = "none");
  
    const skipButton = document.querySelector(".ytp-ad-skip-button");
    if (skipButton) {
      skipButton.click();
    }
  };
  
  // Run hideAds function every second to keep blocking ads
  setInterval(hideAds, 1000);

// Made by Daksh Prasad - https://github.com/Daksh-Prasad
