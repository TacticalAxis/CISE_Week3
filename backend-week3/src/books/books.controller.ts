import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service'; // Import the service

@Controller('api/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {} // Inject the service

  @Get('test')
  testBooksRoute() {
    return 'book route testing!';
  }

  @Get()
  async getAllBooks() {
    try {
      return await this.booksService.findAll(); // Use the service method
    } catch (err) {
      return { status: 404, message: 'No Books found' };
    }
  }

  @Get(':id')
  async getSingleBook(@Param('id') id: string) {
    try {
      return await this.booksService.findOne(id); // Use the service method
    } catch (err) {
      throw new NotFoundException('No Book found');
    }
  }

  @Post()
  async addBook(@Body() book: Book) {
    try {
      return await this.booksService.create(book); // Use the service method
    } catch (err) {
      return { status: 400, message: 'Unable to add this book' };
    }
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() book: Book) {
    try {
      return await this.booksService.update(id, book); // Use the service method
    } catch (err) {
      return { status: 400, message: 'Unable to update the Database' };
    }
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    try {
      return await this.booksService.delete(id); // Use the service method
    } catch (err) {
      throw new NotFoundException('No such a book');
    }
  }
}
