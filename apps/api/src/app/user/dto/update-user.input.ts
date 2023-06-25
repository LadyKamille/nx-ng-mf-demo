import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  id: number;

  @Field()
  first_name: string;

  @Field()
  last_name: string;
}
