var localizacion = L.map('localizacion').setView([-17.409864,-66.154264], 12);
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ').addTo(localizacion);

//////////////////////////////////////////////LINEA ROJA ////////////////////////////////////////////
// Ruta Linea Roja
    var lineaRoja = omnivore.kml('/lineaRoja.kml')
    .on('ready', function() {
        this.setStyle({color: "red",
                        weight: 4});
    })
    .addTo(localizacion);

//Apeaderos y Estaciones Municipales Linea ROJA
var customIcon = new L.icon({
  iconUrl: '/img/iconosTren/trenRojo.jpg',
  iconSize: [30, 30],
  iconAnchor: [10, 20]
});

    var apLR1 = L.marker([-17.423557,-66.154213],{icon:customIcon}).addTo(lineaRoja);
    var apLR2 = L.marker([-17.428752,-66.152231],{icon:customIcon}).addTo(lineaRoja);
    var apLR3 = L.marker([-17.434085,-66.148597],{icon:customIcon}).addTo(lineaRoja);
    var apLR4 = L.marker([-17.440185,-66.144411],{icon:customIcon}).addTo(lineaRoja);
    var apLR5 = L.marker([-17.444695,-66.139497],{icon:customIcon}).addTo(lineaRoja);
    var apLR6 = L.marker([-17.447257,-66.135061],{icon:customIcon}).addTo(lineaRoja);
    var emALR = L.marker([-17.451484,-66.129807],{icon:customIcon}).addTo(lineaRoja);

//////////////////////////////////////////////LINEA VERDE ////////////////////////////////////////////
//Ruta Linea Verde
    var lineaVerde = omnivore.kml('/lineaVerde.kml')
    .on('ready', function() {
        this.setStyle({color: "green",
                        weight: 4});
    })
    .addTo(localizacion);

//Apeaderos y Estaciones Municipales Linea VERDE
var customIcon = new L.icon({
  iconUrl: '/img/iconosTren/trenVerde.jpg',
  iconSize: [30, 30],
  iconAnchor: [10, 20]
});

    var apLV1 = L.marker([-17.411181,-66.160965],{icon:customIcon}).addTo(lineaVerde);
    var apLV2 = L.marker([-17.407460,-66.168681],{icon:customIcon}).addTo(lineaVerde);
    var apLV3 = L.marker([-17.402330,-66.178730],{icon:customIcon}).addTo(lineaVerde);
    var apLV4 = L.marker([-17.400481,-66.187593],{icon:customIcon}).addTo(lineaVerde);
    var apLV5 = L.marker([-17.400252,-66.195687],{icon:customIcon}).addTo(lineaVerde);
    var apLV6 = L.marker([-17.399869,-66.208942],{icon:customIcon}).addTo(lineaVerde);
    var apLV7 = L.marker([-17.399556,-66.219941],{icon:customIcon}).addTo(lineaVerde);
    var apLV8 = L.marker([-17.399275,-66.229841],{icon:customIcon}).addTo(lineaVerde);
    var emCLV = L.marker([-17.399067,-66.243200],{icon:customIcon}).addTo(lineaVerde);
    var apLV9 = L.marker([-17.398624,-66.252467],{icon:customIcon}).addTo(lineaVerde);
    var apLV10 = L.marker([-17.398780,-66.265791],{icon:customIcon}).addTo(lineaVerde);
    var apLV11 = L.marker([-17.400887,-66.274170],{icon:customIcon}).addTo(lineaVerde);
    var emQLV = L.marker([-17.402045,-66.281871],{icon:customIcon}).addTo(lineaVerde);
    var apLV12 = L.marker([-17.401825,-66.292619],{icon:customIcon}).addTo(lineaVerde);
    var apLV13 = L.marker([-17.401614,-66.302210],{icon:customIcon}).addTo(lineaVerde);
    var emVLV = L.marker([-17.399049,-66.316700],{icon:customIcon}).addTo(lineaVerde);
    var apLV14 = L.marker([-17.403291,-66.323413],{icon:customIcon}).addTo(lineaVerde);
    var apLV15 = L.marker([-17.414732,-66.326116],{icon:customIcon}).addTo(lineaVerde);
    var apLV16 = L.marker([-17.431251,-66.327583],{icon:customIcon}).addTo(lineaVerde);
    var apLV17 = L.marker([-17.440633,-66.328303],{icon:customIcon}).addTo(lineaVerde);
    var apLV18 = L.marker([-17.453536,-66.330061],{icon:customIcon}).addTo(lineaVerde);
    var apLV19 = L.marker([-17.464400,-66.331360],{icon:customIcon}).addTo(lineaVerde);
    var emSLV = L.marker([-17.472144,-66.332013],{icon:customIcon}).addTo(lineaVerde);


//////////////////////////////////////////////LINEA AMARILLA ////////////////////////////////////////////
//Ruta Linea Amarilla
    var lineaAmarilla = omnivore.kml('/lineaAmarilla.kml')
    .on('ready', function() {
        this.setStyle({color: "yellow",
                        weight: 4});
    })
    .addTo(localizacion);

////Apeaderos y Estaciones Municipales Linea lineaAmarilla
var customIcon = new L.icon({
  iconUrl: '/img/iconosTren/trenAmarillo.jpg',
  iconSize: [30, 30],
  iconAnchor: [10, 20]
});
    var apLA1 = L.marker([-17.411096,-66.160857],{icon:customIcon}).addTo(lineaAmarilla);
    var apLA2 = L.marker([-17.407579,-66.168163],{icon:customIcon}).addTo(lineaAmarilla);
    var apLA3 = L.marker([-17.400474,-66.168282],{icon:customIcon}).addTo(lineaAmarilla);
    var apLA4 = L.marker([-17.394434,-66.167115],{icon:customIcon}).addTo(lineaAmarilla);
    var apLA5 = L.marker([-17.387307,-66.164413],{icon:customIcon}).addTo(lineaAmarilla);
    var apLA6 = L.marker([-17.382318,-66.161593],{icon:customIcon}).addTo(lineaAmarilla);
    var apLA7 = L.marker([-17.379724,-66.152548],{icon:customIcon}).addTo(lineaAmarilla);
    var apLA8 = L.marker([-17.377813,-66.144528],{icon:customIcon}).addTo(lineaAmarilla);
    var apLA9 = L.marker([-17.374838,-66.136054],{icon:customIcon}).addTo(lineaAmarilla);
    var apLA10 = L.marker([-17.375876,-66.130358],{icon:customIcon}).addTo(lineaAmarilla);
    var apLA11 = L.marker([-17.379100,-66.126010],{icon:customIcon}).addTo(lineaAmarilla);
    var emCLA = L.marker([-17.385848,-66.121786],{icon:customIcon}).addTo(lineaAmarilla);
