const apboton = document.getElementById('apiboton');
const apiData = document.getElementById('apidata')
const callAPI = () =>{
   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
   .then(res => res.json())
   .then(data => {
    apiData.innerText = JSON.stringify(data);
   })
   .catch(e => console.error(new Error(e)));
}
apboton.addEventListener('click', callAPI);