function changeColorHeader(color, color2){
    const header = document.getElementById("header")
    header.style.background = color
    let link = document.getElementsByTagName("a")
    for (let i = 0; i < link.length; i++) {
        link[i].style.color = color2
    }
}
​
function elementscan(el,color1,color2){
    // el is element id when scroll reaches this point the header must change 
    // color1 header color 
    // color1 and text color
    let firstContent = document.getElementById(el);
    console.log("yessss",firstContent)
    let firstContentPosition = firstContent.getBoundingClientRect().top + window.pageYOffset;
    let firstContentheight = firstContent.getBoundingClientRect().height + firstContentPosition;
​
    let scrollPosition = document.documentElement.scrollTop;
​
    if (scrollPosition >= firstContentPosition && scrollPosition < firstContentheight){
        changeColorHeader(color1,color2)
    }
}
​
document.addEventListener("scroll" , () => {
    elementscan("product", "#d9e0ec", "#232323")
    elementscan("hero", "#203864", "#fff")
    elementscan("cta", "#203864", "#fff")
    elementscan("element 4", "background", "text color")
    elementscan("element 5", "background", "text color")
    elementscan("element 6", "background", "text color")
    elementscan("element 7", "background", "text color")
    elementscan("element 8", "background", "text color")
})