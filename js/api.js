var searchApi = 'https://api.giphy.com/v1' /* BUSCAR GIF */
var postApi = 'https://upload.giphy.com/v1/gifs' /* ENVIAR GIFs */
var keyGiphy = 'pjxv2xlP5cKfW7zo3DrZ2awHmnL1Kdf6'

function callApi (url, method, data=null) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (method == 'GET'){
        showData(this.response);
      } 
    }
  };
  xmlhttp.open( method, url, true);
  console.log(data);
  xmlhttp.send(data);
}

function getData () {
  var valueInput = document.getElementById('input-search').value
  /* cheeseburgers */
  callApi( searchApi + '/gifs/search?api_key=' + keyGiphy+ '&q= '+ valueInput +' &limit=25&offset=0&rating=g&lang=en', 'GET')
}

function postData () {
  var urlImage = document.getElementById('imageGif').src
  saveStorage(urlImage)
  var imageStorage = getStorage()
  console.log(imageStorage);
  document.getElementById('mygif').src = imageStorage
  var ojGif = {
    file: urlImage,
    api_key: keyGiphy,
    tags: 'meligif',
    username: 'meligre23'
  }
  callApi( postApi , 'POST' , ojGif )
}

function showData (listData) {
  var parseListData = JSON.parse(listData);
  var response = '<td>'
    response = '<div class="wrap-list">'

    var init = 0;
    for (let index = 0; index < parseListData.data.length; index++) {

      if (init == '0') {
        response += '<div class="row">'
      }
          response+= '<div class="col-3">'
            response+= '<h4>'+parseListData.data[index].title+'</h4>'
            response+= '<iframe src="'+parseListData.data[index].embed_url+'" width="100%" height="300px"style=" style="overflow:hidden" scrolling="no" frameborder ="0" > </iframe>'
          response+= '</div>'

      init++
      if (init == '4') {
        response += '</div>'
        init = 0
      }

    }

    response+= '</ul>'
  response+= '</td>'
  document.getElementById('listGif').innerHTML = response 
}
