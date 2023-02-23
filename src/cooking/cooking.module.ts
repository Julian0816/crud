import { Module } from '@nestjs/common';
import { CookingController } from './cooking.controller';
import { CookingService } from './cooking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cooking } from './cooking.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Cooking])],
  controllers: [CookingController],
  providers: [CookingService],
})
export class CookingModule {}
