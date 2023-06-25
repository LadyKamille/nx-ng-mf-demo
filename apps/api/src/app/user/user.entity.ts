import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column()
  first_name: string;

  @Field()
  @Column()
  last_name: string;
}
