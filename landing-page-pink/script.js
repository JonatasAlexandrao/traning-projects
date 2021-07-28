
const app = {

  $menu: document.querySelectorAll(".menu ul li"),
  $colorButton: document.querySelector(".btn.change"),

  elementClick() {
    app.$menu.forEach(element => {
      element.addEventListener("click", (event) => {    
        app.$menu = document.querySelectorAll(".menu ul li")
    
        app.$menu.forEach(element => {
          element.classList.remove("-active")
        });
    
        const $elementActive = event.target
        $elementActive.classList.add("-active")
      })
    })
  },

  colorChange() {
    app.$colorButton.addEventListener("click", () => {
      $root = document.querySelector("html")
      $root.classList.toggle("-color-two")
    })
  }

  
}

app.elementClick()
app.colorChange()




  

