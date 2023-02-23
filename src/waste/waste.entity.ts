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
  bulkName: string;

  @ApiProperty()
  @Column()
  bulkAmount: number;
}