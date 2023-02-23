import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cooking {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  Product: string;

  @ApiProperty()
  @Column()
  TotalMissing: number;

  @ApiProperty()
  @Column()
  UseByDate: Date;

  @ApiProperty()
  @Column()
  BatchCode: number;
}
