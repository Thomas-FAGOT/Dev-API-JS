function handleClick(route) {
// Code here
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("api-rawRes");

    axios.get(url).then((res) => {
        el.innerHTML = JSON.stringify(res.data);
    }).catch((err) => {
        console.error(err.message);
        el.innerHTML = err.message;
    })
}

function handleClickPut(route) {
// Code here     
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("api-rawRes");
    let name = document.getElementById("name").value;
    let arrayDataName = {
        "name": name
    };

    axios.put(url, arrayDataName).then((res) =>{
        el.innerHTML = JSON.stringify(res.data);
    }).catch((err) => {
        console.error(err.message);
        el.innerHTML = err.message;
    })
}

function handleClickPost(route) {
    // Code here     
        let url = "http://localhost:3000/" + route;
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let arrayDataName = {
            "name": name,
            "prix": price,
        };
    
        axios.post(url, arrayDataName).then((res) =>{
            el.innerHTML = JSON.stringify(res.data);
        }).catch((err) => {
            console.error(err.message);
            el.innerHTML = err.message;
        })
    }
