const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://brahithpavanantharajah:brahith2005@cluster0.vl86n.mongodb.net/dataList', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
