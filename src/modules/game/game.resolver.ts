import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Game, User } from '../../entities';
import { Connection } from 'typeorm';
import { CreateGameInput } from './dto/CreateGameInput';

@Resolver((of) => User)
export class GameResolver {
    constructor(private connection: Connection) {
    }

    @Query(() => Game)
    async game(@Args('id', { type: () => Int }) id: number): Promise<Game> {
        return this.connection.getRepository(Game).findOne(id);
    }

    @Query(() => [Game])
    async games() {
        return this.connection.getRepository(Game).find();
    }

    @Mutation(() => User)
    async createGame(@Args('data') data: CreateGameInput): Promise<Game> {
        const game = new Game();
        game.name = data.name;

        return this.connection.manager.save(game);
    }
}
