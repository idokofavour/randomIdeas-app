const mongoose = require('mongoose');

connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongodb Connected ${conn.connection.host}`);
};

mongoose.set('strictQuery', true);
module.exports = connectDB;