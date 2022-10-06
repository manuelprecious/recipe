const moreButton = document.querySelector(".footer-more-button");
const closeModalButton = document.querySelector(".close-button");
const moreModal = document.querySelector(".modal");

//Listening for Events.
//Action on Modal buttons


let modalOpen = false;
moreButton.addEventListener("click", event=>{
    
    if(modalOpen){
        moreModal.style.left="0";
        modalOpen = false;
    } else {
        moreModal.style.left = "17%";
        modalOpen = true;
    }
})


closeModalButton.addEventListener("click", event => {
    moreModal.style.left = "0";
    modalOpen = false;
})