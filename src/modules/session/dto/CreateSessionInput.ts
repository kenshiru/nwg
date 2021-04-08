import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSessionInput {
    @Field()
    gameId: number;

    @Field()
    userId: number;

    @Field()
    currency: string;
}
