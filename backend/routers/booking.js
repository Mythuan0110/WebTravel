import  express  from 'express'
import { createBooking, getAllBooking, getBooking,getAllBookings } from '../controllers/bookingController.js'
import { verifyUser } from '../controllers/utils/verifyToken.js'
const router = express.Router()
router.post('/',verifyUser,createBooking)
router.get('/',getAllBookings)
router.post('/',getBooking)

export default router