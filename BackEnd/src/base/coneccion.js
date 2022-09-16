const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin@cluster0.wa8mnax.mongodb.net/mytest";

 
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).then(() => {
  console.log('Database connected')
}).catch(err => {
  console.error(err)
})

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
// db.once('open', () => {
//   console.log('connected to MongoDB'); // si esta todo ok, imprime esto
// });


