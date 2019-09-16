export default function updateHelper(current, newChanges, player) {
  let newField = ''
  let newValue = newChanges.newValue

  switch (newChanges.field) {
    case 'Strength':
      newField = 'baseSTR'
      break;
    case 'Dexterity':
      newField = 'baseDEX'
      break;
    case 'Constitution':
      newField = 'baseCON'
      break;
    case 'Inteligence':
      newField = 'baseINT'
      break;
    case 'Wisdom':
      newField = 'baseWIS'
      break;
    case 'Charisma':
      newField = 'baseCHA'
      break;
    case 'Character Name':
      newField = 'charName'
      break;
    case 'Player Name':
      newField = 'playerName'
      break;
    case 'Class':
      newField = 'classname'
      break;
    case 'Armour Class':
      newField = 'AC'
      break;
    case 'Save DC':
      newField = 'saveDC'
      break;
    case 'Hit Die':
      newField = 'hitDie'
      break;
    case 'Profile Picture':
      newField = 'portrait'
      break;
    case 'Maximum Hitpoints':
      newField = 'maxHP'
      break;
    default:
      newField = newChanges.field.toLowerCase()
  };

  switch (newField) {
    case 'AC':
    case 'level':
    case 'speed':
    case 'saveDC':
    case 'proficiency':
    case 'baseSTR':
    case 'baseDEX':
    case 'baseCON':
    case 'baseINT':
    case 'baseWIS':
    case 'baseCHA':
    case 'maxHP':
      newValue = parseInt(newValue)
      break;
    default:
      break;
  }



  // Add new value to the current set of unsaved changes
  let unsaved = true

  for (let i = 0; i < current.length; i++) {
    if (current[i].field === newField) {
      current[i].newValue = newValue;
      unsaved = false;
      break;
    }
  }
  if (unsaved) {
    const newChange = { field: newField, newValue: newValue }
    current.push(newChange)
  }

  // modify player stats
  player[newField] = newValue

  // return changes and player(with temp changes)

  return { details: current, player: player };
}