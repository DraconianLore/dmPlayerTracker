#  Barbarian
f = Feat.new
f.name = "Rage"
f.description = "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:\n• You have advantage on Strength checks and Strength saving throws.\n• When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.\n• You have Resistance to bludgeoning, piercing, and slashing damage.\nIf you are able to cast Spells, you can't cast them or concentrate on them while raging.\nYour rage lasts for 1 minute. It ends early if you are knocked Unconscious or if Your Turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on Your Turn as a Bonus Action.\nOnce you have raged the maximum number of times for your barbarian level, you must finish a Long Rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th."
f.search = "rage"
f.save!

f = Feat.new
f.name = "Unarmuored Defense"
f.description = "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
f.search = "unarmoureddefense"
f.save!

f = Feat.new
f.name = "Reckless Attack"
f.description = "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
f.search = "recklessattack"
f.save!

f = Feat.new
f.name = "Danger Sense"
f.description = "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated."
f.search = "dangersense"
f.save!

f = Feat.new
f.name = "Primal Path"
f.description = "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
f.search = "primalpath"
f.save!

f = Feat.new
f.name = "Extra Attack"
f.description = "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn"
f.search = "extraattack"
f.save!

f = Feat.new
f.name = "Fast Movement"
f.description = "Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor."
f.search = "fastmovement"
f.save!

f = Feat.new
f.name = "Feral Instinct"
f.description = "By 7th level, your instincts are so honed that you have advantage on initiative rolls.\nAdditionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
f.search = "feralinstinct"
f.save!

f = Feat.new
f.name = "Brutal Critical"
f.description = "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
f.search = "brutalcritical"
f.save!

f = Feat.new
f.name = "Mindless Rage"
f.description = "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
f.search = "mindlessrage"
f.save!

f = Feat.new
f.name = "Relentless Rage"
f.description = "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.\nEach time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
f.search = "relentlessrage"
f.save!

f = Feat.new
f.name = "Persistent Rage"
f.description = "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
f.search = "persistentrage"
f.save!

f = Feat.new
f.name = "Indomitable Might"
f.description = "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
f.search = "indomitablemight"
f.save!

f = Feat.new
f.name = "Primal Champion"
f.description = "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
f.search = "primalchampion"
f.save!

# Bard
f = Feat.new
f.name = "Bardic Inspiration"
f.description = "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.\nYour Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
f.search = "bardicinspiration"
f.save!

f = Feat.new
f.name = "Jack of All Trades"
f.description = "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus."
f.search = "jackofalltrades"
f.save!

f = Feat.new
f.name = "Song of Rest"
f.description = "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.\nThe extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
f.search = "songofrest"
f.save!

f = Feat.new
f.name = "Bard College"
f.description = "At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th and 14th level."
f.search = "bardcollege"
f.save!

f = Feat.new
f.name = "Font of Inspiration"
f.description = "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest."
f.search = "fontofinspiration"
f.save!

f = Feat.new
f.name = "Countercharm"
f.description = "At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required)."
f.search = "countercharm"
f.save!

f = Feat.new
f.name = "Magical Secrets"
f.description = "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.\nThe chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.\nYou learn two additional spells from any class at 14th level and again at 18th level."
f.search = "magicalsecrets"
f.save!

f = Feat.new
f.name = "Superior Inspiration"
f.description = "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
f.search = "superiorinspiration"
f.save!

# Cleric
f = Feat.new
f.name = "Divine Domain"
f.description = "Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.\nYour domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels."
f.search = "divinedomain"
f.save!

f = Feat.new
f.name = "Channel Divinity"
f.description = "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.\nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.\nBeginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
f.search = "channeldivinity"
f.save!

f = Feat.new
f.name = "Destroy Undead"
f.description = "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
f.search = "destroyundead"
f.save!

f = Feat.new
f.name = "Divine Intervention"
f.description = "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.\nImploring your deity’s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The GM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.\nIf your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.\nAt 20th level, your call for intervention succeeds automatically, no roll required."
f.search = "divineintervention"
f.save!

# Druid
f = Feat.new
f.name = "Druidic"
f.description = "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
f.search = "druidic"
f.save!

f = Feat.new
f.name = "Wild Shape"
f.description = "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.\nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.\nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.\nWhile you are transformed, the following rules apply:\n• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.\n• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.\n• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.\n• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.\n• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
f.search = "wildshape"
f.save!

f = Feat.new
f.name = "Druid Circle"
f.description = "At 2nd level, you choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon, both detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
f.search = "druidcircle"
f.save!

f = Feat.new
f.name = "Timeless Body"
f.description = "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
f.search = "timelessbody"
f.save!

f = Feat.new
f.name = "Beast Spells"
f.description = "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components."
f.search = "beastspells"
f.save!

f = Feat.new
f.name = "Archdruid"
f.description = "At 20th level, you can use your Wild Shape an unlimited number of times.\nAdditionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
f.search = "archdruid"
f.save!

