import { Column } from 'typeorm';

import { ChannelName } from './ChannelName';
import { ChannelWatt } from './ChannelWatt';
import { ChannelWattHour } from './ChannelWattHour';

export class Channel {
  @Column(() => ChannelName)
  name: ChannelName;

  @Column(() => ChannelWatt)
  watt: ChannelWatt;

  @Column(() => ChannelWattHour)
  wattHour: ChannelWattHour;
}
