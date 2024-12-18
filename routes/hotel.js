const express = require("express")

const personController = require("../controller/hotelController")



const router = express.Router()




router.post('/add',personController.add);
router.get('/getAll',personController.getall);
router.get('/getHotel/:id',personController.getById)
router.get('/getHotelName/:name',personController.getByname)
router.put('/update/:id',personController.update)
router.delete('/delete/:id',personController.deleteHotel)
router.delete('/deleteAll',personController.deleteAll)
router.get('/getMax', personController.getMax);










module.exports= router