# Fighter
f = Feat.new
f.name = "Fighting Style"
f.description = "You adopt a particular style of fighting as your specialty. You can’t take a Fighting Style option more than once, even if you later get to choose again."
f.search = "fightingstyle"
f.save!

f = Feat.new
f.name = "Second Wind"
f.description = "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
f.search = "secondwind"
f.save!

f = Feat.new
f.name = "Action Surge"
f.description = "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.\nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
f.search = "actionsurge"
f.save!

f = Feat.new
f.name = "Martial Archetype"
f.description = "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
f.search = "martialarchetype"
f.save!

f = Feat.new
f.name = "Indomitable"
f.description = "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
f.search = "indomitable"
f.save!

# Monk
f = Feat.new
f.name = "Martial Arts"
f.description = "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two- handed or heavy property.\nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:\n• You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.\n• You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of Table: The Monk.\n• When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn.\nCertain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon."
f.search = "martialarts"
f.save!

f = Feat.new
f.name = "Ki"
f.description = "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of Table: The Monk.\nYou can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.\nWhen you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.\nSome of your ki features require your target to make a saving throw to resist the feature’s effects. The saving throw DC is calculated as follows:\nKi save DC = 8 + your proficiency bonus + your Wisdom modifier"
f.search = "ki"
f.save!

f = Feat.new
f.name = "Unarmored Movement"
f.description = "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.\nAt 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
f.search = "unarmoredmovement"
f.save!

f = Feat.new
f.name = "Monastic Tradition"
f.description = "When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements, all detailed at the end of the class description. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
f.search = "monastictradition"
f.save!

f = Feat.new
f.name = "Deflect Missiles"
f.description = "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.\nIf you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet."
f.search = "deflectmissiles"
f.save!

f = Feat.new
f.name = "Slow Fall"
f.description = "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
f.search = "slowfall"
f.save!

f = Feat.new
f.name = "Stunning Strike"
f.description = "Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
f.search = "stunningstrike"
f.save!

f = Feat.new
f.name = "Ki Empowered Strikes"
f.description = "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
f.search = "kiempoweredstrikes"
f.save!

f = Feat.new
f.name = "Evasion"
f.description = "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
f.search = "evasion"
f.save!

f = Feat.new
f.name = "Stillness of Mind"
f.description = "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
f.search = "stillnessofmind"
f.save!

f = Feat.new
f.name = "Purity of Body"
f.description = "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
f.search = "purityofbody"
f.save!

f = Feat.new
f.name = "Tongue of the Sun and Moon"
f.description = "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
f.search = "tongueofthesunandmoon"
f.save!

f = Feat.new
f.name = "Diamond Soul"
f.description = "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.\nAdditionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
f.search = "diamondsoul"
f.save!

f = Feat.new
f.name = "Timeless Body"
f.description = "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
f.search = "mtimelessbody"
f.save!

f = Feat.new
f.name = "Empty Body"
f.description = "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.\nAdditionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you."
f.search = "emptybody"
f.save!

f = Feat.new
f.name = "Perfect Soul"
f.description = "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
f.search = "perfectsoul"
f.save!

# Paladin
f = Feat.new
f.name = "Divine Sense"
f.description = "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.\nYou can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
f.search = "divinesense"
f.save!

f = Feat.new
f.name = "Lay on Hands"
f.description = "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.\nAs an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.\nAlternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.\nThis feature has no effect on undead and constructs."
f.search = "layonhands"
f.save!

f = Feat.new
f.name = "Divine Smite"
f.description = "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend."
f.search = "divinesmite"
f.save!

f = Feat.new
f.name = "Divine Health"
f.description = "By 3rd level, the divine magic flowing through you makes you immune to disease."
f.search = "divinehealth"
f.save!

f = Feat.new
f.name = "Sacred Oath"
f.description = "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion, the Oath of the Ancients, or the Oath of Vengeance, all detailed at the end of the class description.\nYour choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature."
f.search = "sacredoath"
f.save!

f = Feat.new
f.name = "Aura of Protection"
f.description = "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.\nAt 18th level, the range of this aura increases to 30 feet."
f.search = "auraofprotection"
f.save!

f = Feat.new
f.name = "Aura of Courage"
f.description = "Starting at 10th level, you and friendly creatures within 10 feet of you can’t be frightened while you are conscious.\nAt 18th level, the range of this aura increases to 30 feet."
f.search = "auraofcourage"
f.save!

f = Feat.new
f.name = "Cleansing Touch"
f.description = "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
f.search = "cleansingtouch"
f.save!

# Ranger
f = Feat.new
f.name = "Favored Enemy"
f.description = "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\nChoose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.\nYou choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
f.search = "favoredenemy"
f.save!

f = Feat.new
f.name = "Natural Explorer"
f.description = "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.\nWhile traveling for an hour or more in your favored terrain, you gain the following benefits:\n• Difficult terrain doesn’t slow your group’s travel.\n• Your group can’t become lost except by magical means.\n• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.\n• If you are traveling alone, you can move stealthily at a normal pace.\n• When you forage, you find twice as much food as you normally would.\n• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.\nYou choose additional favored terrain types at 6th and 10th level."
f.search = "naturalexplorer"
f.save!

