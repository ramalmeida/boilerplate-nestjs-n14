import { Type } from '@nestjs/common';
import { Options } from 'nodemailer/lib/dkim';
import { classToClass, plainToClass } from 'class-transformer';

export abstract class BaseDto {
  public static factory<T, R>(
    ResponseDto: Type<T>,
    plainResponseData: R,
    options?: Options,
  ): T {
    const updatedResponseData = plainToClass<T, R>(
      ResponseDto,
      plainResponseData,
      {
        strategy: 'excludeAll',
        enableImplicitConversion: true,
        ignoreDecorators: true,
      },
    );

    if (options) {
      return classToClass(updatedResponseData, {
        ...options,
        excludeExtraneousValues: true,
      });
    }
    return classToClass(updatedResponseData, {
      excludeExtraneousValues: true,
    });
  }
}
