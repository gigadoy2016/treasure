import { Document } from 'mongoose';

export interface iStorage extends Document{
    readonly id: string,
    readonly name: string,
    readonly created: Date,
    readonly status: number
}