let movies=[
{
name:"Loki",
des:"Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of "Avengers: Endgame."",
image:"poster1.png"
},
{
name:"Luca",
des:"On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
image:"poster10.png"
},
{
name:"Ford V Ferrari",
des:"Ford v Ferrari is about pride and saving face. It's about friendship and betrayal. It's about getting your priorities right, and doing a deal with the devil. The novelty in this instance is that the villain and the conquering hero are one and the same: the Ford Motor Company.",
image:"poster11.png"
},
{
name:"Mulan",
des:"The film's plot takes place in China during an unspecified Imperial dynasty, where Fa Mulan, daughter of aged warrior Fa Zhou, impersonates a man to take her father's place during a general conscription to counter a Hun invasion.",
image:"poster2.png"
},
{
name:"Dark Phoenix",
des:"Dark Phoenix tells the origin story about how Jean Grey becomes the Phoenix. The story resolves around Jean struggling with mental illness after a cosmic force enhances her psychic powers, which unlocks trauma from her childhood that causes both her mind and her powers to become unstable.",
image:"poster12.png"
},
];

const carousel=document.queryselector('.Carousel');
let slider=[];

let slideIndex=0; //track the current slide

const createSlide=() =>{
  if(slideIndex>=movies.length){
    slideIndex=0;
}

//create DOM elements
let slide=document.createElement('div');
var imgElement=document.createElement('img');
let content=document.createElement('div');
let h1=document.createElement('h1');
let p=document.createElement('p');

//attaching all elements
imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(imgElement);
carousel.appendChild(slide);

//setting up images
imgElement.src=movies[slide Index].image;
slideIndex++

//setting elements classnames
slide.className='slider';
content.className='slide-content';
h1.className='movie-title';
P.className='movie-des';
sliders.push(slide);
if(slide.length)
{
sliders[0].style.marginLeft='calc(-${100*(sliders.length-2)}%-${30*(sliders.length-2)}px)';
}
}
for(let i=0;i<3;i++)
{
createSlide();
}

setInterval(()=>{
createSlide();
},3000);

//video cards
const videoCards=[...document.querySelectorAll('video-card')];
videoCards.forEach(item=>{
item.addEventListener('mouseover',()=>{
video.play()
})
item.addEventListener('mouseleave',()=>{
let video=item.children[1];
let cardContainers=[...document.querySelectorAll('.card-container')];
let preBtns=[...document.querySelectorAll('.pre-btn')];
let nxtBtns=[...document.querySelectorAll('.nxt-btn')];
cardComtainers.forEach(item,i)=>{
let containerDimesnsions=item.getBoundingClientRect();
let containerWidth=ContainerDimensions.width;
nxtBtns[i].addEventListener('click',()=>{
item.ScrollLeft+=ContainerWidth-200;
})
preBtns[i].addEventListener('click',()=>{
item.ScrollLeft-=ContainerWidth+200;
})
})
