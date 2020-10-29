import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreatePostDTO {
  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  date: Date;

  @Field()
  type: string;

  @Field()
  location: string;
}
