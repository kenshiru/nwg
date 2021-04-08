import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../../entities';
import { Connection } from 'typeorm';
import { CreateSessionInput } from './dto/CreateSessionInput';
import { Session } from '../../entities/Session';

@Resolver((of) => Session)
export class SessionResolver {
    constructor(private connection: Connection) {
    }

    @Mutation(() => User)
    async createSession(
        @Args('data') data: CreateSessionInput,
    ): Promise<Session> {
    }
}
