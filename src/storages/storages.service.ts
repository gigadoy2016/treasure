import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { iStorage } from './storage.interface';
import { StorageDto } from './storage.dto'

@Injectable()
export class StoragesService {
    
    constructor(@InjectModel('Storage') private readonly storageModel:Model<iStorage>){}

    public async getStorgesAll(): Promise<StorageDto[]> {
        const storages = await this.storageModel.find().exec();
        console.log(storages);
        if(!storages || !storages[0]){
            throw new HttpException('Not Found ',404);
        }
        return storages;
    } 

    public async getStorgeById( id:string ):Promise<StorageDto> {
        const storage = await this.storageModel.findOne({id}).exec();
        return storage;
    }
    
    public async postStorge(newObj :StorageDto){
        const storage =await new this.storageModel(newObj);
        //ตรวจสอบว่ามี Id ซ้ำรึเปล่า
        const found = await this.getStorgeById(newObj.id);
        console.log(found);
        if(found){
            // Update storage to database by id.
            console.log('Update');
            const objFilter = {"id":newObj.id};
            const objUpdate = {$set:{"name":newObj.name,"barcode":newObj.barcode}};
            const options = {upsert:true};

            const updated = await this.storageModel.updateOne(objFilter,objUpdate,options).exec();
            return updated;
        }else{
            // Add new storage to database
            console.log('Add New.');
            return storage.save();
        }
    }

    public async deleteStorage( id:string){
        const storage = await this.storageModel.deleteOne({id}).exec();
        if(storage.deletedCount === 0){
            throw new HttpException('Not Found ',404);
        }
        return storage;
    }

    
}
