const dbConn = require("../../DatabaseConnection/dbConnection");


const Enquiry = function (Data) {
    this.EnquiryId = Data.EnquiryId;
    this.FirstName = Data.FirstName;
    this.LastName = Data.LastName;
    this.EmailId = Data.EmailId;
    this.MobileNo = Data.MobileNo;
    this.CollegeName = Data.CollegeName;
    this.Degree = Data.Degree;
    this.Course = Data.Course;
}

Enquiry.getList = (result)=>
{
  
    dbConn.query("Select * from EnquiryDetails", (err, res) => {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
  
}

Enquiry.saveDetails =(obj, result)=>
{
   if(obj.EnquiryId == 0)
   {
    dbConn.query("insert into EnquiryDetails(FirstName,LastName,EmailId,MobileNo,CollegeName,Degree,Course) values (?,?,?,?,?,?,?)",
    [obj.FirstName, obj.LastName, obj.EmailId, obj.MobileNo, obj.CollegeName, obj.Degree, obj.Course], (err,res)=>{
        if(err)
        {
            result(err, null);
        }
        else
        {
            result(null, res);
        }
    });
   }

   else
   {
    dbConn.query("update  EnquiryDetails set FirstName=?, LastName=?, EmailId=?, MobileNo=?,CollegeName=?,Degree=?,Course=? where EnquiryId=? ", 
    [obj.FirstName, obj.LastName,obj.EmailId, obj.MobileNo, obj.CollegeName, obj.Degree, obj.Course, obj.EnquiryId], (err,res)=>{
        if(err)
        {
            result(err, null);
        }
        else
        {
            result(null, res);
        }
    });
   }
}

Enquiry.delDetails=(id, result)=>{
    dbConn.query("delete from EnquiryDetails where EnquiryId=?", id, (err, res)=>{
        if(err)
        {
            result(err, null);
        }
        else
        {
            result(null, res);
        }
    });
}

module.exports = Enquiry;