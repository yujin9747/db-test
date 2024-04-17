import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class DateBaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
