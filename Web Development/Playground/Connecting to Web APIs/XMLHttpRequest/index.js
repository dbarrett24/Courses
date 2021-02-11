let request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products');

request.onload = function(){
    let response = request.response;
    let parsedData = JSON.parse(response);
    console.log(parsedData);
}

request.send();