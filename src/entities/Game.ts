import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Session } from './Session';

@Entity()
@ObjectType()
export class Game {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Field()
    @Column()
    name: string;

    @OneToMany((type) => Session, (session: Session) => session.game)
    @Field((type) => [Session])
    sessions: Session[];
}
