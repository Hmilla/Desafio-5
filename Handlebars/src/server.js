const express = require('express')
const app = express()
const rutas = require('./routes/index.js')
const {engine} = require('express-handlebars')
const path = require('path')

app.engine('hbs', engine({
    extname : 'hbs',
    defaultLayout: path.join(__dirname , './views/layouts/main.hbs'),
    layoutsDir: path.join(__dirname, './views'),
    partialsDir: path.join(__dirname, './views/partials')
}))

app.set('views', path.join(__dirname,'./views'))
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/productos',rutas)

app.listen(8080, (err)=>{
    if(err){
        console.log(`Hubo un error al escuchar el servidor ${err}`)
    }else{
        console.log(`Escuchando servidor 8080`)
    }
})