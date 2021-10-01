
function inputTask(){
  var inputTASK = document.getElementById("Task").value;
  var inputTaskUpper= inputTASK.toUpperCase();
  //document.getElementById("H4task").innerHTML = inputTASK.value;
  document.getElementById("H4task").innerHTML = inputTaskUpper;
  console.log(inputTASK.value);
  cleaninputTask();
}



function cleaninputTask(){
  var inputTaskCahnge = document.getElementById("Task");
  inputTaskCahnge.value = " ";
  console.log("clean");

}


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
    
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
function inner25(){
    document.getElementById('timer').innerHTML = 25 + ":" + 00;
    startTimer();
    myFunctionretraso();
    playAudio();
    ExecuteScript();
    Functionretrasomp3();
  
}

// inner 30

  function inner30(){
      document.getElementById('timer').innerHTML = 30 + ":" + 00;
      startTimer();
      retrazo30();
      playAudio();
      Functionretrasomp4();
  }



// inner 35

  function inner35(){
      document.getElementById('timer').innerHTML = 35 + ":" + 00;
      startTimer();
      retrazo35();
      playAudio();
      Functionretrasomp5();

  }

  // descanso
  function startTimer2() {
    var presentTime2 = document.getElementById('timer2').innerHTML;
    var timeArray2 = presentTime2.split(/[:]+/);
    var m = timeArray2[0];
    var s = checkSecond((timeArray2[1] - 1));
    if(s==59){m=m-1}
    if(m<0){
      return
      
    }
    
    document.getElementById('timer2').innerHTML =
      m + ":" + s;
    console.log(m)
    setTimeout(startTimer2, 1000);
    
  }
  
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }

  var myVar;

function myFunctionretraso() {
  myVar = setTimeout(inner3, 1500000);
}
  function inner3(){
      document.getElementById('timer2').innerHTML = 5 + ":" + 00;
      startTimer2();
  }
  
 var var30;
  function retrazo30(){
    var30 = setTimeout(inner3, 1801000);

  }

  var var35;
  function retrazo35(){
    var35 = setTimeout(inner3, 2101000);

  }


  // musica
  var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

var retrzomp3;
function Functionretrasomp3() {
  myVar = setTimeout(pauseAudio, 1800000 );
}
function pauseAudio() { 
  x.pause(); 
} 


// oclutar y mostrar Preguntas
function muestra_oculta(id){
  if (document.getElementById){ //se obtiene el id
  var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
  el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
  }
  }
  window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
  muestra_oculta('cont1Faq');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
  }

function muestra_oculta2(id){
      if (document.getElementById){ //se obtiene el id
      var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
      el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
      }
      }
      window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
      muestra_oculta2('cont2Faq');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
      }
function muestra_oculta3(id){
          if (document.getElementById){ //se obtiene el id
          var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
          el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
          }
          }
          window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
          muestra_oculta3('cont3Faq');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
          }

function muestra_oculta4(id){
              if (document.getElementById){ //se obtiene el id
              var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
              el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
              }
              }
              window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
              muestra_oculta4('cont4Faq');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
              }

function muestra_oculta5(id){
                  if (document.getElementById){ //se obtiene el id
                  var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
                  el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
                  }
                  }
                  window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
                  muestra_oculta4('cont5Faq');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
                  }
 function muestra_oculta6(id){
                    if (document.getElementById){ //se obtiene el id
                    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
                    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
                    }
                    }
                    window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
                    muestra_oculta6('cont6Faq');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
                    }
function Functionretrasomp4() {
  retrzomp4 = setTimeout(pauseAudio, 2100000 );
}
function pauseAudio() { 
  x.pause(); 
} 
function Functionretrasomp5() {
  retrzomp4 = setTimeout(pauseAudio, 2400000 );
}
function pauseAudio() { 
  x.pause(); 
} 



// direccionar web

function mostar() {
  window.scrollTo(0, 0);
  }

function ExecuteScript() {
  window.scrollTo(0, 700);
  }