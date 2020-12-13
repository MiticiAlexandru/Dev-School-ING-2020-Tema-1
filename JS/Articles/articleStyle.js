const styleRoot = `
    #main-root {
        --main: rgb(245, 245, 245);
        --gray1: rgb(138, 138, 138);
        --gray2: rgb(218, 218, 218);
        --gray3: rgb(235, 235, 235);

        --themeLightGreen: rgba(64, 247, 223);
        --themeLightBlue: rgba(64, 177, 247);
        --themeRed: rgba(222, 52, 92);
        --themeBrown: rgba(147, 36, 50);
        --themeViolet: rgba(60, 24, 116);
        --themeGrayGreen: rgba(40, 55, 71);
        --themeDarkBlue: rgb(6, 58, 95);

        --sailor-blue-1: rgb(155, 183, 208);
        --sailor-blue-2: rgb(105, 147, 184);
        --sailor-blue-3: rgb(69, 111, 147);
        --sailor-blue-4: rgb(46, 74, 98);
        --sailor-blue-5: rgb(41, 66, 87);
        --sailor-blue-6: rgb(37, 58, 78);
        --sailor-blue-7: rgb(32, 51, 68);
        --sailor-blue-8: rgb(27, 44, 58);
        --sailor-blue-9: rgb(23, 37, 49);

        margin: 0;
        color: var(--gray1);
        font-family: Verdana;
        background-image: linear-gradient(to top right, var(--sailor-blue-2), var(--sailor-blue-9));
        background-attachment: fixed;
    }

    header {
        width: 100%;
        text-align: center;
        font-size: 2.5vw;

        padding-top: 1.5%;
        padding-bottom: 0;

        background-color: var(--main);
    }

    h1 {
        margin-top: 0;
        margin-bottom: 0;
        padding-bottom: 0.25%;
        color: var(--themeDarkBlue);
    }

    h2 {
        margin-top: 0;
        margin-bottom: 0;
        color: var(--themeDarkBlue);
    }

    #homeDescription {
        background-color: var(--main);
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        width: 90%;
    }

    #titleImage {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        object-fit: contain;
    }

    #grd {
        padding-top: 1.375%;
        padding-bottom: 1.375%;
    }

    .languageForm {
        background-color: var(--main);

        padding: 1.25%;
        border-radius: 12px;
        margin-top: 1.375%;
        margin-bottom: 1.375%;
        margin-left: 2.75%;
        margin-right: 2.75%;
    }

    .languageFormTitle {
        width: 100%;
        text-align: center;
    }

    .languageFormElement {
        width: 5%;
        margin-left: 45%;
        text-align: center;
    }

    .languageFormSubmit {
        width: 15%;
        margin-left: 45%;
        text-align: center;
    }

    .navBar ul li {
        box-sizing: border-box;

        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;

        border-radius: 12px;
        background-color: var(--gray3);
    }

    #imgFullscreenContainer {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;

        position: fixed;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.9);
        display: none;
    }

    .imgFullscreenButton {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        border: 0;
        background-color: rgba(0, 0, 0, 0);
    }

    .imgFullscreenButtonClose {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        padding: 5%;
        margin: 0;
        border: 0;
        background-color: rgba(0, 0, 0, 0);
    }

    .imgFullscreen {
        max-width: 100%;
        max-height: 100%;
        vertical-align: middle;
        object-fit: contain;
        left: 0;
        top: 0;
    }
`;

const styleNav = `
    .nav ul {
        width: calc(100% - 40px);
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-gap: 20px;
        padding: 0;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 0;
        margin-bottom: 1vh;
    }

    .nav ul li a {
        color: var(--gray1);
        text-decoration: none;
    }

    .nav ul li a:hover {
        color: var(--themeDarkBlue);
    }

    .nav ul li {
        box-sizing: border-box;

        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;

        border-radius: 12px;
        background-color: var(--gray3);
    }
    `;

const styleList = `
    .art {
        background-color: var(--main);
        display: flex;

        padding: 1.25%;
        border-radius: 12px;
        margin-top: 1.375%;
        margin-bottom: 1.375%;
        margin-left: 2.75%;
        margin-right: 2.75%;
    }
    `;

const style = `
    .art_home_img {
        flex: 5;
    }
    
    .art_home_text_0 {
        flex-grow: 4;
        box-sizing: border-box;
        padding-left: 2%;
        flex-basis: 0;
    }
    
    .art_home_text_1 {
        flex-grow: 4;
        box-sizing: border-box;
        padding-right: 2%;
        flex-basis: 0;
    }
    
    .art_destination_img {
        flex: 1;
    }
    
    .art_destination_text {
        flex-grow: 5;
        box-sizing: border-box;
        padding-left: 2%;
        flex-basis: 0;
    }
    
    .artImg {
        width: 100%;
        height: auto;
        vertical-align: middle;
        object-fit: contain;
        left: 0;
        top: 0;
    }

    .link {
        color: var(--gray1);
    }

    .link:hover {
        color: var(--themeDarkBlue);
    }
    `;

const styleFooter = `
    .my-footer {
        width: 95%;
        left: 0;
        bottom: 0;
        padding-left: 5%;
        padding-top: 1.5%;
        padding-bottom: 1.5%;
    
        font-size: 1.25vw;
    
        background-color: var(--main);
    }
    `;

export default { styleRoot, styleNav, style, styleList, styleFooter };
