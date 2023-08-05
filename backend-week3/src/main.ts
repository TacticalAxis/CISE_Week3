// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// import * as dotenv from 'dotenv';
// dotenv.config();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();
//   await app.listen(process.env.SERVER_PORT || 8082);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as serverlessHttp from 'serverless-http';

import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  return app.init();
}

const server = serverlessHttp(async (req, res) => {
  if (!req.app) {
    await bootstrap();
  }
  req.app(req, res);
});

export default server;
