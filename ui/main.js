console.log('Loaded!');
//change the text of main text div
var element = document.getElementById('main-text');
element.innerHTML="New value";
//move img
var img = document.getElementById('piya');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=margin+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};