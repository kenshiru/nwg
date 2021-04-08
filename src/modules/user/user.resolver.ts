import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../entities';
import { Connection } from 'typeorm';
import { CreateUserInput } from './dto/CreateUserInput';

@Resolver((of) => User)
export class UserResolver {
    constructor(private connection: Connection) {
    }

    @Query(() => User)
    async user(@Args('id', { type: () => Int }) id: number) {
        return this.connection.getRepository(User).findOne(id);
    }

    @Query(() => [User])
    async users() {
        return this.connection.getRepository(User).find();
    }

    @Mutation(() => User)
    async createUser(@Args('userData') userData: CreateUserInput): Promise<User> {
        const user = new User();
        user.name = userData.name;

        return this.connection.manager.save(user);
    }
}
