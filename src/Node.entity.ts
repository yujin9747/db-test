import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('node')
export class NodeEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
