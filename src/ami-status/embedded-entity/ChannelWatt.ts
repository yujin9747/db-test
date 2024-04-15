import { Column } from 'typeorm';

export class ChannelWatt {
  @Column({ name: '1' })
  watt1: number;

  @Column({ name: '2' })
  watt2: number;

  @Column({ name: '3' })
  watt3: number;
}
