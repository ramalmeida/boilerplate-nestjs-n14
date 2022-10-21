/* eslint-disable import/no-unresolved */
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
// import { CorsOptions } from 'cors';
// import compress from 'fastify-compress';
// import helmet from 'fastify-helmet';
import { join, resolve } from 'path';
import { AppModule } from './app.module';
import { DefaultExceptionsFilter } from './commons/filters/default-exception.filter';
import { TransformInterceptor } from './commons/interceptors/transform.interceptor';

const configService = new ConfigService();

const bootstrap = async (): Promise<void> => {
  const fastifyAdapter = new FastifyAdapter({
    logger: true,
    maxParamLength: 1000,
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
  );

  const corsOptions = {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    preflightContinue: false,
    optionsSuccessStatus: 200,
  };
  app.enableCors(corsOptions);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.useGlobalFilters(new DefaultExceptionsFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  app.setViewEngine({
    engine: {
      // eslint-disable-next-line global-require
      handlebars: require('handlebars'),
    },
    templates: join(resolve(__dirname, '..', 'views')),
  });

  const swaggerDocumentBuilder = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(configService.get<string>('SYSTEM_TITLE'))
    .setDescription(configService.get<string>('SYSTEM_DESCRIPTION'))
    .setVersion(configService.get<string>('SYSTEM_VERSION'))
    .addTag('Siclos')
    .build();

  const swaggerDocumentOptions: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerDocumentBuilder,
    swaggerDocumentOptions,
  );

  SwaggerModule.setup('api', app, swaggerDocument);

  // firebase.initializeApp({
  //   credential: firebase.credential.applicationDefault(),
  // });

  const port = process.env.PORT;

  app
    .listen(parseInt(port.toString(), 10), '0.0.0.0')
    .then(() => {
      Logger.log(`API Listen on ${port}`);
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch((error: any) => Logger.error(error));
};

bootstrap();
