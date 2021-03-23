import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StoragesService } from './storages.service'

@Controller('storages')
export class StoragesController {
    constructor(private storageService: StoragesService){
    }

    @Get()
    async getStorage(){
        return this.storageService.getStorgesAll();
    }

    @Get(':id')
    getOne(@Param('id') id:number){
    //async getOne(@Param('id') id:number){
        console.log(id);
        return this.storageService.getStorgeById(id);
    }

}
