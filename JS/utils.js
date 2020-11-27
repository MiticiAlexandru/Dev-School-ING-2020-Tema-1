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

function closeFullscreen() {
    document.getElementById('imgFullscreenContainer').style.display = 'none';
}

function changeLanguageInit(frame, isLanguagePage) {
    if(window.location.search) {
        // Check if language was changed:
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('language');
        sessionStorage.lang = lang;
    }
    // We need to translate:
    if(sessionStorage.lang && sessionStorage.lang!="en") {
        if(isLanguagePage) {
            var list = document.getElementsByClassName("languageFormElement");
            for(let i = 0; i < list.length; i++) {
                if(list[i].value == sessionStorage.lang)
                    list[i].checked = true;
            }
        }
        changeLanguage(frame, sessionStorage.lang);
    }
}

function changeLanguage(frame, lang) {
    let ok = true;

    setTimeout(() => {
        console.log(frame.contentWindow.document.body.children[0].children[0]);
        var iframe = frame.contentWindow.document.body;
        var googleTranslateMenu = iframe.children[0].children[0].children[0].children[0].children;
        if(googleTranslateMenu)
            for(let i=0; ok && i<googleTranslateMenu.length; i=i+2)
                for(let j=0; ok && j<googleTranslateMenu[i].childElementCount; j++)
                    if(googleTranslateMenu[i].children[j].children[0].children[1].innerHTML == languageTable[lang])
                        googleTranslateMenu[i].children[j].click();
    }, 1000);
}
