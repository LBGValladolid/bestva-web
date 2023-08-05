/**
 * To translate pages in client side.
 */

const defaultLang = "en";
const supportedLangs = ["en", "es"];
const langPath = "javascript/lang/";
const attrName = "trd";

/**
 * To select the language based on the browser and the supported languages.
 */

function selectLang(lang = undefined) {
    if (supportedLangs.indexOf(lang) != -1) {
        setCookie("lang", lang);
        return lang;
    }
    if (getCookie("lang")) {
        return getCookie("lang");
    } else if (supportedLangs.indexOf(navigator.language) != -1) {
        setCookie("lang", navigator.language);
        return navigator.language;
    }
    setCookie("lang", defaultLang);
    return defaultLang;
}

/**
 * Method that sets the HTML contents from a JSON traduction file.
 * @param {*} lang Object with the traductions.
 */
function setLang(lang) {
    const nodeList = document.getElementsByTagName("*");
    for (let elem of nodeList) {
        const attrValue = elem.getAttribute(attrName);
        if (attrValue != null) {
            eval("elem.innerHTML = lang." + attrValue.trim());
        }
    }
}

/**
 * Combining both methods abobe, it loads the JSON file from the server.
 *
 * @param {function} [setPlaceHolders=undefined]
 * @param {String} [lang=undefined]
 */
function loadLangFile(lang = undefined, setPlaceHolders = undefined) {
    const url = langPath + selectLang(lang) + '.json';

    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            setLang(JSON.parse(this.responseText));
            if (setPlaceHolders) {
                setPlaceHolders(JSON.parse(this.responseText));
            }
        }
    }

    request.open("GET", url, true);
    request.send();


    selectMenuLang(selectLang(lang));

    function selectMenuLang(lang) {
        let langLinks = document.getElementsByClassName("nav-lang")[0].children;
        for (let link of langLinks) {
            link.setAttribute("class", "");
        }
        document.getElementById(lang).setAttribute("class", "actual");
    }
}

function setCookie(key, value, secs, path = "") {
    document.cookie =
        key + "=" + value + ";" +
        "max-age=" + secs + ";" +
        "path=" + path;
}

