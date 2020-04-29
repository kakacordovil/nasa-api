var app = document.getElementById('nasa');

var container = document.createElement('div');
container.setAttribute('class', 'container');



app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=ra3g9Zpf9fYkFXsACuWxbf6D5hkyVfD9w4SNRIKM', true)

request.onload = function() {

    var data = JSON.parse(request.response)

    if (request.readyState ===4 && (request.status>= 200 && request.status < 400)) {
        var field = document.createElement('div');

        var h1 = document.createElement('h1');
        h1.innerHTML = data.title;

        var p = document.createElement('p');
        p.innerHTML = data.explanation;


        var myImage = document.createElement('img');
        myImage.src = data.url;



      container.appendChild(field);
      field.appendChild(h1);
      field.appendChild(p);
      field.appendChild(myImage);

    } else {
    var errorMessage = document.createElement('marquee');
    errorMessage.textContent = `It's not working!`;
    app.appendChild(errorMessage);
  }

 
    

}
request.send();