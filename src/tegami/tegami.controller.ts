import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateTegamiDto } from './dto/create-tegami.dto';
import { UpdateTegamiDto } from './dto/update-tegami.dto';
import { TegamiService } from './tegami.service';

@Controller('tegami')
export class TegamiController {
  constructor(private readonly tegamiService: TegamiService) {}

  @Get()
  readAll() {
    return this.tegamiService.readAll();
  }

  @Get(':id')
  read(@Param('id') id: string) {
    return this.tegamiService.read(+id);
  }

  @Post()
  create(@Body() body: CreateTegamiDto) {
    return this.tegamiService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateTegamiDto) {
    return this.tegamiService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tegamiService.delete(+id);
  }
}
