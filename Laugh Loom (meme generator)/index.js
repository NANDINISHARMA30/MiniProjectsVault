// //                               using meme api

// const img = document.querySelector(".memebox img");
// const button = document.querySelector(".first ,.meme_gen");
// let url = "https://meme-api.com/gimme"

// //                                                    using asyn-await function---
// const update = (url) => {
//     memeLoader.setAttribute("src", url);
// }

// const genMemes = async () => {
//     let response = await fetch(url);
//     console.log(response);
//     let memeData = await response.json();
//     console.log(memeData);
//     let m = m.url;
//      console.log(m);
//     button.addEventlisterners("click", (genMemes) => {
//         console.log(button);
//     });
// }



//                        creating js elements
const button = document.querySelector(".first ,.meme_gen");
const memeLoader = document.querySelector(".memebox img");

//                        creating 
const update = (url) => {
    memeLoader.setAttribute("src", url);
}

const genMemes = () => {
    fetch("https://meme-api.com/gimme").then(
        (response) => response.json()).then
        ((data) => {
            update(data.url);

        });
};

button.addEventListener("click", genMemes);



