import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL;

async function checkIfItemExists(JWT, item, itemType) {
  const res = await axios({
    method: 'get',
    url: `${baseURL}api/${itemType}?search=${item.name}`,
    headers: {
      Authorization: JWT
    }
  })
  if (res.data.result[0]) {
    return res.data.result[0]
  } else {
    return false
  }
}
async function createNewItem(JWT, item, itemType) {
  let newItem = await checkIfItemExists(JWT, item, itemType)
  if (newItem) {
    item = newItem
    item.itemID = newItem.id
  } else {
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
  }
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
      if (!newItem.change.itemID){
        newItem.change = await createNewItem(JWT, newItem.change, itemType)
      }
      createJoin(JWT, newItem.change.itemID, player.id, 'Feat')
      if(!player.feats) {
        player.feats = []
      } 
      player.feats.push(newItem.change)
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