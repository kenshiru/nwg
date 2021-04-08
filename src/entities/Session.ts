import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Bet } from './Bet';
import { User } from './User';
import { Game } from './Game';

@Entity()
@ObjectType()
export class Session {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @ManyToOne((type) => User, (user) => user.sessions)
    @Field((type) => User)
    user: User;

    @ManyToOne((type) => Game, (game) => game.sessions)
    @Field((type) => Game)
    game: Game;

    @OneToMany((type) => Bet, (bet: Bet) => bet.game)
    @Field((type) => [Bet])
    bets: Bet[];
}
