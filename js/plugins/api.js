

/*:
 
  @plugindesc teste de plugin
  @author hunters
 
  @help This plugin does not provide plugin commands.
 
  @param baseurl
  @desc this is baseurl to api
  @type text
  @default hello world!

  @param token
  @desc token do usuario para comunicação com api
  @type text

 */
    
  var manager = manager ||  {};
  manager.MadeWithMV = {};
  manager.MadeWithMV.Parameters = PluginManager.parameters('api');
  
  

  api = {
    responseLogin(json){
      
    },
    getAjax() {
      var ajax;
      if (ajax == null) {
        ajax = new XMLHttpRequest();
      }
      return ajax;
    },
    login(json){
      alert("body: " + JSON.stringify(json))
      fetch(`${manager.MadeWithMV.Parameters['baseurl']}/auth`, {
        method: "POST",
        body: JSON.stringify(json),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => {
        $gameVariables._data[97] = 1
        alert(json);
        if(json.status != 200){
          $gameVariables._data[99] = 0;
        }
        if(json.token){
          $gameVariables._data[99] = 1;
          manager.MadeWithMV.Parameters['token'] = "Bearer " + json.token;
        }
      })
      .catch(err => {
        $gameVariables._data[97] = 1
        $gameVariables._data[99] = 0
        alert(err)
      });
      /*var ajax = this.getAjax();
      ajax.open("POST", `${manager.MadeWithMV.Parameters['baseurl']}/auth`, true);
      ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
      ajax.onreadystatechange = async function () {
        $gameVariables._data[97] = 1;
        if (ajax.readyState == 4 && ajax.status == 200) {
          var response = JSON.parse(ajax.response);
          // Retorno do Ajax
         // $gameVariables._data[20] = response;
          manager.MadeWithMV.Parameters['token'] = "Bearer " + response.token;
          $gameVariables._data[99] = 1;
         alert(JSON.stringify(ajax));
          console.log("response da api,  ", JSON.parse(ajax.response));
          console.log("novo token: " , manager.MadeWithMV.Parameters['token'] );
        }else{
         alert(JSON.stringify(ajax.response));
        }
      };
      ajax.send(JSON.stringify(json));*/
    },
    post(json) {
      fetch(`${manager.MadeWithMV.Parameters['baseurl']}/respostas`, {
        method: "POST",
        body: JSON.stringify(json),
        headers: {"Content-type": "application/json; charset=UTF-8",
          "Authorization" : `${manager.MadeWithMV.Parameters['token']}`}
      
      }).then(response => response.json()) 
      .then(json => {
        console.log(json);
      })
      .catch(err => console.log(err));
     /* var ajax = this.getAjax();
      ajax.open("POST", `${manager.MadeWithMV.Parameters['baseurl']}/respostas`, true);
      ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
      ajax.setRequestHeader("Authorization", `${manager.MadeWithMV.Parameters['token']}`);
      ajax.onreadystatechange = async function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
          var response = JSON.parse(ajax.response);
          // Retorno do Ajax
          $gameVariables._data[20] = response;
          console.log("response da api,  ", JSON.parse(ajax.response));
        }
      };
      ajax.send(JSON.stringify(json));*/
    },
    get() {
      console.log("veio no get api");
      var ajax = this.getAjax();
      ajax.open("GET", "http://localhost:5759/role", true);
      ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
      ajax.send();
      ajax.onreadystatechange = function () {
        // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
        if (ajax.readyState == 4 && ajax.status == 200) {
          var data = JSON.parse(ajax.response);
          // Retorno do Ajax
          console.log(data);
        }
      };
    },
  };
/* var ajax = new XMLHttpRequest();
ajax.open("POST", "http://localhost:5759/role/create", true);
ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
ajax.send(JSON.stringify({ "description": "testando exeternal file" }));
 */