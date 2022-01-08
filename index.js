const DOM = {
    cardContainer: null,
    SearchBar: null,
    searchBtn: null,
}
const DATA = {
    cards: null,
}

function getData(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res => res.json()).then(data => (DATA.cards = data)).catch(function (failure) {
        alert("Something went wrong");
    });
}

function init() {
    DOM.cardContainer = document.querySelector("#card");
    DOM.SearchBar = document.querySelector("#searchBar");
    DOM.searchBtn = document.querySelector("#searchBtn");
    DOM.searchBtn.addEventListener("click", getCard)
    DOM.SearchBar.addEventListener("change", () => getData(DOM.SearchBar.value))

}
init()


function getCard() {
    const data = DATA.cards
    const card = DOM.cardContainer
    card.innerHTML = ""
    const cardName = document.createElement("h2")
    const outerDiv = document.createElement("div")
    outerDiv.classList.add("flip-card-front")
    cardName.innerText = data["name"]

    const imgFront = document.createElement("img")
    imgFront.src = data.sprites["front_default"]
    imgFront.classList.add("imageSize")

    const backDiv = document.createElement("div")
    backDiv.classList.add("flip-card-back")
    const cardNameBack = document.createElement("h2")
    cardNameBack.innerText = data["name"]

    const imgBack = document.createElement("img")
    imgBack.src = data.sprites["back_default"]
    imgBack.classList.add("imageSize")


    outerDiv.append(cardName, imgFront)
    backDiv.append(cardNameBack, imgBack)
    card.append(outerDiv, backDiv)
}
