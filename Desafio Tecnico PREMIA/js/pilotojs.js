
var section = document.querySelector('section');
var requesturl  = 'https://swapi.dev/api/people/?format=json';
var request = new XMLHttpRequest();
request.open('GET', requesturl);
request.responseType = 'json';
request.send();
request.onload = function() {
    var superpilotinhos = request.response;
    Pilotos(superpilotinhos);
  }

 

  function Pilotos(jsonObj) {
    var pilotinhos = jsonObj['results'];
  
    for (var i = 0; i < pilotinhos.length; i++) {
      var myArticle = document.createElement('table');
      var myH1 = document.createElement('h5');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var myPara5 = document.createElement('p');
      var myPara6 = document.createElement('p');

  
      myH1.textContent = pilotinhos[i].name;
      myPara1.textContent = 'Nome: ' + pilotinhos[i].name;
      myPara2.textContent = 'Altura: ' + pilotinhos[i].height + 'cm';
      myPara3.textContent = 'peso:' + pilotinhos[i].mass + 'Kg';
      myPara4.textContent = 'Cor de cabelo: ' + pilotinhos[i].hair_color;
      myPara5.textContent = 'Data de nascimento: ' + pilotinhos[i].birth_year;
      myPara6.textContent = 'Gênero:' + pilotinhos[i].gender;
  
   
  
      myArticle.appendChild(myH1);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      myArticle.appendChild(myPara6);

      section.appendChild(myArticle);
      
    }
  
      
  }
  
  