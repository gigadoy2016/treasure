import { HttpException, Injectable } from '@nestjs/common';
import { listStorage } from './storage.mock'

@Injectable()
export class StoragesService {
    private storages = listStorage;

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
