import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL;

async function createNewItem(JWT, item, itemType) {
  const response = await axios({
    method: 'post',
    url: `${baseURL}api/${itemType}`,
    headers: {
      Authorization: JWT
    },
    data: {
      name: item.name,
      description: item.description
    }
  })
  item.itemID = response.data.newFeat.id
  return item
}
async function createJoin(JWT, itemID, playerID, type) {
  const response = await axios({
    method: 'post',
    url: `${baseURL}api/joinItems`,
    headers: {
      Authorization: JWT
    },
    data: {
      player: playerID,
      item: itemID,
      type: type
    }
  })
  console.log(response.data.message)
  return;
}

export default async function itemHelper(newItem, player, JWT) {
  let itemType = ''
  switch (newItem.itemType) {
    case 'Ability':
      itemType = 'feats'
      if (!newItem.change.itemID) {
        newItem.change = await createNewItem(JWT, newItem.change, itemType)
      }
      createJoin(JWT, newItem.change.itemID, player.id, 'Feat')
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