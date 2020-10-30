
function getmovies(){

        return "Hello"

}


let  getmovie = async function (murl){
 let movie =    
           await fetch(murl).
        then(response => {
              //Varify the response
              if(!response.ok)
              {
              throw Error("Error!!!!!");  
              }
              return response.json();

        }).then(data => {
            
            return data;
       });
    console.log(movie)
       return movie;       
}

function getCharacters(){
    
    //fetching the API 
    fetch('https://swapi.dev/api/people/')
        .then(responseFromAPI => {
            //Varify the response
            if(!responseFromAPI.ok)
            {
              throw Error("Error!!!!!");  
            }
            return responseFromAPI.json();
        })


        .then(data => {
            console.log(data)
            const outputData = data.results.map(character =>{
                var s =  getmovie(character.films[0]);
                console.log(s);

                return `
                    <div class="people">
                        <p>Name: ${character.name}</p>
                        <p>Height: ${character.height}</p>
                        <p>Mass: ${character.mass}</p>
                        <p>Hair Color: ${character.hair_color}</p>
                        <p>Skin color: ${character.skin_color}</p>
                        <p>Eye Color: ${character.eye_color}</p>
                        <p>Date of Birth: ${character.birth_year}</p>
                        <p>Gender: ${character.gender}</p>
                        <p>Played in films: ${s}</p>
                        <p>Created: ${character.created}</p>
                        <p>Edited ${character.edited}</p>

                    </div>
                `;
            })
            .join('');
            document.querySelector('#app').innerHTML = outputData;
        })


        .catch(error => {
            console.log(error)
        })

}

getCharacters();
