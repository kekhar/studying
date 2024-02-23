'use strict';

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => response.json())
  .then((data) => {
    const abilityUrl = data.abilities[0].ability.url;
    return fetch(abilityUrl);
  })
  .then((response) => response.json())
  .then((abilityData) => {
    const description = abilityData.effect_entries[0].effect;
    console.log(`Описание способности: ${description}`);
  })
  .catch((e) => console.error(e));
