fetch('https://hplussport.com/api/products')
.then(function(response){
    return response.json();
}).then(function(responseData){
    console.log(responseData);
})