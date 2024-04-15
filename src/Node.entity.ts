import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsUUID } from "class-validator";

@Entity('node')
export class NodeEntity {
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
