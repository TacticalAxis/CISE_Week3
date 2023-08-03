import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private readonly bookModel: Model<Book>) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async create(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book);
    return newBook.save();
  }

  async update(id: string, book: Book): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, book).exec();
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id).exec();
  }
}
