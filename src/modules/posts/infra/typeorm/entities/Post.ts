import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ObjectType, Field, ID } from 'type-graphql';

@Entity('posts')
@ObjectType()
class Post {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  company: string;

  @Field(() => String)
  @Column()
  position: string;

  @Field(() => Date)
  @Column('timestamp with time zone')
  date: Date;

  @Field(() => String)
  @Column()
  type: string;

  @Field(() => String)
  @Column()
  location: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Post;
