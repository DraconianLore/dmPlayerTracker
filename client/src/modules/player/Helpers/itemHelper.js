import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL;


async function createNewItem(JWT, item, itemType, playerID) {
  let response = await axios({
    method: 'post',
    url: `${baseURL}api/${itemType}`,
    headers: {
      Authorization: JWT
    },
    data: {
      name: item.name,
      description: item.description,
      player: playerID
    }
  })
  if (response.data.newItem) {
    item.itemID = response.data.newItem.id
  } else {
    console.log(response.data.message)
    item.itemID = false
  }
  return item
}
async function createJoin(JWT, itemID, playerID, type) {
  await axios({
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
  return;
}

export default async function itemHelper(newItem, player, JWT) {
  let itemType = ''
  switch (newItem.itemType) {
    case 'Ability':
      itemType = 'feats'
      newItem.change = await createNewItem(JWT, newItem.change, itemType, player.id)
      if (newItem.change.itemID) {
        createJoin(JWT, newItem.change.itemID, player.id, 'Feat')
        if (!player.feats) {
          player.feats = []
        }
        player.feats.push(newItem.change)
      }
      break;
    case 'Spell':
      itemType = 'spells'
      player[itemType].push(JSON.stringify(newItem.change))
      break;
    case 'Note':
      itemType = 'notes'
      newItem.change = await createNewItem(JWT, newItem.change, itemType, player.id)
      player.notes.push(newItem.change)
      break;
    case 'Item':
      itemType = 'items'
      newItem.change = await createNewItem(JWT, newItem.change, itemType, player.id)
      player.items.push(newItem.change)
      break;
    default:
      itemType = 'ERROR'
  }
  return player
}