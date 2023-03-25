const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const middleware = require('./MiddleWare/MiddleWareToken');
const RegisterRoute = require("./Routers/UserRouter");
const NoteRouter = require("./Routers/NoteRouter")
const cors = require('cors');
const app = express();


mongoose.connect("mongodb+srv://ugramraju:8CJH4NByw18Oc6J7@cluster0.nhpdi1s.mongodb.net/?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(
    () => console.log('DB Connection established')
)

app.use(express.json());

app.use(cors({origin:"*"}))
app.use("/",RegisterRoute)
app.use("/",NoteRouter)
app.listen(8000,()=>{
    console.log('Server running on 8000')
})