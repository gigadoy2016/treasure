import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { StoragesService } from './storages.service'
import { StorageDto } from './storage.dto'
import { Query } from 'mongoose';

@Controller('storages')
export class StoragesController {
    constructor(private storageService: StoragesService){
    }

    //Get All Storages.
    @Get()
    public async getStorage(){
        console.log(Date()+":>Storage:Get All: ");
        return this.storageService.getStorgesAll();
    }

    //Add or Update storage to Database.
    @Post()
    public postStorge(@Body() obj: StorageDto){
        console.log(Date()+":>Storage:Post Body JSON: ");
        return this.storageService.postStorge(obj);
    }

    //Get storage detail by Id.
    @Get(':id')
    public getStorageById(@Param('id') id:string){
        console.log(Date()+ ":>Storage:Get Obj by ID: "+id);

        const found = this.storageService.getStorgeById(id);
        return found;
    }

    //Delete storage record by id.
    @Get('/del/:id')
    public deleteStorageById(@Param('id') id:string){
        console.log(Date()+ ":>Storage:Delete Obj by ID: "+id);
        return this.storageService.deleteStorage(id);;
    }
}
