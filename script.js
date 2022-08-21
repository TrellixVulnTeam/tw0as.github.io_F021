import {anemoChars, cryoChars, dendroChars, electroChars, geoChars, hydroChars, pyroChars} from "./rawData.js";

// most of the js is applied into Characters and Contact Us htmls to fulfill the course requirements. The rest is WiP since this is a real project in development that needs the approval of a team. 


// Character section html creation

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

// PLACEHOLDER FOR WHEN DENDRO CHARS ARE INTRODUCED
// const dendro__char = document.getElementById("dendro__char");

// WEAPONS section html creation - To do this i should integrate multiple JS files on the project for the different elements in the database (chars , weapons , artifacts)

/*
function createAndAppendWeps(weps, wepToAppendTo) {
    weps.forEach(wep => {
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
        
        wepToAppendTo.appendChild(content);
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

*/

// CONTACT US SECTION
// Currently the selector for Discord/Mail has been deleted and only remain a mail option
// Still missing how to add the section feedback

class Feedback {
    constructor(name, comms, section, text, more) {
        this.name = name
        this.comms = comms
        this.section = section
        this.text = text
        this.more = more
    }
}

const feedbackForm = document.getElementById('feedbackForm')
const feedback = []

if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let name = document.getElementById('name').value
        let comms = document.getElementById('comms').value
        let text = document.getElementById('feedbackInput').value
        let more = document.getElementById('additionalInput').value
        const feedbackDone = new Feedback(name, comms, text, more)
        feedback.push(feedbackDone)
        console.log(feedback)
        Swal.fire({
            icon: 'success',
            title: 'Thank you!',
            text: 'We have received your feedback, we will contact you if needed.',
            iconColor: '#24574b', 
            color: '#000000cc',
            background: '#e8dcbf',
            confirmButtonColor: '#24574b',
        })
        feedbackForm.reset()
    })
}

localStorage.setItem('feedback', JSON.stringify(feedback))
console.log(JSON.parse(localStorage.getItem('feedback')))

// BUTTONS

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
})

const toTop = document.getElementById('toTop');

if (toTop) {
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
    }
    toTop.addEventListener('click', () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    })
}




/*

// Found an useful API and i just load some random data before actually integrate it  
fetch("https://api.genshin.dev/characters/") 
.then(response => response.json())
.then(datos => console.log(datos))
.catch(error => console.error(error))

*/


