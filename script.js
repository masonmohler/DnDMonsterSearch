const monsterResult = document.getElementById("result");

async function getMonster() {
  const monster = document.getElementById("monsterGet").value;

  if (!monster) {
    alert("Please enter a monster name.");
    return;
  }

  const endpoint = new URL(`https://www.dnd5eapi.co/api/monsters/${monster}`);

  const response = await fetch(endpoint);

  const data = await response.json();

  console.log(data);

  const monsterImage = new URL(`https://www.dnd5eapi.co${data.image}`);

  monsterResult.innerHTML = `
  <h2>Monster Data:</h2>
  <img src=${monsterImage} alt="">
  <ul>
    <li>Name: ${data.name}</li>
    <li>CR: ${data.challenge_rating}</li>
    <li>AC: ${data.armor_class[0].value}</li>
    <li>Hitpoints: ${data.hit_points}</li>
    <li>Speed: ${data.speed.walk}</li>
    <li>Size: ${data.size}</li>
  </ul>`;
}
