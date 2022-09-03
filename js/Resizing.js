function Resize() {
  const editDiv = document.querySelector(".compiler-left-content");
  const consoleDiv = document.querySelector(".compiler-right-content");
  const resize = document.querySelector(".compiler-resizing");
  const containerSubCompiler = document.querySelector(".compiler-sub");

  editDiv.style.width = containerSubCompiler.clientWidth - 300 - 5 + "px";
  consoleDiv.style.width = "300px";

  resize.addEventListener("mousedown", initResize, false);
  function initResize() {
    window.addEventListener("mousemove", Resize, false);
    window.addEventListener("mouseup", stopResize, false);
  }
  function Resize(e) {
    editDiv.style.width = e.clientX - editDiv.offsetLeft + "px";
    consoleDiv.style.width =  containerSubCompiler.clientWidth - (e.clientX - editDiv.offsetLeft) + "px"
    // editDiv.style.height = e.clientY - editDiv.offsetTop + "px";
    if(e.clientX <= 580 ){
      stopResize();
      editDiv.style.width = "600px";
      consoleDiv.style.width = containerSubCompiler.clientWidth - 600 - 5 + "px";
    }

    if(e.clientX >= (containerSubCompiler.clientWidth - 250) ){
      stopResize(); 
      editDiv.style.width = containerSubCompiler.clientWidth - 250 - 5 + "px";
      consoleDiv.style.width = "290px";
    }
  }
  function stopResize() {
    window.removeEventListener("mousemove", Resize, false);
    window.removeEventListener("mouseup", stopResize, false);
  }
}

export default Resize;
