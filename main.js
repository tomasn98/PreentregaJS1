//alert()




function cuestionarioSayain(){

    //MENSAJE DE INICIO
    let mensaje
    do {
        mensaje = prompt("Bienvenido Sayain, te haremos unas 5 preguntas para ver si estas listo, escribe ssj para comenzar").toLowerCase()
            if (mensaje == "ssj") {
                alert("excelente!, comenzemos y veamos tu potencial")
            
            } else {
                alert("por lo visto eres de la fuerza de freezer, largo de aqui")
            
            }
        
    } while (mensaje !=="ssj" )

    //PREGUNTA UNO

    let preguntaUno
    do {
        preguntaUno = Number(prompt("¿cuantas son las esferas del dragon?"))
            if (preguntaUno == 7) {
                    alert("Correcto! continuemos")
                
            } else {
                    alert("incorrecto no sos digno de ser sayain,vuelve a intentarlo nuevamente")
                
            }

        
    } while (preguntaUno !== 7);

    //PREGUNTA DOS

    let preguntaDos
    do {
        preguntaDos = prompt("¿quien es el dios de la destruccion?").toLowerCase()
        if (preguntaDos === "bills"){
            alert("correcto!, tene cuidado con ese sujeto, jeje... continuemos")
        } else{
            alert("incorrecto, no sos digno de ser un sayain, vuelve a internarlo nuevamente")
        }
        
    } while (preguntaDos !== "bills");
     

     //PREGUNTA TRES

     let preguntaTres
     do {
        preguntaTres = Number(prompt("¿Cuantas veces mataron a krilin (sin contar GT , no es canon )"))
        if (preguntaTres === 3 ) {
            alert("correcto!, que mala suerte tiene ese krilin")

            
        } else {
            alert("incorrecto!, vuelve a intentarlo")
            
        }
        
     } while (preguntaTres !==3) 
        

     //PREGUNTA CUATRO

     let preguntaCuatro
     do {
        preguntaCuatro = prompt("¿Cual es la transformacion mas fuerte de goku?").toLowerCase()
        if (preguntaCuatro === "ultra instinto") {
            alert("correcto!, estas a una pregunta de terminar el cuestionario")
            
        } else {
            alert("Incorrecto, Vuelve a intentarlo nuevamente")
            
        }
        
     } while (preguntaCuatro !== "ultra instinto");

     //PREGUNTA CINCO

     let preguntaCinco

     do {
        preguntaCinco = prompt("¿cual es el super sayain legendario?").toLowerCase()
        if (preguntaCinco === "broly") {
            alert ("Felicidades Has terminado el cuestionario!!!, eres un digno sayain")
            
        } else {
            alert ("Respuesta incorrecta, vuelva a intentarlo")
            
        }
     } while (preguntaCinco !== "broly");

}

cuestionarioSayain()
