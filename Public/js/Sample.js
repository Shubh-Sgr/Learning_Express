console.log("hello from js file in public folder")

fetch("http://puzzle.mead.io/puzzle").then((res)=>{
    console.log(res.json())
})


const form=document.querySelector("form")

const btn=document.querySelector("button")

const box=document.querySelector("input")

const p1=document.querySelector("#para1")

p1.textContent="Please Fill the empty slot above to get details"

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    p1.textContent=""
    console.log(box.value)
})

// console.log(form)