app.service("dataService", function($http){

   this.getList = function()
   {
      return $http.get("http://192.168.1.5:9000/getlist");
   }

   this.saveDetails = function(obj) {
      return $http.post("http://192.168.1.5:9000/savedetails", JSON.stringify(obj));
   }

   this.deleteDetails = function(id)
   {
      return $http.get("http://192.168.1.5:9000/deletedetails/"+id);
   }

});