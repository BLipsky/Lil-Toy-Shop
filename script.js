function switchOne(){
    document.getElementById('mainimg').src = 'Little\ Bird\ Toy\ Co\ Site\ Photos/block2.jpg'
}
function switchTwo(){
    document.getElementById('mainimg').src = 'Little\ Bird\ Toy\ Co\ Site\ Photos/block1.jpg'
}
function switchThree(){
    document.getElementById('mainimg').src = 'Little\ Bird\ Toy\ Co\ Site\ Photos/block3.jpg'
}

let itemSold = itemSold()

function itemSold() {

    let selected = this.value

    document.getElementById('ttl').textContent = 
    document.getElementById('dcs').textContent = 
    document.getElementById('ttl').textContent = 

    document.getElementById('mainimg').src = 'Little\ Bird\ Toy\ Co\ Site\ Photos/' + selected + '.jpg';


}
