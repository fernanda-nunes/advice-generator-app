
const upButton = document.querySelector(".advice-update");
const numberid = document.querySelector(".advice-id");
const description = document.querySelector(".advice-description");

async function adviceApp() {

    try{

    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url);
    
    if(!response.ok){
        throw new Error ("Ocorreu um erro, mas sorria e o mundo sorrirá com você. Faça cara feia e você estará sozinho.");
    }

    const slipObjeto = await response.json();  
    const adviceid = `Advice #${slipObjeto.slip.id}`;
    const adviceText = `"${slipObjeto.slip.advice}"`;

    numberid.innerText = adviceid;
    description.innerText = adviceText;

    } catch(error) { 
           console.error("Ocorreu um erro, mas sorria e o mundo sorrirá com você. Faça cara feia e você estará sozinho.", error);
        }
}

upButton.addEventListener("click", adviceApp);
   
   adviceApp()


