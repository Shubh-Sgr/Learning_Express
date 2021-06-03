
// Path module for manipulating location of files and directories
const path=require("path")
const hbs=require("hbs")
const express=require("express")
const port = process.env.PORT || 3000

console.log(path.join(__dirname,"../public"))


// Handling bars -A Template engine



const exp=express();

//setting hbs template engine
exp.set("view engine","hbs")
const viewPath=path.join(__dirname,"../Templates/Views")
exp.set("views",viewPath)
// configuting hbs for partials
const pathPartial=path.join(__dirname,"../Templates/Partials")
hbs.registerPartials(pathPartial)


exp.get("",(req,res)=>{
    res.render("FirstHtml",{
        Title:"HomePage",
    })
})

exp.get("/About",(req,res)=>{
    res.render("About",{
        Title:"About Page",
    })
})

exp.use(express.static(path.join(__dirname,"../public")))

// exp.get("",(req,res)=>{
//     res.send("Hey!,Welcome to my first Express Site")
// })

exp.get("/Weather",(req,res)=>{
    if (!req.query.address){
        return res.send(
           "Enter Address For using our services"
        )
    }
    res.send(
        {
                address:req.query.address
        }
    )
})

exp.get("/html",(req,res)=>{
    res.send("<h1>Html Headings</h1>")
})

exp.get("/obj",(req,res)=>{
    res.send({
        name:"shubham",
        Age:22
    })
})

exp.get("/help/*",(req,res)=>{
    res.render("Error",{
        Title:"Ooop! You visited the page which doesn't exist"
    })
})

exp.get("*",(req,res)=>{
    res.render("Error",{
        Title:"I think..You are lost"
    })
})

exp.listen(port,()=>{
    console.log("Game is On!!!")
})


