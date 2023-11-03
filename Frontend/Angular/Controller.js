app.controller("dataController", function ($scope, dataService) {

   $scope.GetList = function () {
      dataService.getList().then(function (response) {

         if (response.data.Message == "Success") {

            $scope.EnquiryList = response.data.Response;
         }
         else {
            alert("data can not be fetched");
         }
      });

   }
   $scope.GetList();


   $scope.SaveDetails = function () {
      const obj =
      {
         EnquiryId: 0,
         FirstName: $scope.FirstName,
         LastName: $scope.LastName,
         EmailId: $scope.EmailId,
         MobileNo: $scope.MobileNo,
         CollegeName: $scope.CollegeName,
         Degree: $scope.Degree,
         Course: $scope.Course
      }
      dataService.saveDetails(obj).then(function (response) {
         if (response.data.Message == "Saved") {
            alert('Form Submitted Successfully');
            $scope.clearForm();
         }
         else {
            alert("data cant be saved");
         }
      })
   }

   $scope.DeleteDetails = function (id) {

      dataService.deleteDetails(id).then(function (response) {

         if (response.data.Message == "Deleted") {
            $scope.GetList();
            alert("Data Deleted Successfully");

         }
         else {
            alert("Data Can't be Deleted. Something went wrong")
         }
      })
   }


   $scope.clearForm = function () {

         $scope.FirstName =""
         $scope.LastName =""
         $scope.EmailId =""
         $scope.MobileNo =""
         $scope.CollegeName =""
         $scope.Degree = "Graduate Degree Holder in"
         $scope.Course ="Select Your Course"

   }
   $scope.clearForm();
   

});