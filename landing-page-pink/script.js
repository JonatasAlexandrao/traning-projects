
const selectElement = {

  $menu: document.querySelectorAll(".menu ul li"),

  elementClick() {
    selectElement.$menu.forEach(element => {
      element.addEventListener("click", (event) => {    
        selectElement.$menu = document.querySelectorAll(".menu ul li")
    
        selectElement.$menu.forEach(element => {
          element.classList.remove("-active")
        });
    
        const $elementActive = event.target
        $elementActive.classList.add("-active")
      })
    })
  }
  
}
selectElement.elementClick()




  

