import { NestFactory } from '@nestjs/core';
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory, } from '@nestjs/graphql';
import { UserResolver } from './modules/user/user.resolver';
import { printSchema } from 'graphql';

async function generateSchema() {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule);
    await app.init();

    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    const schema = await gqlSchemaFactory.create([UserResolver]);
    console.log(printSchema(schema));
}

generateSchema().then();
