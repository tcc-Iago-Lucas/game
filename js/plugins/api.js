/* var ajax = new XMLHttpRequest();
ajax.open("POST", "http://localhost:5759/role/create", true);
ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
ajax.send(JSON.stringify({ "description": "testando exeternal file" }));
 */

 api =  {
    
     post(json) {
        var ajax = new XMLHttpRequest();
        ajax.open("POST", "http://localhost:5759/role/create", true);
        ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        ajax.onreadystatechange = function () {

            if (ajax.readyState == 4 && ajax.status == 200) {

                var {id} = JSON.parse(ajax.response);
                // Retorno do Ajax
                $gameVariables._data[4] = id;
                console.log("response da api, id = " , $gameVariables._data[4]);
                
            }
            
        }
        ajax.send(JSON.stringify(json));
        
    },
    teste(){
        return 99;
    }
}