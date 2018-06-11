var app = function (){

var addCat = function(catName, catFavFood, catImg){
    var catList = createcatList();
    var windowObject = document.querySelector('#cats');
    var name = createName(catName);
    var favFood = createFavFood(catFavFood);
    var img = createImg(catImg);

    appendElements(name, favFood, img);
};

// var quoteArticle =
// quoteArticle.classList.add('quote');

// var blockquote = document.createElement('blockquote');
// blockquote.textContent = 'The perfect is the enemy of the good';
//
// var cite = document.createElement('cite');
// cite.textContent = 'callum';
//
// blockquote.appendChild(cite);
// quoteArticle.appendChild(blockquote);
//
// var quotes = document.querySelector('#quotes');
// quotes.appendChild(quoteArticle);

addCat("Fraz", "Whiskers", "https://www.pexels.com/search/cat/")

var createCatList = function(){
  catList = document.createElement('ul')
  catList.classList.add('cat')
  return catList;
};

var createName = function(){
  name = document.createElement('li');
  name.textContent = (catName);
  return name;
};

var createFavFood = function(){
  favFood = document.createElement('li');
  favFood.textContent = (catFavFood);
  return favFood;
};

var createImg = function(){
  img = document.createElement('li');
  img.textContent = (catImg);
  return img
};

var appendElements = function(name, favFood, img, windowObject){
  name.appendChild(catListObject);
  favFood.appendChild(catListObject);
  img.appendChild(catListObject);
};

};

window.onload = app;
