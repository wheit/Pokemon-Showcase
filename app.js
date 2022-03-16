let cardImg=document.querySelector(".card-img")
let name=document.querySelector(".name")
let ability=document.querySelector('.ability')
let generateBtn=document.querySelector('.submit-btn')

generateBtn.addEventListener("click", e=> {
    e.preventDefault();

    let id=document.querySelector('.search-input').value;

    async function getPokemon(){
        const res=  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data= await res.json ()
        console.log(data);
            let img =data.sprites.front_default;
            let newName=data.name;
            let newAbility=data.abilities[0].ability.name;


            newName=newName.charAt(0).toUpperCase()+ newName.slice(1);
            name.innerText=newName;
            
            newAbility=newAbility.charAt(0).toUpperCase()+ newAbility.slice(1);
            ability.innerText=newAbility;

            cardImg.innerHTML=`<img src=${img}>`

    }
    getPokemon()
    
});