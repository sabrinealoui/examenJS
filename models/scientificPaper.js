import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const scientificPaperSchema = new Schema(
    {
        phdStudentId: {
            type: String,
            required: true
        },
        conferenceId: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        },
       
    },
    {
        timestamps: true
    }
);

export default model('ScientificPaper', scientificPaperSchema);