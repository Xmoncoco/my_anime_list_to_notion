//faire une requete api
//recuperer les données
const fetch = require('node-fetch');
const { Client } = require("@notionhq/client")
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const client = new Client(API_KEY);

var search = "full metal alchemist brotherhood";

var json

var name
var image
var description
var nuberOfEpisodes
var finished


fetch('https://api.jikan.moe/v4/anime?q='+ search)
    .then(response => response.json())
    .then(data => {
        console.log(data.data[0]);
        json = data.data[0];
        name = data.data[0].title;
        image = data.data[0].images.jpg.image_url;
        description = data.data[0].synopsis;
        nuberOfEpisodes = data.data[0].episodes;
        if (data.data[0].airing == true) {
           finished = "not finished";
        }else{
            finished = "finished";
        }
        console.log(name);
        console.log(image);
        console.log(description);
        console.log(nuberOfEpisodes);
        console.log(finished);

    });



