import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tegami')
export class TegamiController {
  @Get()
  read() {
    return 'Reading all tegami.';
  }

  @Get(':id')
  readById(@Param('id') id: string) {
    return 'Reading a tegami by id';
  }

  @Post()
  create(@Body() body: any) {}
}
