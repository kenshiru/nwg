import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Balance {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    amount: number;

    @Column()
    currency: string;

    @ManyToOne(() => User, (user) => user.balances)
    @Field((type) => User)
    user: User;
}
