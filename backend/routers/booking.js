import  express  from 'express'
import { createBooking, getAllBooking, getBooking,getAllBookings } from '../controllers/bookingController.js'
import { verifyAdmin, verifyUser } from '../controllers/utils/verifyToken.js'
const router = express.Router()
router.post('/',verifyUser,createBooking)
router.get('/:id',verifyUser,getBooking)
router.post('/',getAllBooking)
router.get('/',getAllBookings)

export default router