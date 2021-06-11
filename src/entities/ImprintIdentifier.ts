import {
  NameIdentifierTypeEnum,
  NameIdentifierType,
} from "../codelists/NameIdentifierType";

export class ImprintIdentifier {
  constructor(json: any) {
    this.imprintType = NameIdentifierType[json.ImprintIDType[0]];
    this.idValue = json.IDValue[0];
  }

  imprintType: NameIdentifierTypeEnum;
  idValue: string;
}
