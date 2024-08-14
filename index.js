import express from "express"
import ejs from "ejs"
import mongoconnector from "./connections/mongoose.js"
import urldata from "./models/urlstore.js"
import router from "./Routes/shortener.js"
import { urlencoder,urlmaker } from "./middlewares/shortener.js"
import authrouter from "./Routes/auth.js"
import RestrictToLoggedInUserOnly from "./middlewares/auth.js"
import cookieParser from "cookie-parser"

const port = process.env.PORT || 8000
const app = express()

//MIDDLEWARES
app.use(urlencoder())






//EJS

app.set("view engine", "ejs")
app.set("views", "./views")


//STATIC
app.use(express.static("./css"))
app.use(express.static("./javascript"))
app.use(express.static("./images"))
app.use(cookieParser())
app.use(urlmaker)
//MONGOOSE

mongoconnector(process.env.mongourl).then(() => {
    console.log("MongoDB Connected Successfully")
})
.catch((err) => {
        console.log(err)
    })




//MIDDLEWARES






//ROUTES
app.use(authrouter)
app.use(RestrictToLoggedInUserOnly,router)


//ALL
router.get("*",(req,res)=>res.render("404"))

//LISTEN
app.listen(port, () => {
    console.log("http://localhost:" + port)
})

