const rows = document.querySelectorAll(".row");
rows.forEach(row => {
    const buttonCount = row.querySelectorAll(".btn").length;
    row.style.setProperty("--button-count", buttonCount);
});

var screen=document.querySelector("#screen");
var btn=document.querySelectorAll(".btn");

for(item of btn)
{
    item.addEventListener("click",(e)=>{
        btntext=e.target.innerText;
        screen.value+=btntext;
    })
}