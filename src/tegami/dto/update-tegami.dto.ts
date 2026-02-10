/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';

import { CreateTegamiDto } from './create-tegami.dto';

export class UpdateTegamiDto extends PartialType(CreateTegamiDto) {
  @IsBoolean({ message: 'Readen must be a boolean.' })
  @IsOptional()
  readonly readen: boolean;
}
