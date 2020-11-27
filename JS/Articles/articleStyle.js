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
        color: var(--gray2);
    }

    .link {
        color: var(--gray1);
    }

    .link:hover {
        color: var(--gray2);
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
        background-color: white;
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
    
        background-color: white;
    }
    `;

export default { styleNav, style, styleList, styleFooter };
