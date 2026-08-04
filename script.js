// ===============================
// MENÚ MÓVIL
// ===============================


const menuButton = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});




// ===============================
// FORMULARIO DINÁMICO COTIZACIÓN
// ===============================


const servicio = document.getElementById("servicio");
const extraFields = document.getElementById("extra-fields");


// refactorizar esta webada
servicio.addEventListener("change",()=>{


    let option = servicio.value;


    extraFields.innerHTML="";


    // GRÚAS TELESCÓPICAS

    if(option==="telescopica"){


        extraFields.innerHTML=`

        <label>
        Capacidad requerida
        </label>


        <select>

            <option>
            Seleccione toneladas
            </option>

            <option>
            10 TN
            </option>

            <option>
            16 TN
            </option>

            <option>
            20 TN
            </option>

            <option>
            25 TN
            </option>

            <option>
            30 TN
            </option>

            <option>
            40 TN
            </option>

            <option>
            50 TN
            </option>

            <option>
            Más de 50 TN
            </option>


        </select>

        `;


    }




    // GRÚAS ARTICULADAS

    else if(option==="articulada"){


        extraFields.innerHTML=`

        <label>
        Capacidad requerida
        </label>


        <select>


            <option>
            Seleccione toneladas
            </option>


            <option>
            5 TN
            </option>


            <option>
            10 TN
            </option>


            <option>
            15 TN
            </option>


            <option>
            20 TN
            </option>


            <option>
            Otra capacidad
            </option>


        </select>

        `;


    }




    // TRANSPORTE

    else if(option==="transporte"){


        extraFields.innerHTML=`

        <input 
        type="text"
        placeholder="Tipo de carga">


        <input 
        type="text"
        placeholder="Peso aproximado">


        `;


    }





    // TRAILER

    else if(option==="trailer"){


        extraFields.innerHTML=`

        <input 
        type="text"
        placeholder="Tipo de carga">


        <input 
        type="text"
        placeholder="Peso aproximado">


        `;


    }





    // CAMA BAJA

    else if(option==="cama"){


        extraFields.innerHTML=`

        <input 
        type="text"
        placeholder="Tipo de maquinaria">


        <input 
        type="text"
        placeholder="Peso aproximado">


        `;


    }



});





// ===============================
// ANIMACIÓN SIMPLE AL SCROLL
// ===============================


const sections = document.querySelectorAll(".section");



window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let position = section.getBoundingClientRect().top;


let screen = window.innerHeight;


if(position < screen - 100){

    section.classList.add("show");

}


});



});

