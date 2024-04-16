import { AmiMode } from '../../shemas/ami-status/enum/AmiMode';

export class CreateAmiStatusDto {
  mode: AmiMode;
  nodeId: string;
  channelName11: string;
  channelName12: string;
  channelName13: string;
  channelName21: string;
  channelName22: string;
  channelName23: string;
  watt11: number;
  watt12: number;
  watt13: number;
  watt21: number;
  watt22: number;
  watt23: number;
  wattHour11: number;
  wattHour12: number;
  wattHour13: number;
  wattHour21: number;
  wattHour22: number;
  wattHour23: number;
}
