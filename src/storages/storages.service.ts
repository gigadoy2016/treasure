import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { listStorage } from './storage.mock';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { iStorage } from './storage.interface';
import { StorageDto } from './storage.dto'

@Injectable()
export class StoragesService {
    private storages = listStorage;

    //constructor(@InjectModel('storages') private readonly storageModel: Model<Storage>){};

    public getStorgesAll(){
        return this.storages;
    } 

    public getStorgeById( id:string ){
        const found = this.storages.find(item => item.id ===id)
        return found;
    }
    public putStorage(id:string){
        const found = this.storages.find(item => item.id ===id)
        if(!found){
            throw new NotFoundException(`Storage with id:${id} not found`);
        }

        return "All";
    }
    public postStorge(storage){
        const obj = this.getStorgeById(storage.id);
        if(!obj){
            console.log('New');
            this.storages.push(storage)
        }else{
            console.log('Updated');
            console.log('----------------------------------');
            obj.barcode = storage.barcode;
            obj.name = storage.name;
            obj.lastUpdated = ''+Date.now();
        }
        return true;
    }

    public deleteStorage( id:string){
        const found = this.storages.find(item => item.id ===id)
        if(!found){
            throw new NotFoundException(`Storage with id:${id} not found`);
        }
        this.storages = this.storages.filter( item =>{return item.id !== id} );
        console.log(this.storages);
        return true;
    }

    
}
