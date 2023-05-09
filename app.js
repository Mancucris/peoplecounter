//variables
const numeroEnPantalla = document.querySelector('#number');
const agregarPersona = document.querySelector('#add');
const restarPersona = document.querySelector('#resta');
const limpiarNumero = document.querySelector('#clear');
const contenedorGeneral = document.querySelector('#contenedor');
const btnYes = document.querySelector('#yes');
const btnNo = document.querySelector('#no');
const contenedorModal = document.querySelector('#modal');
let count = 0;



/* + */

agregarPersona.addEventListener('click',() =>{

    limpiarHTML();


    // add person and write the number
    count = count + 1;
    numeroEnPantalla.innerHTML = count;

}
)



/*  - */

restarPersona.addEventListener('click',() =>{

limpiarHTML();


// if the number is 0 o less, the button be disabled.

if(count <= 0){
    restarPersona.disabled=true;

    //alert 
    const cuadroMensaje = document.createElement('div');
    cuadroMensaje.textContent="You can't delete a person";
    cuadroMensaje.classList.add("border-2","border-white","bg-red-700","px-12","py-2","rounded-lg","text-white");
    contenedor.appendChild(cuadroMensaje); 

    //the alert in 2 sec will be hidden
    setTimeout(() => {
    cuadroMensaje.classList.add('hidden');
    }, 2000)

 restarPersona.disabled=false;
}
else
{
    //-1 and write 
    count -= 1;
    numeroEnPantalla.innerHTML = count;   

}


}
)




limpiarNumero.addEventListener('click',() =>{
    
    limpiarHTML();

    if(count === 0){
        const cuadroMensaje = document.createElement('div');
        cuadroMensaje.textContent="No people";
        cuadroMensaje.classList.add("border-2","border-white","bg-red-700","px-12","py-2","rounded-lg","text-white");
        contenedor.appendChild(cuadroMensaje); 
    } else{
        showModal(); 
    }
}
)





/* remove firts child*/

function limpiarHTML(){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}




/* MODAL */
function showModal(){

    limpiarHTML();


    //when the user press clic, the modal change to visible.
    contenedorModal.classList.remove('hidden');
    agregarPersona.disabled =true; 
    restarPersona.disabled =true; 
    limpiarNumero.disabled =true; 

    btnYes.addEventListener('click',()=>{
    limpiarHTML();
    count = 0;
    numeroEnPantalla.innerHTML = count;


    //alert 
    const cuadroMensaje = document.createElement('P');
    cuadroMensaje.textContent="Reset Counter";
    cuadroMensaje.classList.add("border-2","border-white","bg-gray-400","px-12","py-2","rounded-lg","text-white");
    contenedor.appendChild(cuadroMensaje);

    //the alert in 2 sec will be hidden.
        setTimeout(() => {
        cuadroMensaje.classList.add('hidden');
     }, 2000);

     contenedorModal.classList.add('hidden');

    agregarPersona.disabled =false; 
    restarPersona.disabled =false; 
    limpiarNumero.disabled =false; 

      
    })

    btnNo.addEventListener('click',()=>{
    
        contenedorModal.classList.add('hidden');

        agregarPersona.disabled =false; 
        restarPersona.disabled =false; 
        limpiarNumero.disabled =false; 
    })

}







