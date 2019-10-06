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
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfb6lZeVAgueQbLpuWX8HmSxsVaYcAt42QboeurecmcsAkVNg/viewform?embedded=true";
    } else {
        var x = document.getElementById("form");
        if (x.className == "form-hidden") {
            x.className = "form-shown";
        } else {
            x.className = "form-hidden";

        }
    }

}