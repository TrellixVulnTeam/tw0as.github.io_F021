// IGNORE 

/*

import {anemoChars, cryoChars, dendroChars, electroChars, geoChars, hydroChars, pyroChars} from "./rawData.js";

function createAndAppendChars(chars, charToAppendTo) {
    chars.forEach(char => {
        const content = document.createElement("div");
        content.classList.add("main__elements--sub");
        content.innerHTML = `
        <article class="char__info">
            <h3 class="char__name">${char.name}</h3>
            <p>${char.rarity} ${char.role}</p>
            <p>${char.lore}</p> 
            <img src="../img/characters/${char.img}" alt="${char.name}">
        </article>
        `
        
        charToAppendTo.appendChild(content);
    });
}

const anemo__char = document.getElementById("anemo__char");
const cryo__char = document.getElementById("cryo__char");
const electro__char = document.getElementById("electro__char");
const geo__char = document.getElementById("geo__char");
const hydro__char = document.getElementById("hydro__char");
const pyro__char = document.getElementById("pyro__char");

if (anemo__char) {
    createAndAppendChars(anemoChars, anemo__char);
} else if (cryo__char) {
    createAndAppendChars(cryoChars, cryo__char);
} else if (electro__char) {
    createAndAppendChars(electroChars, electro__char);
}else if (geo__char) {
    createAndAppendChars(geoChars, geo__char);
}else if (hydro__char) {
    createAndAppendChars(hydroChars, hydro__char);
}else if (pyro__char) {
    createAndAppendChars(pyroChars, pyro__char);
};
