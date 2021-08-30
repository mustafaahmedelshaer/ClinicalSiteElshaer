
headingOne = document.querySelector(".headingOne")
iconOne = document.querySelector(".iconOne")

headingTwo = document.querySelector(".headingTwo")
iconTwo = document.querySelector(".iconTwo")

headingThree = document.querySelector(".headingThree")
iconThree = document.querySelector(".iconThree")

headingOne.onclick = ()=>{
    
    iconOne.classList.toggle("iconOne")
    iconTwo.classList.remove("rotate")
    iconThree.classList.remove("rotate")

}


headingTwo.onclick = ()=>{
    iconOne.classList.remove("iconOne")
    iconTwo.classList.toggle("rotate")
    iconThree.classList.remove("rotate")

}


headingThree.onclick = ()=>{
    iconOne.classList.remove("iconOne")
    iconTwo.classList.remove("rotate")
    iconThree.classList.toggle("rotate")

}
