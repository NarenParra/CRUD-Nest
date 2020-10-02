import { CreatePostDto } from './create-post.dto';
import { PartialType } from '@nestjs/mapped-types';
import { OmitType } from '@nestjs/swagger';

//crea opcionales los campos - para actualizarlos
export class EditPostDto extends PartialType(
  //ignora el slug
  OmitType(CreatePostDto, ['slug'] as const),
) {}
