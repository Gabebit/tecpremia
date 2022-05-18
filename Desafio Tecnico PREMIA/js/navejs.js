

var section = document.querySelector('.estilo');
var requesturl  = 'https://swapi.dev/api/starships/?format=json';
var request = new XMLHttpRequest();
request.open('GET', requesturl);
request.responseType = 'json';
request.send();
request.onload = function() {
  
    var naves = request.response;
    navemae(naves);
  }

 

  function navemae(jsonObj) {
    var navefilho = jsonObj['results'];
    
    
      for (var i = 0; i < navefilho.length; i++) { 
        
        var myArticle = document.createElement('table');
        var myH1 = document.createElement('h5');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('div');
        
        
        
      myH1.textContent = navefilho[i].name;
      myPara1.textContent = 'Nome: ' + navefilho[i].name;
      myPara2.textContent = 'Modelo: ' + navefilho[i].model;
      myPara3.textContent = 'Tamanho:' + navefilho[i].length;
      myPara4.textContent = 'Classe: ' + navefilho[i].starship_class;
      

    //vincula os filhos a myarticle
      myArticle.appendChild(myH1);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myList);
      section.appendChild(myArticle);
        
      


    }
  
       
   
   
      
  }
  
  