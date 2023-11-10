import mongoose from 'mongoose';
export default () => {
    mongoose.connect(process.env.DATABASE_URL as string, {
        authSource: "admin"
    });
}
