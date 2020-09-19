/* var ajax = new XMLHttpRequest();
ajax.open("POST", "http://localhost:5759/role/create", true);
ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
ajax.send(JSON.stringify({ "description": "testando exeternal file" }));
 */
alert(window.screen.availWidth)
alert(window.screen.availHeight)
alert('hello world')

api = {
    getAjax (){
        var ajax;
        if(ajax == null){
           ajax = new XMLHttpRequest();
        }
        return ajax;
    }, 
    post(json) {
        var ajax = this.getAjax();
        ajax.open("POST", "http://localhost:5759/role/create", true);
        ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        ajax.onreadystatechange = async function () {

            if (ajax.readyState == 4 && ajax.status == 200) {

                var { id } = JSON.parse(ajax.response);
                // Retorno do Ajax
                $gameVariables._data[4] = id;
                console.log("response da api, id = ", $gameVariables._data[4]);

            }

        }
        ajax.send(JSON.stringify(json));

    },
    get(){
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

        }

    }
    
}