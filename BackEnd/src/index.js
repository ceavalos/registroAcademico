const express = require("express")
const app = express()
const port = 3000

 require('./base/coneccion'); // importa el archivo de conexión
const User = require('./esquemas/user'); // importa el esquema

 const user = new User({ name: 'eldevsin.site' }); // crea la entidad
 
 user.save().then((resp) => {
   console.log( "data almaenada "+ resp)
 }).catch((err) => {" Error al insertar en tabla"+ console.log(err)});

app.get('/',(req, res)=> {
    res.send("hola mundo")
})



app.listen(port, () =>{
    console.log(`Server UP on port ${port}`)
})