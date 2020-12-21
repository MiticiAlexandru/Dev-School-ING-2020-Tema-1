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

export default { closeFullscreen, languageTable }
