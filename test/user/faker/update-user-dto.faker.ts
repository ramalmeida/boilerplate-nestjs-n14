import { plainToClass } from 'class-transformer';
import * as faker from 'faker';
import { UpdateUserDto } from '../../../src/user/dto/update-user.dto';

export const generateUpdateUserDto = () =>
  plainToClass(UpdateUserDto, {
    alternative_id: faker.datatype.string(50),
    name: faker.datatype.string(50),
    email: faker.datatype.string(50),
    google_tenant_id: faker.datatype.string(50),
    avatar_image_uploaded_date: faker.datatype.string(50),
    admin_blocked_date: faker.datatype.string(50),
    security_stamp: faker.datatype.string(50),
    settings: faker.datatype.string(50),
    timezones: faker.datatype.string(50),
    languagues: faker.datatype.string(50),
    tenants: faker.datatype.string(50),
  });
