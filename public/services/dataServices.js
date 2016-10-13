angular.module("app.services",[])
.factory("employeesData", function($state){
  var employees = [ {id:1, name:"Kbreab Tsegai", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/hagos.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing",
                    address:{street:"pukinmaki", city:"heslinki",telNumber:"0440315554"}},
                    {id:2, name:"paul stank", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/paul.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"},
                    {id:3, name:"tiina antikainen", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/tiinaNew.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"},
                    {id:4, name:"trunio le", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/trunioNew.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"},
                    {id:5, name:"timo anttila", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/tiinaNew.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"},
                    {id:6, name:"jani teklay", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/trunioNew.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"},
                    {id:6, name:"jani teklay", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/trunioNew.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"},
                    {id:6, name:"jani teklay", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/hagos.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"},
                    {id:6, name:"jani teklay", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/paul.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"},
                    {id:1, name:"kbreab tsegai", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/hagos.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"},
                    {id:2, name:"paul stan", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/paul.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"},
                    {id:3, name:"tiina antikainen", 
                    img :"http://myy.haaga-helia.fi/~a1401050/profileImages/tiinaNew.jpg",
                    desc:"cleaning, moving van, plumbing, computer repairing"}];

  return {data: function(){
            return employees;
         },
         get: function(employeeId){
            for(var i=0; i<employees.length; i++){
                if(employees[i].id===parseInt(employeeId)){
                  return employees[i];
                }
              }
            $state.go('employees.employeesList');
         }
     }
});