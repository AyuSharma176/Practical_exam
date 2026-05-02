const express=require("express")
const router= express.Router()
const c=require("/studentcontroller")

router.port("/",c.createstudent)
router.get("/",c.getstudent)
router.get("/topper",c.gettoper)
router.get("/:id",c.getbyid)
router.put("/:id",c.updatestudent)
router.delete("/:id",c.deletestudent)

module.exports=router
