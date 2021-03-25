import * as mongoose from 'mongoose';

export const StorageSchema = new mongoose.Schema({
    id: String,
    name: String,
    created: Date,
    status: Number,
    lastUpdated: Date
});