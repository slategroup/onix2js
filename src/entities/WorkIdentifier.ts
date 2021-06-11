import {
  WorkIdentifierTypeEnum,
  WorkIdentifierType,
} from "../codelists/WorkIdentifierType";

export class WorkIdentifier {
  constructor(json: any) {
    this.workType = WorkIdentifierType[json.WorkIDType[0]];
    this.idValue = json.IDValue[0];
  }

  workType: WorkIdentifierTypeEnum;
  idValue: string;
}

//   <WorkIdentifier>
//     <WorkIDType>01</WorkIDType>
//     <IDValue>9781455540365</IDValue>
//   </WorkIdentifier>
