import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { BooksController } from './books/books.controller';

import { BooksModule } from './books/books.module';

import * as dotenv from 'dotenv';
dotenv.config();

const MONGO_USER = process.env.MONGO_USER
const MONGO_PASS = process.env.MONGO_PASS
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_DB = process.env.MONGO_DB

const db = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`

@Module({
  controllers: [AppController],
  imports: [
    MongooseModule.forRoot(db),
    BooksModule
  ],
})

export class AppModule {}
