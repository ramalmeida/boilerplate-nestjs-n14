import { MongooseModuleOptions } from '@nestjs/mongoose';

export interface IMongooseConfig {
  url: string;
  additionalConfig: MongooseModuleOptions;
  useCreateIndex: boolean;
  test: string;
}

export const mongooseUrl = () => {
  const url = `mongodb://${process.env.MONGO_INITDB_HOST}:${process.env.MONGO_INITDB_PORT}/${process.env.MONGO_INITDB_DATABASE}`;
  return <IMongooseConfig>{
    url,
    additionalConfig: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      connectionFactory: (connection, _) => {
        return connection;
      },
    },
  };
};

export const mongooseTest = () => {
  const test = `mongodb://${process.env.MONGO_INITDB_HOST_TEST}:${process.env.MONGO_INITDB_PORT_TEST}/${process.env.MONGO_INITDB_DATABASE_TEST}`;
  return <IMongooseConfig>{
    test,
    additionalConfig: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      connectionFactory: (connection, _) => {
        return connection;
      },
    },
  };
};
