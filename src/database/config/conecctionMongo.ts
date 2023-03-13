import mongoose from "mongoose";
let conectionString = "mongodb://localhost:27017/Ecommerce";

const MongoDb =async () => {
    try {
        await mongoose.set('strict', false);
        await mongoose.connect(conectionString);
        console.log('Base de datos conectada correctamente')
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de iniciar la base de datos')
        
    }
}

export default MongoDb