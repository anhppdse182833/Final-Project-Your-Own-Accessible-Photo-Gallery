// Function called when page loads to set tabindex dynamically via JavaScript
function addTabIndex() {
    console.log("Adding tabindex dynamically to preview images");
    let images = document.querySelectorAll(".preview");
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

// Attach load event listener dynamically
window.addEventListener("load", addTabIndex);

// Function to update background image and alt text dynamically
function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    
    // Update background image using src variable
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Update inner text using alt variable
    imageDiv.textContent = previewPic.alt;
}

// Function to reset display box when mouse leaves or focus is removed (blur)
function unDo() {
    let imageDiv = document.getElementById("image");
    
    // Reset background image to empty
    imageDiv.style.backgroundImage = "url('')";
    
    // Reset text to original default message
    imageDiv.textContent = "Hover over or focus on an image below to display here.";
}
