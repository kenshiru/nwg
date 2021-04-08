import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Balance } from './Balance';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Bet } from './Bet';
import { Session } from './Session';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field((type) => ID)
    id: number;

    @Column()
    @Field()
    name: string;

    @OneToMany(() => Balance, (balance) => balance.user)
    @Field((type) => [Balance])
    balances: Balance[];

    @OneToMany(() => Session, (session) => session.user)
    @Field((type) => [Bet])
    sessions: Session[];
}
