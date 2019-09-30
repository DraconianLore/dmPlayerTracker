import axios from 'axios';


export default function levelHelper(player, change, JWT) {
  player.level += change
  const newLevel = `level${player.level}`


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
      .then((response) => {
        if (response.data.result.length > 0) {
          const charClass = response.data.result[0]
          const levelStats = charClass[newLevel]
          // Update Proficiency
          player.proficiency = levelStats[0]
          // add feats from level up
          console.log(levelStats)
          
        }
      })
      .catch(function (e) {
        console.log(e)
      })
  }
  loadRaceStats();

  return player
}