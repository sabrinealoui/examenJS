import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const phdStudentSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
            //unique: true
        },
        image: {
            type: String,
            required: true
        }
    },
);

export default model('PhdStudent', phdStudentSchema);