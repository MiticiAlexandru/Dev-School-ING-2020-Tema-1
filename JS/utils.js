function createArticles(list, type) {
    var container = document.getElementById('grd');
    var articles = '';
    list.forEach(art => {
        articles = articles + createArticle(art, type);
    });
    container.innerHTML = articles;
}

function createArticle(art, type) {
    var article;
    if(type == "destination")
        art.content = art.content + ' <br> <br> <a href="' + art.link + '"  target="_blank" class="link">Click for more info...</a>';
    else
        art.title = '<h2>' + art.title + '</h2> <br> <h3>' + art.subtitle + '</h3>';
    switch(art.layout) {
        case 1: article = `<article class="art"><img class="artLayout1_Img" src="../img/` + art.image + `"></img><div class="artLayout1_Text"><h2>` + art.title + `</h2> <br>` + art.content + `</div></article>`; break;
        case 2: article = `<article class="art"><div class="artLayout2_Title"><h2>` + art.title + `</h2> <br></div><img class="artLayout2_Img" src="../img/` + art.image + `"></img><div class="artLayout2_Text">` + art.content + `</div></article>`; break;
        case 3: article = `<article class="art"><img class="artLayout1_Img" src="../img/` + art.image[0] + `"></img><div class="artLayout1_Text"><h2>` + art.title + `</h2> <br>` + art.content + `</div> <img class="artLayout2_Img_alt" src="../img/` + art.image[1] + `"></img></article>`; break;
        case 4: article = `<article class="art"><div class="artLayout4_Text"><h2>` + art.title + `</h2> <br>` + art.content + `</div><img class="artLayout4_Img" src="../img/` + art.image + `"></img></article>`; break;
    }
    return article;
}