function getCookie(key) {
    const name = key + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (let cookie of cookieArray) {
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

function removeCookie(key) {
    setCookie(key, "", 0);
}

/* script menú */
function menu() {
    var x = document.getElementById("menu");
    if (x.className == "visible") {
        x.className = "invisible";
    } else {
        x.className = "visible";
    }
}

/* script que muestra el form en contactos */
function showForm() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile")

    if (isAndroid) {
        window.location.href = "https://docs.google.com/forms/d/1l_Vv-sWri1xv4NLY1aZ9-5pxR-7W8GrZuFxlSpeGB4E/viewform";
    } else {
        var x = document.getElementById("form");
        if (x.className == "form-hidden") {
            x.className = "form-shown";
        } else {
            x.className = "form-hidden";

        }
    }

}

function buildGallery() {
    const members = [
        // AQUI SOLO ACTIVOS (BABY Y FULLS)
        {
            name: "Alicia",
            src: "Alicia_Lorenzo.jpg",
        },
        {
            name: "Nicolás",
            src: "Nicolas_Garcia.png",
        },
        {
            name: "Viti",
            src: "Victor_Herrezuelo.jpg",
        },
        {
            name: "Paula H",
            src: "Paula_H.jpg",
        },
        {
            name: "Paula",
            src: "Paula_Urbaneja.jpg",
        },
        {
            name: "Isabel",
            src: "Isa_III.jpg",
        },
        {
            name: "Alonso",
            src: "Alonso_DeLuna.jpeg",
        },
        {
            name: "Isa V",
            src: "Isa_V.jpeg",
        },
       
        {
            name: "Marina",
            src: "Marina_Calleja.jpeg",
        },
        {
            name: "Marta",
            src: "Marta_Rodriguez.jpeg",
        },
        {
            name: "Moon",
            src: "Sehee.jpg",
        },
        {
            name: "Rocío",
            src: "RocioDeLaFuente.jpg",
        },
        {
            name: "Paula Lorenzo",
            src: "PaulaLorenzo.jpg",
        },
        {
            name: "Paisán",
            src: "PabloPaisan.jpg",
        },
        {
            name: "Anayeli",
            src: "Anayeli.jpeg",
        },
    ]
const alumni = [


        // AQUI SOLO ALUMNI

        {
            name: "Adrián",
            src: "Adrian_Arroyo.jpeg",
        },
        {
            name: "Alejandro",
            src: "Alejandro_Sanz_Mediavilla.jpg",
        },
        {
            name: "Veros",
            src: "alejandro_veros.jpg",
        },
        {
            name: "Álvaro",
            src: "alvaro_lazaro.png",
        },
        {
            name: "Blanca",
            src: "Blanca_Alonso.jpg",
        },
        {
            name: "Carla",
            src: "Carla_Ruiz.jpg",
        },
        {
            name: "Dani",
            src: "Daniel_Agüeros.jpg",
        },
        {
            name: "Gonza",
            src: "Gonzalo_Calvo.jpg",
        },
        {
            name: "David",
            src: "David_Poblacion.jpeg",
        },
        {
            name: "Giraldilla",
            src: "Eduardo_Giralda.jpg",
        },
        {
            name: "Guti",
            src: "Eduardo_Gutierrez.jpg",
        },
        {
            name: "Fernando",
            src: "Fernando_Serrano.jpg",
        },
        {
            name: "Héctor",
            src: "Héctor_Sáenz.jpg",
        },
        {
            name: "Inés",
            src: "Ines_Sanz.jpg",
        },
        {
            name: "Isa",
            src: "Isabel_Prieto.jpg",
        },
        {
            name: "Iván",
            src: "Iván_Contreras.png",
        },
        {
            name: "Jota",
            src: "jaime_santamarta.jpg",
        },
        {
            name: "Javier",
            src: "Javier_Ruiz.jpg",
        },
        {
            name: "Jesús",
            src: "Jesus_Saenz.jpeg",
        },
        {
            name: "José",
            src: "Jose_Delgado.jpg",
        },
        {
            name: "José María",
            src: "JoséMaría_Pinilla.jpg",
        },
        {
            name: "Juan",
            src: "Juan_Herruzo.jpg",
        },
        {
            name: "Julia",
            src: "Julia_Martin.jpg",
        },
        {
            name: "Leandro",
            src: "Leandro_Teixeira.jpeg",
        },
        {
            name: "Lucía",
            src: "Lucía_Baeza_Sanz.jpg",
        },
        {
            name: "Lucía",
            src: "Lucia.jpeg",
        },
        {
            name: "Marcos",
            src: "Marcos_Rubio.jpg",
        },
        {
            name: "María",
            src: "María_delaFuente.jpg",
        },
        {
            name: "María",
            src: "Maria_Gonzalez.JPG",
        },
        {
            name: "Marina",
            src: "Marina_Bujedo.jpg",
        },
        {
            name: "Marina",
            src: "Marina_Herrera.jpg",
        },
        {
            name: "Patricia",
            src: "Patricia_Carretero.jpg",
        },
        {
            name: "Patricia",
            src: "Patricia_González.jpg",
        },
        {
            name: "Rebeca",
            src: "Rebeca_Hernando.JPG",
        },
        {
            name: "Rubén",
            src: "Ruben_Blanco.jpg",
        },
        {
            name: "Sara",
            src: "Sara_Nozal.jpeg",
        },
        {
            name: "Sergio",
            src: "Sergio_González_bartolomé.jpg",
        },
        {
            name: "Teresa",
            src: "Teresa_Gómez.jpg",
        },
        {
            name: "Valles",
            src: "Valles.jpg",
        }
    ];

    const shuffleArray = arr => (
        arr
            .map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1])
    );

    let gallery = document.getElementById("galeria-miembros");
    const route = "media/somos/";
    for (let member of shuffleArray(members)) {
        let memberElement = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");
        img.setAttribute("src", route + member.src);
        p.textContent = member.name;
        memberElement.appendChild(img);
        memberElement.appendChild(p);
        gallery.appendChild(memberElement);
    };


    let galeria_alumni = document.getElementById("galeria-alumni");
    const path = "media/somos/alumni/";
    for (let member of shuffleArray(alumni)) {
        let memberElement = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");
        img.setAttribute("src", path + member.src);
        p.textContent = member.name;
        memberElement.appendChild(img);
        memberElement.appendChild(p);
        galeria_alumni.appendChild(memberElement);
    }



}