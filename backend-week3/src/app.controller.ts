import { Controller, Get } from '@nestjs/common';

@Controller({})

export class AppController {
  @Get('/')
  getRoot() {
    return {'success': true, 'message': 'Hello World!'};
  }

  @Get('/test')
  getRoot2() {
    return {'success': true, 'message': 'Hello World 2!'};
  }
}
