import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoragesModule } from './storages/storages.module';

@Module({
  imports: [StoragesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
