import * as mongoose from 'mongoose';

export const StorageSchema = new mongoose.Schema({
    id: Number,
    name: String,
    created: Date,
    status: Number
});