import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';

import { BooksModule } from './books/books.module';

import * as dotenv from 'dotenv';
dotenv.config();

const db = process.env.MONGO_URI;

@Module({
  controllers: [AppController],
  imports: [
    MongooseModule.forRoot(db),
    BooksModule
  ],
})

export class AppModule {}
