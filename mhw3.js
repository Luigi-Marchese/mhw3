//definisco variabile mappa con indirizzo del concessionario
let mapOptions={
    center:[37.504, 15.0831],
    zoom: 10
}
//creo una mappa con la classe mappa di leaflet api
let map= new L.map('map', mapOptions);
//creo un layer per mostrare la mappa
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
//aggiungo il layer alla mappa
map.addLayer(layer);
//aggiungo un elemento grafico che indichi la posizione
let marker = new L.Marker([37.504, 15.0831]);
marker.addTo(map);


//CLIENT ID 8cda6553897b1c5
//CLIEN SECRET 7400def15cca615bf1f2350eafb473a770a90612
let token_ricevuto
function onToken(tok){
    token_ricevuto=tok.access_token;
}
function onResponse(response){
     img.src=response.text;
     div.appendChild(img);
     const div=document.querySelector('#Contenitore_asta');
}
function onToken(response){
    token_ricevuto=response.access_token;
}
function ricerca(event){
      fetch("https://api.imgur.com/3/account/gallery/image/Lo8cYay",
      { headers:
        {
        'method': 'GET',
        'Authorization': "Bearer " + token_ricevuto
        }
    } 
).then(onResponse)
}

fetch("https://api.imgur.com/oauth2/authorize?client_id=8cda6553897b1c5&response_type=token").then(onToken);
const button=document.querySelector('#button');
button.addEventListener('click', ricerca);

