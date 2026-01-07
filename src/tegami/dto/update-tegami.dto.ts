import { PartialType } from '@nestjs/mapped-types';

import { CreateTegamiDto } from './create-tegami.dto';

export class UpdateTegamiDto extends PartialType(CreateTegamiDto) {}
