import mongoose from "mongoose";

const ConnectDataBase=()=>{
    mongoose.connect(process.env.MONGO_DB_URL_PRODUCTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('MongoDB Connected'.green);
    }).catch(err => {
        console.error('MongoDB Connection Error:', err);
    });
}


export default ConnectDataBase;