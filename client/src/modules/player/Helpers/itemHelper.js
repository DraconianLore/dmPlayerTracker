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
async function addSpell(JWT, newSpell, playerID) {
  if (newSpell.title && newSpell.description) {
    let response = await axios({
      method: 'post',
      url: `${baseURL}api/spells`,
      headers: {
        Authorization: JWT
      },
      data: {
        player: playerID,
        name: newSpell.title,
        description: newSpell.description,
        range: newSpell.range,
        components: newSpell.components,
        ritual: newSpell.ritual,
        concentration: newSpell.concentration,
        duration: newSpell.duration,
        casting_time: newSpell.casting_time,
        level: newSpell.level,
        school: newSpell.school
      }
    })
    if (response.data.spell) {
      newSpell = response.data.spell
    } else {
      console.log(response.data.message)
    }
  } else {
    console.log('Spell name and description are required')
    newSpell = false
  }
  return newSpell
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
      newItem.change = await addSpell(JWT, newItem.change, player.id)
      if (!player.spells) {
        player.spells = []
      }
      if (newItem.change) {
        player.spells.push(newItem.change)
      }
      break;
    case 'Note':
      itemType = 'notes'
      newItem.change = await createNewItem(JWT, newItem.change, itemType, player.id)
      if (!player.notes) {
        player.notes = []
      }
      player.notes.push(newItem.change)
      break;
    case 'Item':
      itemType = 'items'
      newItem.change = await createNewItem(JWT, newItem.change, itemType, player.id)
      if (!player.items) {
        player.items = []
      }
      player.items.push(newItem.change)
      break;
    default:
      itemType = 'ERROR'
  }
  return player
}