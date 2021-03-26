import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoragesModule } from './storages/storages.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://useer02:password@localhost:2277/treasury'),
    StoragesModule
  ],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {}
