import axios from 'axios';
import itemHelper from './itemHelper';


export default async function levelHelper(player, change, JWT) {
  // Make sure they dont go over level 20 or under level 1
  if ((player.level + change) > 20 || (player.level + change) < 1) {
    return player
  }
  player.level += change
  const newLevel = `level${player.level}`
  // default proficiency bonus for custom classes
  let charClass = {
    level1: ['2'],
    level2: ['2'],
    level3: ['2'],
    level4: ['2'],
    level5: ['3'],
    level6: ['3'],
    level7: ['3'],
    level8: ['3'],
    level9: ['4'],
    level10: ['4'],
    level11: ['4'],
    level12: ['4'],
    level13: ['5'],
    level14: ['5'],
    level15: ['5'],
    level16: ['5'],
    level17: ['6'],
    level18: ['6'],
    level19: ['6'],
    level20: ['6']
  }
  const searchAbilities = async (ability) => {
    let newAbility = {}
    await axios({
      method: 'get',
      url: `http://localhost:3001/api/feats?search=${ability}`,
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
  
  const loadRaceStats = async () => {
    await axios({
      method: 'get',
      url: `http://localhost:3001/api/pclasses?search=${player.classname}`,
      headers: {
        Authorization: JWT,
      }
    })
      .then(async (response) => {
        if (response.data.result.length > 0) {
          charClass = response.data.result[0]
        }
        const levelStats = charClass[newLevel]
        // Update Proficiency
        player.proficiency = levelStats[0]
        // add feats from level up
        if (levelStats.length > 1) {
          for (let i = 1; i < levelStats.length; i++) {
            const newAbility = await searchAbilities(levelStats[i])
            const setTrait = {
              itemType: 'Ability',
              change: {
                name: newAbility.name,
                description: newAbility.description
              }
            }
            player = await itemHelper(setTrait, player)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
  }


  // Dont add new abilities on down levelling
  if (change + 0 >= 0) {
    await loadRaceStats();
  }

  return player
}