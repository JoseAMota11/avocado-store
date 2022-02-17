/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

 const url = "https://platzi-avo.vercel.app/api/avo";

 // window.fetch(url)
 // .then((respuesta) => respuesta.json())
 // .then(respuestaJson => {
 //     respuestaJson.data.forEach(element => {
 //         console.log(element.name);
 //     });
 // })
 
 const formatPrice = (price) => {
 
     const newPrice = new window.Intl.NumberFormat("en-EN", {
         style: "currency",
         currency: "USD"
     }).format(price);
 
     return newPrice;
 }
 
 async function obtainData(){
     const response = await fetch(url);
     const data = await response.json();
     const allItems = [];
     const fragment = document.createDocumentFragment();
     data.data.forEach(element => {
         
         const imagen = document.createElement("img");
         imagen.src = "https://platzi-avo.vercel.app" + element.image;
         const title = document.createElement("h2");
         title.textContent = element.name;
         const price = document.createElement("div");
         price.textContent = formatPrice(element.price);
 
         const container = document.createElement("div");
 
         container.append(imagen, title, price);
         
         container.setAttribute("class", "container");
 
         fragment.append(container);
 
         allItems.push(fragment);
 
     });
 
     const wrapper = document.createElement("div");
     wrapper.setAttribute("class", "wrapper");
     wrapper.append(...allItems);
     document.body.append(wrapper);
 }
 
 obtainData()