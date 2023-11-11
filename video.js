/**********DURACION DE VIDEO********* */
    window.addEventListener('load', ()=>{
        let video=document.querySelector("#video");
        let duracion=parseFloat(video.duration)
            
        let minutos=0;
        let segundos=0

    const cargaVideo=()=>{
        
            minutos=parseInt(duracion/60)
            segundos=parseInt(duracion%60)
            let textoMinutos=document.querySelector("#minutos")
            textoMinutos.textContent=minutos
            let textoSegundos=document.querySelector("#segundos")
            textoSegundos.textContent=segundos
    }
        cargaVideo()
        
}) 

/****CREACION PLAY DE VIDEO******** */

const playVideo=()=>{
    video.play()
}

/**********CREACION PAUSA DE VIDEO****** */
const pausaVideo=()=>{
    video.pause()
}


