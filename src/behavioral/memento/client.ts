import CareTaker from './caretaker'
import GameCharacter from './game-character'

const GAME_CHARACTER = new GameCharacter()
const CARETAKER = new CareTaker(GAME_CHARACTER)

GAME_CHARACTER.registerKill()
GAME_CHARACTER.moveForward(1)
GAME_CHARACTER.addInventory('sword')
GAME_CHARACTER.registerKill()
GAME_CHARACTER.addInventory('rifle')
GAME_CHARACTER.moveForward(1)
console.log(GAME_CHARACTER.status())

CARETAKER.save()

GAME_CHARACTER.registerKill()
GAME_CHARACTER.moveForward(1)
GAME_CHARACTER.progressToNextLevel()
GAME_CHARACTER.registerKill()
GAME_CHARACTER.addInventory('motorbike')
GAME_CHARACTER.moveForward(10)
GAME_CHARACTER.registerKill()
console.log(GAME_CHARACTER.status())

CARETAKER.save()
GAME_CHARACTER.moveForward(1)
GAME_CHARACTER.progressToNextLevel()
GAME_CHARACTER.registerKill()
console.log(GAME_CHARACTER.status())

CARETAKER.restore(0)
console.log(GAME_CHARACTER.status())

GAME_CHARACTER.registerKill()