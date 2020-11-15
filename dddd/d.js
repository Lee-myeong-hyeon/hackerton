var div2 = document.getElementsByClassName('div2');

    for (var i = 0; i < div2.length; i++) {
      div2[i].addEventListener('click', function(){
        for (var j = 0; j < div2.length; j++) {
          div2[j].style.color = "black";
        }
        this.style.color = "gold";
      })
    }
