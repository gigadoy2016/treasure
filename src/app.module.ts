import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoragesModule } from './storages/storages.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:password@localhost:2277/admin'),
    StoragesModule
  ],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {}
