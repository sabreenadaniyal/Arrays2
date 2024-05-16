//==========================================ARRAY==============================================================
//--------------------------- SLICE() "method does not change the original array"-------------------------------
// -------------------------------------And return shallow copy------------------------------------------------
let animals:string[]=["ant","cat","dog","elephant","zebra"]
let animals_catch = animals.slice(1,5)
console.log(animals_catch);
//---------OR----------------
let Days:string[]=["Monday","Tuesday","Wednesday"]
Days.push("Thursday")
console.log(Days);
let copy_Days = Days.slice(2,5)
console.log(copy_Days);
//--------OR----------------
let copy_Dayss = Days.slice(0,4)
console.log(copy_Dayss);

//------------------------- SPLICE()"method change original array"----------------------------------------------
//--------------------------------------Add------------------------------------------------------------------
let Months:string[]=["Jan","March","April","June"]
Months.splice(1,0,"Feb")        
Months.splice(4,0,"May")
console.log(Months);
//----------------------------------Remove/Delete-------------------------------------------------------------------
let months:string[]=["Jan","March","April","June"]
months.splice(1,1)            
console.log(months);
//--------OR-----------
months.splice(1,2)
console.log(months);
//-------OR------------
months.splice(0,1)      //Empty Array
console.log(months);
//------------------------------------Replace--------------------------------------------------------------------
let Monthss:string[]=["Jan","Ali","March","April","May"]
Monthss.splice(1,1,"Feb");
console.log(Monthss); 






