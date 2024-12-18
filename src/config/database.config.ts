import {MongooseModuleOptions} from '@nestjs/mongoose';
import {ConfigService} from '@nestjs/config';

export const databaseConfig = (configService: ConfigService): MongooseModuleOptions => {
    const mongoUri = process.env.NODE_ENV === 'production'
        ? configService.get<string>('MONGO_URI_PRODUCTION')
        : configService.get<string>('MONGO_URI_LOCAL');

    return {
        uri: mongoUri
    };
};
