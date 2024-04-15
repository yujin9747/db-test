import { Column } from 'typeorm';

export class ChannelName {
  @Column()
  channelName1: string;

  @Column()
  channelName2: string;

  @Column()
  channelName3: string;
}
