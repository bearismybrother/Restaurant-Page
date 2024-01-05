const content = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

homeBtn.addEventListener('click',(e)=>{
    clearContent();
    const homePageHTML = 
    `
    <div id="title"> Welcome To Bear's Resturant</div>
    
    <div class="description">We have ALL kind of Food. Cusines from 27 different countries, we'll be sure to meet your taste</div>
    
    <div>Open Hours: 7am - 7pm</div>
    `
    content.innerHTML = homePageHTML;
})

menuBtn.addEventListener('click',(e)=>{
    clearContent();
    const homePageHTML = 
    `
    <div id="title">Menu</div>
    
    <div class="description">Bread</div>

    <img src="/images/food.jpeg" alt="picture of food" style="width:500px">

    `
    content.innerHTML = homePageHTML;
})





function clearContent(){
    content.innerHTML ='';
}