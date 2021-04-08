import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from './entities';
import { UserModule } from './modules/user/user.module';
import { GameModule } from './modules/game/game.module';

@Module({
    imports: [
        UserModule,
        GameModule,

        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
            playground: true,
            include: [UserModule, GameModule],
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'apm',
            password: '123',
            database: 'nwg',
            entities: Object.values(entities),
            synchronize: true,
            logging: 'all',
        }),
    ],
})
export class AppModule {
}
