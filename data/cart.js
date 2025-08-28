export let cart = [{
    pid:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2
},{
    pid: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];
GamepadHapticActuator

export function addcart(pid){
  let matching ;
  cart.forEach((item)=>{
               if( pid === item.pid){
                  matching = item;
               }
          });
          if(matching){
            matching.quantity +=1;
          }else{
              cart.push({
              pid:pid,
              quantity:1
            });
          }
}