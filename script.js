
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://teamtreehouse.com/javierpons.json');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    crearBarra(ourData);
  };
  ourRequest.send();

  function crearBarra(json){
    //var progress = json.points.PHP * 100 / json.points.total;
    //$(".progreso").css('width', progress + '%');
    $('.titulo').append('Puntos Totales = ' + json.points.total);
    for (var x in json.points) {
      if (json.points.hasOwnProperty(x)) {
        var val = json.points[x];
        var porcentaje = val * 100 / json.points.total;
        if ( val > 800 && porcentaje < 100) {

          var progress = val * 100 / json.points.total;
          $('.cont').append('<div class="barra"><div class="progreso ' + x.replace(/\s/g,'') +'"></div></div><div class="texto">' +x+ '</div><div class="clearfix"></div>');
          $("." + x.replace(/\s/g,'')).css('width', progress + 20 + '%');

            //console.log(x);

            //<div class="line stripesLoader" style="background-position:90%; background-color:orange"></div>
        }
      }
    }

  }
