const Model = require("../Model/Model");

exports.GetList = (req, res)=>{
   Model.getList((err, data)=>{
      if(err)
      {
         res.json({Message: err});
      }
      else
      {
         res.json({Message : "Success" , Response : data});
      }
   });
}

exports.SaveDetails = (req, res)=>{
   const obj = new Model(req.body);

   Model.saveDetails(obj, (err, data)=>{
      if(err)
      {
         res.json({Message : err});
      }
      else
      {
         res.json({Message:"Saved", Response : data});
      }
   });
}

exports.DelDetails = (req, res)=>{
   Model.delDetails(req.params.id, (err, data)=>{
      if(err)
      {
         res.json({Message : err});
      }
      else
      {
         res.json({Message : "Deleted"});
      }
   });
}
