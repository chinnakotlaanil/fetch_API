let div=document.getElementById("container")
let items=document.querySelector("span");
let num=0;
items.innerHTML=num;
let x= fetch("https://fakestoreapi.com/products");
console.log(x);
x.then((response)=>{
     return response.json()
  }).then((result)=>{
    console.log(result);
    result.map(Object=>{
       let { image,title,price,description}=Object
        div.innerHTML +=`
        <div style="border:2px solid red; padding:20px; width:300px">
        <img height="200px" width="200px" src= "${image} "alt="error">
         <h2>${title.slice(0,20)}</h2>
         <h3>${price}</h3>
         <p>${description.slice(0,60)}</p>
          <button onclick="addToCart()">ADD TO CART</button>
        </div>`
     })
})
function addToCart() {
    num++;
    items.innerHTML = num;
}
function resetCart() {
    if(num>0)
    num--;
    items.innerHTML = num;
}

