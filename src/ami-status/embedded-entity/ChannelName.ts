import { Column } from 'typeorm';

export class ChannelName {
  @Column({ name: '1' })
  name1: string;

  @Column({ name: '2' })
  name2: string;

  @Column({ name: '3' })
  name3: string;
}
