import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WasteModule } from './waste/waste.module';
import { CookingModule } from './cooking/cooking.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), WasteModule, CookingModule],
  
})
export class AppModule {}
