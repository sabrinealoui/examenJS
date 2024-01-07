import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const conferenceSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        nbrPaperMax: {
            type: Number,
            required: true
        },
        
    },
    
);

export default model('Conference', conferenceSchema);