import { IrDeviceType } from '../../shemas/shared/enum/IrDeviceType';

export class CreateIrDeviceDto {
  name: string;
  irBulbId: string;
  type: IrDeviceType;
  model: string;
}
