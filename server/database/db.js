import mongoose from 'mongoose';

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-nrvycbj-shard-00-00.qneiwff.mongodb.net:27017,ac-nrvycbj-shard-00-01.qneiwff.mongodb.net:27017,ac-nrvycbj-shard-00-02.qneiwff.mongodb.net:27017/?ssl=true&replicaSet=atlas-854ej9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const URL = 'mongodb://localhost:27017'
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;