/* TOMANDO VALORES */

const destino=document.querySelector("#primerDestino")
const primerImagen=document.querySelector("#primerImagen")


const segundaImagen=document.querySelector("#segundaImagen")
const destino2=document.querySelector("#segundoDestino")


const tercerImagen=document.querySelector("#tercerImagen")
const destino3=document.querySelector("#tercerDestino")



/* IMAGEN A TRASLADAR */
primerImagen.addEventListener('dragstart', (event)=>{
    console.log("Se empezo a mover la primer imagen")   
    event.dataTransfer.setData('Text', "./Imagenes/rompe3.png")
})

segundaImagen.addEventListener('dragstart', (event)=>{
       // console.log("Se empezo a mover la segunda imagen")
       event.dataTransfer.setData('Text', "./Imagenes/rompe2.png")
   })

   tercerImagen.addEventListener('dragstart', (event)=>{
       // console.log("Se empezo a mover la tercer imagen")
       event.dataTransfer.setData('Text', "./Imagenes/rompe1.png")
   })

/** DESTINO DE LA IMAGEN ****************************/



destino.addEventListener('dragover', (e)=>{
//     console.log("Se esta moviendo el elemento en PRIMER recuadro")   
    e.preventDefault();
})

destino.addEventListener('drop', (evento1)=>{
       // console.log("Se solto la imagen en el PRIMER recuadro")   
//  if ()
    let dataPrimerImagen=evento1.dataTransfer.getData('Text')

    destino.innerHTML=`<img id="primerImagen" src="${dataPrimerImagen}"/> 
    `
    if (dataPrimerImagen=="./Imagenes/rompe1.png"){
       tercerImagen.style.display="none"
} else if (dataPrimerImagen=="./Imagenes/rompe3.png"){
       primerImagen.style.display="none"
} else{
       segundaImagen.style.display="none"
}

})


destino2.addEventListener('dragover', (e)=>{
       // console.log("Se esta moviendo el elemento en SEGUNDO recuadro")   
       e.preventDefault();
   })
   
   destino2.addEventListener('drop', (evento2)=>{
       // console.log("Se solto la imagen en el SEGUNDO recuadro")
       let dataSegundaImagen=evento2.dataTransfer.getData('Text')
       destino2.innerHTML=`<img id="segundaImagen" src="${dataSegundaImagen}"/> 
       `
       console.log(dataSegundaImagen)
       if (dataSegundaImagen=="./Imagenes/rompe1.png"){
              tercerImagen.style.display="none"
       } else if (dataSegundaImagen=="./Imagenes/rompe3.png"){
              primerImagen.style.display="none"
       } else{
              segundaImagen.style.display="none"
       }
   })

   
   destino3.addEventListener('dragover', (e)=>{
       // console.log("Se esta moviendo el elemento en TERCER recuadro")   
       e.preventDefault();
   })
   destino3.addEventListener('drop', (evento3)=>{
       let dataTercerImagen=evento3.dataTransfer.getData('Text')
       destino3.innerHTML=`<img id="segundaImagen" src="${dataTercerImagen}"/> 
       `
       
       if (dataTercerImagen=="./Imagenes/rompe1.png"){
              tercerImagen.style.display="none"
       } else if (dataTercerImagen=="./Imagenes/rompe3.png"){
              primerImagen.style.display="none"
       } else{
              segundaImagen.style.display="none"
       }
   })  