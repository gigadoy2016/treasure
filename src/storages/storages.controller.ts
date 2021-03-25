import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { StoragesService } from './storages.service'
import { StorageDto } from './storage.dto'
import { Query } from 'mongoose';

@Controller('storages')
export class StoragesController {
    constructor(private storageService: StoragesService){
    }

    @Get()
    public async getStorage(){
        console.log(Date()+":>Storage:Get All: "+Date());
        return this.storageService.getStorgesAll();
    }

    @Post()
    public postStorge(@Body() obj: StorageDto){
        console.log(Date()+":>Storage:Post Body JSON: ");
        return this.storageService.postStorge(obj);
    }

    @Get(':id')
    public getStorageById(@Param('id') id:string){
        console.log(Date()+ ":>Storage:Get Obj by ID: "+id);

        const found = this.storageService.getStorgeById(id);
        if(!found){
            throw new NotFoundException(`Storage with id:${id} not found`);
        }
        return found;
    }

    @Get('/del/:id')
    public deleteStorageById(@Param('id') id:string){
        console.log(Date()+ ":>Storage:Delete Obj by ID: "+id);
        return this.storageService.deleteStorage(id);;
    }

    @Put(':id')
    public putStorage( @Param('id') id:string){

    }

}