f = Feat.new
f.name = "Ranger Archetype"
f.description = "At 3rd level, you choose an archetype that you strive to emulate: Hunter or Beast Master, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level."
f.search = "rangerarchetype"
f.save!

f = Feat.new
f.name = "Primeval Awareness"
f.description = "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number."
f.search = "primevalawareness"
f.save!

f = Feat.new
f.name = "Land’s Stride"
f.description = "Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.\nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
f.search = "landsstride"
f.save!

f = Feat.new
f.name = "Hide in Plain Sight"
f.description = "Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.\nOnce you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
f.search = "hideinplainsight"
f.save!

f = Feat.new
f.name = "Vanish"
f.description = "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail."
f.search = "vanish"
f.save!

f = Feat.new
f.name = "Feral Senses"
f.description = "At 18th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.\nYou are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened."
f.search = "feralsenses"
f.save!

f = Feat.new
f.name = "Foe Slayer"
f.description = "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
f.search = "foeslayer"
f.save!

# Rogue
f = Feat.new
f.name = "Sneak Attack"
f.description = "Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.\nYou don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.\nThe amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
f.search = "sneakattack"
f.save!

f = Feat.new
f.name = "Thieves' Cant"
f.description = "During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.\nIn addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
f.search = "thievescant"
f.save!

f = Feat.new
f.name = "Cunning Action"
f.description = "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
f.search = "cunningaction"
f.save!

f = Feat.new
f.name = "Roguish Archetype"
f.description = "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities. The Thief archetype is detailed at the bottom of this page. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
f.search = "roguisharchetype"
f.save!

f = Feat.new
f.name = "Uncanny Dodge"
f.description = "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you."
f.search = "uncannydodge"
f.save!

f = Feat.new
f.name = "Reliable Talent"
f.description = "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
f.search = "reliabletalent"
f.save!

f = Feat.new
f.name = "Blindsense"
f.description = "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you."
f.search = "blindsense"
f.save!

f = Feat.new
f.name = "Slippery Mind"
f.description = "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
f.search = "slipperymind"
f.save!

f = Feat.new
f.name = "Elusive"
f.description = "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated."
f.search = "elusive"
f.save!

f = Feat.new
f.name = "Stroke of Luck"
f.description = "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.\nOnce you use this feature, you can't use it again until you finish a short or long rest."
f.search = "strokeofluck"
f.save!

# Sorcerer
f = Feat.new
f.name = "Sorcerous Origin"
f.description = "Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic, both detailed at the end of the class description.\nYour choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
f.search = "sorcerousorigin"
f.save!

f = Feat.new
f.name = "Font of Magic"
f.description = "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.\nSorcery Points\nYou have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest."
f.search = "fontofmagic"
f.save!

f = Feat.new
f.name = "Metamagic"
f.description = "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.\nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
f.search = "metamagic"
f.save!

f = Feat.new
f.name = "Sorcerous Restoration"
f.description = "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
f.search = "sorcerousrestoration"
f.save!

# Warlock
f = Feat.new
f.name = "Otherworldly Patron"
f.description = "At 1st level, you have struck a bargain with an otherworldly being of your choice: the Archfey, the Fiend, or the Great Old One, each of which is detailed at the end of the class description. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
f.search = "otherworldlypatron"
f.save!

f = Feat.new
f.name = "Pact Magic"
f.description = "Your arcane research and the magic bestowed on you by your patron have given you facility with spells."
f.search = "pactmagic"
f.save!

f = Feat.new
f.name = "Eldritch Invocations"
f.description = "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.\nAt 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.\nAdditionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
f.search = "eldritchinvocations"
f.save!

f = Feat.new
f.name = "Pact Boon"
f.description = "At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice."
f.search = "pactboon"
f.save!

f = Feat.new
f.name = "Mystic Arcanum"
f.description = "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
f.search = "mysticarcanum"
f.save!

f = Feat.new
f.name = "Eldritch Master"
f.description = "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature.\nOnce you regain spell slots with this feature, you must finish a long rest before you can do so again."
f.search = "eldritchmaster"
f.save!

# Wizard
f = Feat.new
f.name = "Arcane Recovery"
f.description = "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.\nFor example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
f.search = "arcanerecovery"
f.save!

f = Feat.new
f.name = "Arcane Tradition"
f.description = "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation, all detailed at the end of the class description.\nYour choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
f.search = "arcanetradition"
f.save!

f = Feat.new
f.name = "Spell Mastery"
f.description = "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.\nBy spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
f.search = "spellmastery"
f.save!

f = Feat.new
f.name = "Signature Spell"
f.description = "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don’t count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can’t do so again until you finish a short or long rest.\nIf you want to cast either spell at a higher level, you must expend a spell slot as normal."
f.search = "signaturespell"
f.save!

puts '### CLASS ABILITIES SEEDING COMPLETE ###'