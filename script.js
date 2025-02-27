// ==UserScript==
// @name         Shell Shockers Server Dropdown Restorer
// @namespace    https://github.com/onlypuppy7/ShellShockersServerDropdownRestorer/
// @license      GPL-3.0
// @version      1.0.1
// @author       onlypuppy7
// @description  Puts back the server dropdown which was removed from the game some years ago. Has two modes, works with latest interface.
// @match        https://shellshock.io/*
// @grant        none
// @run-at       document-start
// @icon         https://github.com/onlypuppy7/ShellShockersServerDropdownRestorer/blob/main/logo.png?raw=true
// ==/UserScript==

const mode = "puppy"; // classic OR puppy

(async function () {
    while (!window.extern?.isGameReady) {
        await new Promise(resolve => setTimeout(resolve, 1000));
    };

    const regionSelect = document.getElementById("regionSelect");
    const playGameSection = document.getElementById("home_screen");

    if (regionSelect && playGameSection) {
        playGameSection.appendChild(regionSelect);
        regionSelect.style.position = "absolute";

        if (mode === "classic") {
            regionSelect.style.left = "20em";
            regionSelect.style.top = "3em";
            regionSelect.style.marginLeft = "0em";
        } else {
            regionSelect.style.top = "41em";
            regionSelect.style.left = "50%";
            regionSelect.style.marginLeft = "14em";
            regionSelect.style.zIndex = "-1";
        };
    };
})();