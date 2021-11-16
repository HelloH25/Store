
import Express from 'express';
import { MongoClient} from 'mongodb';

const stringConexion = 
'mongodb+srv://superuser:autos123@proyectoconcesionario.ym7ne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(stringConexion,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

});
let conexion;
const app =Express();

app.use(Express.json());

app.get('/vehiculos', (req,res) => {
  console.log('alguien hizo get en la ruta /vehiculos');
  conexion
  .collection("vehiculos")
  .find({}).limit(50).toArray((err,result)=>{
    if (err){
        res.status(500).send("Error consultando los vehiculos");
    }  
    else {
        res.json(result);
    }
  });
  res.send(vehiculos)
  
});
app.post('/vehiculos/nuevo', (req, res) => {
    console.log(req);
    const datosVehiculo = req.body;
    console.log('llaves: ', Object.keys(datosVehiculo));
    try {
       if (
         object.keys(datosVehiculo).includes('name') &&
         object.keys(datosVehiculo).includes('brand') &&
         object.keys(datosVehiculo).includes('model')
       ) {
         conexion.collection('vehiculo').insertOne(datosVehiculo,(err,result)=>{
             if (err){
               console.error(err);
               res.sendStatus(500);
             } else {
                 console.log(result);
                 res.sendStatus(200);
             }
             
         });
         
       } else  {
         res.sendStatus(500);
       }
    }catch {
        res.sendStatus(500);
    }
});


const main = () => {
    client.connect((err,db)=>{
        if (err) {
            console.error ('Error conectando a la base de datos');
        }
        conexion = db.db('concesionario');
        console.log ("conexion exitosa");
        return app.listen(5000, () => {
            console.log('escuchando puerto 5000');
        });
    });
  
};

main();