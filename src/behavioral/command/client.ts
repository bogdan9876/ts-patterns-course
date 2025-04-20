import Light from './light'
import Switch from './switch'
import SwitchOnCommand from './switch-on-command'
import SwitchOffCommand from './switch-off-command'

const LIGHT = new Light()

const SWITCH_ON = new SwitchOnCommand(LIGHT)
const SWITCH_OFF = new SwitchOffCommand(LIGHT)

const SWITCH = new Switch()
SWITCH.register('ON', SWITCH_ON)
SWITCH.register('OFF', SWITCH_OFF)

SWITCH.execute('ON')
SWITCH.execute('OFF')
SWITCH.execute('ON')
SWITCH.execute('OFF')

SWITCH.showHistory()

SWITCH.replayLast(2)
