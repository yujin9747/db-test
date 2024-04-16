import { IrDeviceType } from '../../shemas/shared/enum/IrDeviceType';

export class CreateIrTypeModelDto {
  type: IrDeviceType;
  model: string;
}
