import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TegamiModule } from '../tegami/tegami.module';

@Module({
  imports: [TegamiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
