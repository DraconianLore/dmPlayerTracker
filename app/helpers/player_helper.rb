
module PlayerHelper
  def test(player, updatedPlayer)
    player.playerName = updatedPlayer[:playerName]
    player.charName = updatedPlayer[:charName]
    player.classname = updatedPlayer[:classname]
    player.race = updatedPlayer[:race]
    player.hitDie = updatedPlayer[:hitDie]
    player.background = updatedPlayer[:background]
    player.baseSTR = updatedPlayer[:baseSTR]
    player.baseDEX = updatedPlayer[:baseDEX]
    player.baseCON = updatedPlayer[:baseCON]
    player.baseINT = updatedPlayer[:baseINT]
    player.baseWIS = updatedPlayer[:baseWIS]
    player.baseCHA = updatedPlayer[:baseCHA]
    player.AC = updatedPlayer[:AC]
    player.saveDC = updatedPlayer[:saveDC]
    player.maxHP = updatedPlayer[:maxHP]
    player.speed = updatedPlayer[:speed]
    player.level = updatedPlayer[:level]
    player.proficiency = updatedPlayer[:proficiency]
    player.portrait = updatedPlayer[:portrait]
    player.proficiencies = updatedPlayer[:proficiencies]
    return player
   end

   def generateUID
    return SecureRandom.base58
   end
end
