import { DataController } from './data-controller'
import { DataModel } from './data-model'
import { BarGraphView, PieGraphView, TableView } from './data-view'

const DATA_MODEL = new DataModel()

const PIE_GRAPH_VIEW = new PieGraphView(DATA_MODEL)
const BAR_GRAPH_VIEW = new BarGraphView(DATA_MODEL)
const TABLE_VIEW = new TableView(DATA_MODEL)

const DATA_CONTROLLER = new DataController()

DATA_CONTROLLER.notify([1, 2, 3])

BAR_GRAPH_VIEW.delete()

DATA_CONTROLLER.notify([4, 5, 6])
