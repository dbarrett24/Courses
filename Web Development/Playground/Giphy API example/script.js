fetch('https://api.giphy.com/v1/gifs/random?api_key=F1tikN5Vyjv4HvSnK4jbgNJbqHSjVhXJ')
.then(function(response){
    return response.json();
}).then(function(responseData){
    console.log(responseData);

    let originalUrl = responseData.data.images.original.url;
    let gif = document.createElement("img");
    gif.setAttribute("src", originalUrl);
    document.body.appendChild(gif);
})