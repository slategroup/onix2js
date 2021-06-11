import { WorkRelationEnum, WorkRelation } from "../codelists/WorkRelation";
import { parseValue } from "../utils/parse";
import { WorkIdentifier } from "./WorkIdentifier";

export class RelatedWork {
  constructor(json: any) {
    this.workRelationCode = WorkRelation[json.WorkRelationCode[0]];
    this.workIdentifier = new WorkIdentifier(
      parseValue(json, "WorkIdentifier")
    );
  }

  workRelationCode: WorkRelationEnum;
  workIdentifier: WorkIdentifier;
}

// <RelatedWork>
//   <WorkRelationCode>01</WorkRelationCode>
//   <WorkIdentifier>
//     <WorkIDType>01</WorkIDType>
//     <IDValue>9781455540365</IDValue>
//   </WorkIdentifier>
// </RelatedWork>
