import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Game } from './Game';
import { User } from './User';

@Entity()
@ObjectType()
export class Bet {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    amount: number;

    @Column()
    @Field()
    currency: 'USD';

    @ManyToOne((type) => Game, (game) => game.bets)
    @Field(type => Game)
    game: Game;

    @OneToOne((type) => User, (user) => user.bets)
    @Field(type => User)
    user: User;
}
