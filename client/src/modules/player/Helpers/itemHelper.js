export default function itemHelper(newItem, player) {
  let itemType = ''
  switch (newItem.itemType) {
    case 'Ability':
      itemType = 'abilities'
      player[itemType].push(newItem.change)
      break;
    case 'Spell':
      itemType = 'spells'
      player[itemType].push(JSON.stringify(newItem.change))
      break;
    case 'Note': 
      itemType = 'notes'
      player[itemType].push(JSON.stringify(newItem.change))
      break;
    case 'Item':
      itemType = 'items'
      player[itemType].push(JSON.stringify(newItem.change))
      break;
    default:
      itemType = 'ERROR'
  }
  return player
}