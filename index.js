document.querySelector('#btn').addEventListener('click', getRandomCharacter); 

async function getRandomCharacter() {

  //fetch all the characters from the people endpoint
  // const allChars = [];
  // for (let i = 1; i <= 9; i++){
  //   const url = `https://swapi.dev/api/people/?page=${i}`;
  //   const currPageChars = await fetchChar(url);
  //   allChars.push(...currPageChars.results);
  // }
  
  // console.log(allChars); 
  const randomNum = Math.floor(Math.random() * 82)
  console.log(randomNum); 
  const url = `https://swapi.dev/api/people/${randomNum}`;
  const char = await fetchChar(url);
  console.log(char);

  const article = `<article class="card">
  <div class="container">
    <h4>${char.name}</h4> 
    <p>Height: ${char.height}</p> 
     <p>Mass: ${char.mass}</p> 
     <p>Eye Color: ${char.eye_color}</p> 
      <p>Hair Color: ${char.hair_color}</p> 
       <p>Birth Year: ${char.birth_year}</p> 
        <p>Gender: ${char.gender} </p> 

  </div>
</article>`;
  
  document.querySelector('.character').innerHTML = article;
  

  
}


async function fetchChar(url) {
  try {

    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Error fetching character status:${response.status}, ${response.statusText}`); 
    }
    const chars = await response.json(); 
    return chars; 

  } catch (error) {
    console.error(error)
  }
}

