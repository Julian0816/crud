import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { WasteController } from './waste.controller';
import { WasteService } from './waste.service';
import { Waste } from './waste.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Waste])],
  controllers: [WasteController],
  providers: [WasteService]
})
export class WasteModule {}
