import {
  TitleElementLevelEnum,
  TitleElementLevel,
} from "../codelists/TitleElementLevel";

import { parseValue, parseType } from "../utils/parse";

export class TitleElement {
  constructor(json: any) {
    this.titleElementLevel = parseType(
      json,
      "TitleElementLevel",
      TitleElementLevel
    );
    this.titleText = parseValue(json, "TitleText");
    if (json.PartNumber) this.partNumber = parseValue(json, "PartNumber");
    if (json.Subtitle) this.subtitle = parseValue(json, "Subtitle");
  }

  titleElementLevel: TitleElementLevelEnum;
  titleText: string;
  partNumber: string;
  subtitle: string;
}
