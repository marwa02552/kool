const express=require('express')
const router=express.Router()
const userControler=require('../controler/userControler')
router.get('/get',userControler.getAlluser)
router.post('/sendrequest',userControler.sendResquest)
router.post('/sendmain',userControler.updateStatus)

module.exports=router