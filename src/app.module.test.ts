import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseTest } from './config/mongoose.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [mongooseTest],
    }),
    MongooseModule.forRoot(
      mongooseTest().test,
      mongooseTest().additionalConfig,
    ),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModuleTest {}
