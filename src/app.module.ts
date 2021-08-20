import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose'
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017/mrl')],
  controllers: [],
  providers: [],
})
export class AppModule {}
