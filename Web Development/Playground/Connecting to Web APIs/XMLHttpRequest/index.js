let request = new XMLHttpRequest();

request.open("GET", "https://hplussport.com/api/products?&order=name");

request.onload = function () {
  let response = request.response;
  let parsedData = JSON.parse(response);
  console.log(parsedData);

  for (item in parsedData) {
    //List items in products
    let name = parsedData[item].name;
    let products = document.createElement("li");
    products.innerHTML = name;
    document.body.appendChild(products);

    //set images from that image on the api
    let imageUrl = parsedData[item].image;
    let images = document.createElement("img");
    images.setAttribute("src", imageUrl);
    document.body.appendChild(images);
  }
};

request.send();
