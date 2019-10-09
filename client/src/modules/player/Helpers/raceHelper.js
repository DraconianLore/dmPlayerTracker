import itemHelper from './itemHelper';
import axios from 'axios';
const baseURL = "https://dmplayertracker.herokuapp.com/"

export default async function raceHelper(newRace, player, JWT) {
  player.race = newRace.newValue
  let race = {}
  const searchAbilities = async (ability) => {
    let newAbility = {}
    await axios({
      method: 'get',
      url: `${baseURL}api/feats?search=${ability}`,
      headers: {
        Authorization: JWT
      }
    })
      .then((response) => {
        const result = response.data.result
        if (result.length > 0) {
          newAbility = {
            name: result[0].name,
            description: result[0].description
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
    return newAbility
  }
  const checkRaceStats = async () => {
    await axios({
      method: 'get',
      url: `${baseURL}api/races?search=${newRace.newValue}`,
      headers: {
        Authorization: JWT,
      }
    })
      .then((response) => {
        if (response.data.result.length > 0) {
          race = response.data.result[0]
        } else {
          race = {
            name: newRace.newValue,
            speed: 30,
            languages: ["Common"],
            traits: []
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
  }
  await checkRaceStats()
  // set languages
  let languages = 'Common'
  race.languages.forEach(language => {
    if (language !== 'Common') {
      languages += `\n${language}`
    }
  });
  const setLanguages = {
    itemType: 'Note',
    change: {
      name: 'Languages',
      description: languages
    }
  }
  player = await itemHelper(setLanguages, player)
  // set traits
  for await (const trait of race.traits) {
    const newAbility = await searchAbilities(trait)
    const setTrait = {
      itemType: 'Ability',
      change: {
        name: newAbility.name,
        description: newAbility.description
      }
    }
    player = itemHelper(setTrait, player)

  };
  // set speed
  player.speed = race.speed

  return player
}