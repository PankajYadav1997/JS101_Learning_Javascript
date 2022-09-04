let stored_username="abc@gmail.com";
let stored_pass=12345678;

let input_username="abc@gmail.com";
let input_pass=12345678;

if(stored_username==input_username){
  if(stored_pass==input_pass){
    console.log("Login Successful");
  }else{
    console.log("Wrong Password");
  }
}else{
  console.log("Wrong Username");
}