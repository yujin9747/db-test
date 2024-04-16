import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

import { IrDeviceType } from '../shared/enum/IrDeviceType';

@Entity('ir_type_model')
@Index(['type', 'model'], { unique: true })
export class IrTypeModelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: IrDeviceType,
  })
  type: IrDeviceType;

  @Column()
  model: string;
}
