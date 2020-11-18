const languageTable = {
    "en": "English",
    "fr": "French",
    "de": "German",
    "it": "Italian",
    "es": "Spanish",
    "ja": "Japanese",
    "zh-CN": "Chinese (Traditional)",
    "hi": "Hindi",
    "ar": "Arabic"
};

function createArticles(list, type) {
    var artType = 0;
    var container = document.getElementById('grd');
    var articles = '';
    list.forEach(art => {
        articles = articles + createArticle(art, type, artType);
        artType = 1 - artType;
    });
    container.innerHTML = articles;
}

function createArticle(art, pageType, artType) {
    var article;
    if(pageType == "destination") {
        art.content = art.content + ' <br> <br> <a href="' + art.link + '"  target="_blank" class="link">Click here for more info...</a>';
        article = `<article class="art art_destination"><div class="art_destination_img"> <img class="artImg" src="../img/` + art.image + `" alt="` + art.image + `" onClick="imageFullscreen(false, '` + art.image + `')"></img> </div><div class="art_destination_text"><h2>` + art.title + `</h2> <br>` + art.content + `</div></article>`;
    } else {
        art.title = '<h2>' + art.title + '</h2> <h3>' + art.subtitle + '</h3>';
        if(artType == 0)
            article = `<article class="art art_home0"><div class="art_home_img"> <img class="artImg" src="../img/` + art.image + `" alt="` + art.image + `" onClick="imageFullscreen(false, '` + art.image + `')"></img> </div><div class="art_home_text_0">` + art.title + art.content + `</div></article>`;
        else
            article = `<article class="art art_home1"><div class="art_home_text_1">` + art.title + art.content + `</div><div class="art_home_img"> <img class="artImg" src="../img/` + art.image + `" alt="` + art.image + `" onClick="imageFullscreen(false, '` + art.image + `')"></img> <div></article>`;
    }
    return article;
}

function imageFullscreen(close, image) {
    var elem = document.getElementById("imgFullscreenContainer");
    if(close == false) {
        elem.innerHTML = `<button class="imgFullscreenButtonClose" onClick="imageFullscreen(true)"><img class="imgFullscreen" src="../img/` + image + `" alt="` + image + `"></img></button>`;
        elem.style.display = "block";
    } else
        elem.style.display = "none";
}

function changeLanguageInit() {
    if(window.location.search) {
        // Check if language was changed:
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('language');
        sessionStorage.lang = lang;

        var list = document.getElementsByClassName("languageFormElement");
        for(let i = 0; i < list.length; i++) {
            if(list[i].value == lang)
                list[i].checked = true;
        }
    }
    // We need to translate:
    if(sessionStorage.lang && sessionStorage.lang!="en")
        changeLanguage(sessionStorage.lang);
}

function changeLanguage(lang) {
    let ok = true;

    if(document.getElementsByTagName("IFRAME").length > 0) {
        var iframe = document.getElementsByTagName("IFRAME")[0].contentWindow.document.body;
        var googleTranslateMenu = iframe.children[0].children[0].children[0].children[0].children;
        if(googleTranslateMenu)
            for(let i=0; ok && i<googleTranslateMenu.length; i=i+2)
                for(let j=0; ok && j<googleTranslateMenu[i].childElementCount; j++)
                    if(googleTranslateMenu[i].children[j].children[0].children[1].innerHTML == languageTable[lang])
                        googleTranslateMenu[i].children[j].click();
    } else {
        console.log("iframe did not load.");
    }
}
