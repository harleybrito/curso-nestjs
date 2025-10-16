import { Module } from '@nestjs/common';

import { TegamiController } from './tegami.controller';

@Module({
  controllers: [TegamiController],
})
export class TegamiModule {}
