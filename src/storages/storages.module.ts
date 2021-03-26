import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StorageSchema } from './storage.schema';
import { StoragesController } from './storages.controller';
import { StoragesService } from './storages.service';

@Module({
  imports: [MongooseModule.forFeature([{name:'Storage',schema:StorageSchema}])],
  controllers: [StoragesController],
  providers: [StoragesService]
})
export class StoragesModule {
}
