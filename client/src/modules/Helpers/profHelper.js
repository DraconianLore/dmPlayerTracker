export default function profHelper(profList, player) {
  player.proficiencies = [];
  console.log(profList)
  for(const item in profList.newValue){
    if (item !== 'undefined') {
      const prof = {}
      prof[item] = profList.newValue[item]
player.proficiencies.push(prof)
    }
  }  
  console.log(player)

  return player
}
