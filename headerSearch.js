const searchModal = document.querySelector(".search-modal");
const searchPopupBtn = document.getElementById("form-design");

searchPopupBtn.addEventListener("click", event=>{
    searchModal.style.display = "block";
});

searchModal.addEventListener("click", event=>{
    if(event.target === searchModal){
        searchModal.style.display = "none"; 
    }
});