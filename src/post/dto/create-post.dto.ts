import { IsString, IsBoolean, IsArray, IsEnum } from 'class-validator';
import { EnumToString } from 'src/helpers/enumToString';
import { PostCategory } from '../enums';

export class CreatePostDto {
  @IsString()
  title: string;
  @IsString()
  slug: string;
  @IsString()
  excerpt: string;
  @IsString()
  content: string;
  @IsEnum(PostCategory, {
    message: `Invalid Option, options ${EnumToString(PostCategory)}`,
  })
  category: PostCategory;
  @IsArray()
  @IsString({ each: true })
  tags: string[];
  @IsBoolean()
  status: boolean;
}
