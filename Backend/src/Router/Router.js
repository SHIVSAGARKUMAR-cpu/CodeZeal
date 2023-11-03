const Controller = require("../Controller/Controller");
const Express = require("express");

const router = Express.Router();

router.get("/getlist/",Controller.GetList);
router.post("/savedetails/", Controller.SaveDetails);
router.get("/deletedetails/:id",Controller.DelDetails);


module.exports = router;