

const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),

closeIcon = document.querySelector(".closeIcon"),
previewImg = document.querySelector(".previewImg"),
currentImg = document.querySelector(".current-img"),
totalImg = document.querySelector(".total-img"),
shadow = document.querySelector(".shadow");
threeGrid = document.querySelector(".threeGrid")
twoGrid = document.querySelector(".twoGrid")
var colorInStorage = localStorage.getItem("selectedColor")


/* call */ 
  // Simple example, see optional options for more configuration.
  const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', 

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        
    }
});
/* on page load */
$(document).ready(function() {     
    if (colorInStorage == null) {
        $(':root').css('--MainColor', 'rgb(124, 34, 4)'  );     
    }else{
        $(':root').css('--MainColor', colorInStorage ); 
    }
 });

pickr.on('change', (color, source, instance) => {
    var selectedColor=  color.toRGBA().toString()
    localStorage.setItem("selectedColor", selectedColor)
    $(':root').css('--MainColor', selectedColor );     
})

/* Galler */ 


for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent= gallery.length ;
    let newIndex = i;

    gallery[i].onclick = ()=>{
        
        const prevBtn = document.querySelector(".prev")
        const nextBtn = document.querySelector(".next")

        function preview() {
            currentImg.textContent=newIndex+1 ;
            let selectedImgUrl = gallery[newIndex].querySelector("img").src;
            previewImg.src = selectedImgUrl
            console.log(selectedImgUrl );
            
        }
        
        if (newIndex == 0) {
            prevBtn.style.display = "none";             
        }
        if(newIndex >= gallery.length - 1){
            nextBtn.style.display = "none";
        }

        function prevImg() {
            newIndex--;            
            if (newIndex == 0) {
                preview()
                prevBtn.style.display = "none";
                
            }else{

                preview()
                nextBtn.style.display = "block";

            }
            
        }

        prevBtn.onclick =()=>{
            prevImg()
            

        }
        

        function nextImg() {
            newIndex++; //increment index
            if(newIndex >= gallery.length - 1){
                preview(); 
                nextBtn.style.display = "none";
            }else{
                preview(); 
                prevBtn.style.display = "block";
            }
            
        }
        
        
        nextBtn.onclick = ()=>{ 
            nextImg()
        }




        preview(newIndex)

        previewBox.classList.add("show")
        shadow.style.display= "block";
        document.querySelector("body").style.overflow = "hidden";




        function closeFun() {
            shadow.style.display= "none";
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
            previewBox.classList.remove("show")
            document.querySelector("body").style.overflow = "scroll";
            
        }

        closeIcon.onclick= ()=>{
            closeFun()
           

        }
        $('body').keydown(function(e){
            if(e.which == 27){
                closeFun()
        
            }
           
        });
        


        

    }    
}






  threeGrid.onclick= ()=>{
    for (let i = 0; i < gallery.length; i++) {
       
        gallery[i].classList.replace("col-md-6","col-md-4")
        
    }
    console.log("3 Grid");
  }
  twoGrid.onclick= ()=>{
    for (let i = 0; i < gallery.length; i++) {
       
        gallery[i].classList.replace("col-md-4","col-md-6")
        
    }
    console.log("2 Grid");
    }