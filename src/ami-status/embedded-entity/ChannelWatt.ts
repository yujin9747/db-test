import { Column } from 'typeorm';

export class ChannelWatt {
  @Column()
  watt1: number;

  @Column()
  watt2: number;

  @Column()
  watt3: number;
}
