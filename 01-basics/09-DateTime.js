let myDate = new Date()
console.log(myDate);  // 2024-07-17T11:29:17.861Z
console.log(typeof myDate);  // object

let myDate1 = new Date()
console.log(myDate1.toString());  // Wed Jul 17 2024 16:29:17 GMT+0500 (Pakistan Standard Time)


let myDate2 = new Date()
console.log(myDate2.toDateString());  // Wed Jul 17 2024

let myDate3 = new Date()
console.log(myDate3.toJSON());  // 2024-07-17T11:29:17.878Z


let myDate4 = new Date()
console.log(myDate4.toISOString());  // 2024-07-17T11:29:17.879Z

let myDate5 = new Date()
console.log(myDate5.toLocaleDateString());   // 17/07/2024

let myDate6 = new Date()
console.log(myDate6.toLocaleString());  // 17/07/2024, 16:29:17


let myDate7 = new Date()
console.log(myDate7.toLocaleTimeString());  // 16:29:17

//................................................................................

let myCreatedDate=new Date(2002,1,26)
console.log(myCreatedDate.toDateString());  // Tue Feb 26 2002

let myCreatedDate1=new Date("07-17-2024")
console.log(myCreatedDate1.toLocaleString());  // Tue Feb 26 2002



let myCreatedDate2=new Date(2002,1,26,5,3)
console.log(myCreatedDate2.toLocaleString());  //26/02/2002, 05:03:00

//................................................................................

let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

//................................................................................

let NowDate=new Date()
console.log(NowDate);   // 2024-07-17T13:44:12.482Z
console.log(NowDate.getDate());  // 17
console.log(NowDate.getDay());  // 3

console.log(NowDate.toLocaleString('default',{
  weekday:"long"
}));  // Wednesday


