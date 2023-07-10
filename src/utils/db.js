import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error('connection failed');
  }
};

export default connect;
