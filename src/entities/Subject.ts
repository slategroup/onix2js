import {
  SubjectSchemeIdentifierEnum,
  SubjectSchemeIdentifier,
} from "../codelists/SubjectSchemeIdentifier";

import { parseValue, parseType } from "../utils/parse";

export class Subject {
  constructor(json: any) {
    this.subjectSchemeIdentifier =
      SubjectSchemeIdentifier[json.SubjectSchemeIdentifier[0]];
    if (json.SubjectCode != null) {
      this.subjectCode = json.SubjectCode[0];
    }
    if (json.SubjectHeadingText != null) {
      this.subjectHeadingText = json.SubjectHeadingText[0];
    }
  }

  subjectSchemeIdentifier: SubjectSchemeIdentifierEnum;
  // This type of value depends on the subjectSchemeIdentifier
  subjectCode: string;
  subjectHeadingText: string;
}

// <Subject>
//     <SubjectSchemeIdentifier>12</SubjectSchemeIdentifier>
//     <SubjectCode>FA</SubjectCode>
// </Subject>

//<Subject>
//<SubjectSchemeIdentifier>20</SubjectSchemeIdentifier>
//<SubjectHeadingText>football; basketball</SubjectHeadingText>
//</Subject>
