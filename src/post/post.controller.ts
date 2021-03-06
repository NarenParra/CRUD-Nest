import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto, EditPostDto } from './dto';
import { PostService } from './post.service';

@ApiTags('Post controller')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  geMany() {
    return this.postService.getMany();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getOne(id);
  }

  @Post()
  createOne(
    //para capturar los datos
    @Body() dto: CreatePostDto,
  ) {
    return this.postService.createOne(dto);
  }

  @Put(':id')
  editOne(@Param('id') id: number, @Body() dto: EditPostDto) {
    return this.postService.editOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.postService.deleteOne(id);
  }
}
