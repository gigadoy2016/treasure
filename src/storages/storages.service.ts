import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { listStorage } from './storage.mock'
import { iStorage } from './storage.interface'

@Injectable()
export class StoragesService {

    private storages = listStorage;
    //constructor(@InjectModel('storages') private readonly storageModel: Model<Storage>){};

    public getStorgesAll(){
        return this.storages;
    }

    public getStorgeById( id:number ){
        const index = this.storages.findIndex((storage) => storage.id === id);
        //const storage = this.storages.find(1);

        if(index === 1){
            throw new HttpException('Not Found!',404);
        }
        console.log("------------------------------");
        console.log("index:"+index);
        //console.log(this.storages);
        //return storage;
    }
    public putStorage(id){
        return "All";
    }
    public postStorge(storage){
        return this.storages.push(storage);
    }

    public delete(id){
        return "All";
    }

    
}
