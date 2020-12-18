// Code your solution here
 function findMatching (driversarr, str){
   
   return driversarr.filter(item => {return item.toLowerCase().match(str.toLowerCase())})
    
 }


function fuzzyMatch (drivers,str){
 return drivers.filter(n => {
  
   return n.slice(0,str.length).match(str)

   });
   }
   
function matchName(drivers,str){
  return drivers.filter(n => {
   return n.name.match(str)});
} 