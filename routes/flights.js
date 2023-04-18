import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()


router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:flightId', flightsCtrl.show)
router.get('/:flightId/edit', flightsCtrl.edit)
router.post('/', flightsCtrl.create)
router.post('/:flightId/tickets', flightsCtrl.createTickets)
router.delete("/:flightId", flightsCtrl.delete)
router.put("/:flightId", flightsCtrl.update)

export { router }
