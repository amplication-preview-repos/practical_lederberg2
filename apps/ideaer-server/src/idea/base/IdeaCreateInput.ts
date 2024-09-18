/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentCreateNestedManyWithoutIdeasInput } from "./CommentCreateNestedManyWithoutIdeasInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { VoteCreateNestedManyWithoutIdeasInput } from "./VoteCreateNestedManyWithoutIdeasInput";

@InputType()
class IdeaCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutIdeasInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutIdeasInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutIdeasInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutIdeasInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => VoteCreateNestedManyWithoutIdeasInput,
  })
  @ValidateNested()
  @Type(() => VoteCreateNestedManyWithoutIdeasInput)
  @IsOptional()
  @Field(() => VoteCreateNestedManyWithoutIdeasInput, {
    nullable: true,
  })
  votes?: VoteCreateNestedManyWithoutIdeasInput;
}

export { IdeaCreateInput as IdeaCreateInput };
