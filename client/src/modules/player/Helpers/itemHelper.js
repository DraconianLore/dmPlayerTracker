export default function itemHelper(newItem, player) {
  let itemType = ''
  switch (newItem.itemType) {
    case 'Ability':
      itemType = 'abilities'
      break;
    case 'Spell':
      itemType = 'spells'
      break;
    case 'Note': 
      itemType = 'notes'
      break;
    case 'Item':
      itemType = 'items'
      break;
    default:
      itemType = 'ERROR'
  }
  player[itemType].push(JSON.stringify(newItem.change))
  return player
}