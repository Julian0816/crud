import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Waste {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  chicken: number;

  @ApiProperty()
  @Column()
  fillets: number;

  @ApiProperty()
  @Column()
  wings: number;

  @ApiProperty()
  @Column()
  butterfly: number;

  @ApiProperty()
  @Column()
  thighs: number;

  @ApiProperty()
  @Column()
  bulkName1: string;

  @ApiProperty()
  @Column()
  bulkAmount1: number;

  @ApiProperty()
  @Column()
  bulkName2: string;

  @ApiProperty()
  @Column()
  bulkAmount2: number;

  @ApiProperty()
  @Column()
  bulkName3: string;

  @ApiProperty()
  @Column()
  bulkAmount3: number;
}