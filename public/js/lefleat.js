var localizacion = L.map('localizacion').setView([-17.409864,-66.154264], 14);
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ').addTo(localizacion);

// Ruta Linea Roja
    var lineaRoja = omnivore.kml('/lineaRoja.kml')
    .on('ready', function() {
        this.setStyle({color: "red",
                        weight: 4});
    })
    .addTo(localizacion);

// Ruta Linea Verde
    var lineaVerde= omnivore.kml('/lineaVerde.kml')
    .on('ready', function() {
        this.setStyle({color: "green",
                        weight: 4});
    })
    .addTo(localizacion);

//Ruta Linea Amarilla
    var lineaAmarilla = omnivore.kml('/lineaAmarilla.kml')
    .on('ready', function() {
        this.setStyle({color: "yellow",
                        weight: 4});
    })
    .addTo(localizacion);


$(document).ready(function(){
  var apLR1 ,apLR2, apLR3, apLR4, apLR5, apLR6, emALR;

    $('#plroja').click(function() {
        if($(this).prop('checked')) {
          //////////////////////////////////////////////LINEA ROJA ////////////////////////////////////////////
          //Apeaderos y Estaciones Municipales Linea ROJA
          var customIcon = new L.icon({
            iconUrl: '/img/iconosTren/trenRojo.jpg',
            iconSize: [30, 30],
            iconAnchor: [10, 20]
          });
              apLR1 = L.marker([-17.423557,-66.154213],{icon:customIcon}).bindPopup("<p>Primer Apeadero</p>").addTo(lineaRoja);
              apLR2 = L.marker([-17.428752,-66.152231],{icon:customIcon}).addTo(lineaRoja);
              apLR3 = L.marker([-17.434085,-66.148597],{icon:customIcon}).addTo(lineaRoja);
              apLR4 = L.marker([-17.440185,-66.144411],{icon:customIcon}).addTo(lineaRoja);
              apLR5 = L.marker([-17.444695,-66.139497],{icon:customIcon}).addTo(lineaRoja);
              apLR6 = L.marker([-17.447257,-66.135061],{icon:customIcon}).addTo(lineaRoja);
              emALR = L.marker([-17.451484,-66.129807],{icon:customIcon}).addTo(lineaRoja);
            $(this).attr("checked", returnVal);
        }
        else{

          localizacion.removeLayer(apLR1);
          localizacion.removeLayer(apLR2);
          localizacion.removeLayer(apLR3);
          localizacion.removeLayer(apLR4);
          localizacion.removeLayer(apLR5);
          localizacion.removeLayer(apLR6);
          localizacion.removeLayer(emALR);
        }

    });

    var apLV1 ,apLV2, apLV3, apLV4, apLV5, apLV6, apLV7, apLV8, emCLV, apLV9, apLV10, apLV11, emQLV, apLV12, apLV13, emVLV,apLV14,
    apLV15, apLV16, apLV17, apLV18, apLV19, emSLV;

      $('#plverde').click(function() {
          if($(this).prop('checked')) {
            //////////////////////////////////////////////LINEA VERDE ////////////////////////////////////////////
            //Apeaderos y Estaciones Municipales Linea Verde
            var customIcon = new L.icon({
              iconUrl: '/img/iconosTren/trenVerde.jpg',
              iconSize: [30, 30],
              iconAnchor: [10, 20]
            });
            apLV1 = L.marker([-17.411181,-66.160965],{icon:customIcon}).addTo(lineaVerde);
            apLV2 = L.marker([-17.407460,-66.168681],{icon:customIcon}).addTo(lineaVerde);
            apLV3 = L.marker([-17.402330,-66.178730],{icon:customIcon}).addTo(lineaVerde);
            apLV4 = L.marker([-17.400481,-66.187593],{icon:customIcon}).addTo(lineaVerde);
            apLV5 = L.marker([-17.400252,-66.195687],{icon:customIcon}).addTo(lineaVerde);
            apLV6 = L.marker([-17.399869,-66.208942],{icon:customIcon}).addTo(lineaVerde);
            apLV7 = L.marker([-17.399556,-66.219941],{icon:customIcon}).addTo(lineaVerde);
            apLV8 = L.marker([-17.399275,-66.229841],{icon:customIcon}).addTo(lineaVerde);
            emCLV = L.marker([-17.399067,-66.243200],{icon:customIcon}).addTo(lineaVerde);
            apLV9 = L.marker([-17.398624,-66.252467],{icon:customIcon}).addTo(lineaVerde);
            apLV10 = L.marker([-17.398780,-66.265791],{icon:customIcon}).addTo(lineaVerde);
            apLV11 = L.marker([-17.400887,-66.274170],{icon:customIcon}).addTo(lineaVerde);
            emQLV = L.marker([-17.402045,-66.281871],{icon:customIcon}).addTo(lineaVerde);
            apLV12 = L.marker([-17.401825,-66.292619],{icon:customIcon}).addTo(lineaVerde);
            apLV13 = L.marker([-17.401614,-66.302210],{icon:customIcon}).addTo(lineaVerde);
            emVLV = L.marker([-17.399049,-66.316700],{icon:customIcon}).addTo(lineaVerde);
            apLV14 = L.marker([-17.403291,-66.323413],{icon:customIcon}).addTo(lineaVerde);
            apLV15 = L.marker([-17.414732,-66.326116],{icon:customIcon}).addTo(lineaVerde);
            apLV16 = L.marker([-17.431251,-66.327583],{icon:customIcon}).addTo(lineaVerde);
            apLV17 = L.marker([-17.440633,-66.328303],{icon:customIcon}).addTo(lineaVerde);
            apLV18 = L.marker([-17.453536,-66.330061],{icon:customIcon}).addTo(lineaVerde);
            apLV19 = L.marker([-17.464400,-66.331360],{icon:customIcon}).addTo(lineaVerde);
            emSLV = L.marker([-17.472144,-66.332013],{icon:customIcon}).addTo(lineaVerde);
              $(this).attr("checked", returnVal);
          }
          else{

            localizacion.removeLayer(apLV1);
            localizacion.removeLayer(apLV2);
            localizacion.removeLayer(apLV3);
            localizacion.removeLayer(apLV4);
            localizacion.removeLayer(apLV5);
            localizacion.removeLayer(apLV6);
            localizacion.removeLayer(apLV7);
            localizacion.removeLayer(apLV8);
            localizacion.removeLayer(emCLV);
            localizacion.removeLayer(apLV9);
            localizacion.removeLayer(apLV10);
            localizacion.removeLayer(apLV11);
            localizacion.removeLayer(emQLV);
            localizacion.removeLayer(apLV12);
            localizacion.removeLayer(apLV13);
            localizacion.removeLayer(emVLV);
            localizacion.removeLayer(apLV14);
            localizacion.removeLayer(apLV15);
            localizacion.removeLayer(apLV16);
            localizacion.removeLayer(apLV17);
            localizacion.removeLayer(apLV18);
            localizacion.removeLayer(apLV19);
            localizacion.removeLayer(emSLV);
          }

      });

      var apLA1 ,apLA2, apLA3, apLA4, apLA5, apLA6, apLA7, apLA8, apLA9, apLA10, apLA11, emCLA;

        $('#plamarilla').change(function() {
            if($(this).prop('checked')) {
              //////////////////////////////////////////////LINEA AMARILLA ////////////////////////////////////////////
              //Apeaderos y Estaciones Municipales Linea Amarilla
              var customIcon = new L.icon({
                iconUrl: '/img/iconosTren/trenAmarillo.jpg',
                iconSize: [30, 30],
                iconAnchor: [10, 20]
              });
              apLA1 = L.marker([-17.411096,-66.160857],{icon:customIcon}).addTo(lineaAmarilla);
              apLA2 = L.marker([-17.407579,-66.168163],{icon:customIcon}).addTo(lineaAmarilla);
              apLA3 = L.marker([-17.400474,-66.168282],{icon:customIcon}).addTo(lineaAmarilla);
              apLA4 = L.marker([-17.394434,-66.167115],{icon:customIcon}).addTo(lineaAmarilla);
              apLA5 = L.marker([-17.387307,-66.164413],{icon:customIcon}).addTo(lineaAmarilla);
              apLA6 = L.marker([-17.382318,-66.161593],{icon:customIcon}).addTo(lineaAmarilla);
              apLA7 = L.marker([-17.379724,-66.152548],{icon:customIcon}).addTo(lineaAmarilla);
              apLA8 = L.marker([-17.377813,-66.144528],{icon:customIcon}).addTo(lineaAmarilla);
              apLA9 = L.marker([-17.374838,-66.136054],{icon:customIcon}).addTo(lineaAmarilla);
              apLA10 = L.marker([-17.375876,-66.130358],{icon:customIcon}).addTo(lineaAmarilla);
              apLA11 = L.marker([-17.379100,-66.126010],{icon:customIcon}).addTo(lineaAmarilla);
              emCLA = L.marker([-17.385848,-66.121786],{icon:customIcon}).addTo(lineaAmarilla);
                $(this).attr("checked", returnVal);
            }
            else{

              localizacion.removeLayer(apLA1);
              localizacion.removeLayer(apLA2);
              localizacion.removeLayer(apLA3);
              localizacion.removeLayer(apLA4);
              localizacion.removeLayer(apLA5);
              localizacion.removeLayer(apLA6);
              localizacion.removeLayer(apLA7);
              localizacion.removeLayer(apLA8);
              localizacion.removeLayer(apLA9);
              localizacion.removeLayer(apLA10);
              localizacion.removeLayer(apLA11);
              localizacion.removeLayer(emCLA);
            }

        });
});
