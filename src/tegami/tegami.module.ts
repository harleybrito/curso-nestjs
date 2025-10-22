import { Module } from '@nestjs/common';

import { TegamiController } from './tegami.controller';
import { TegamiService } from './tegami.service';

@Module({
  controllers: [TegamiController],
  providers: [TegamiService],
})
export class TegamiModule {}
