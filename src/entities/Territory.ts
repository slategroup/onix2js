import {
  RegionBasedOnIso_3166_2Enum,
  RegionBasedOnIso_3166_2,
} from "../codelists/RegionBasedOnIso_3166_2";

import { parseType, parseValue } from "../utils/parse";

export class Territory {
  constructor(json: any) {
    this.regionsIncluded = parseType(
      json,
      "RegionsIncluded",
      RegionBasedOnIso_3166_2
    );
    if (json.CountriesIncluded)
      this.countriesIncluded = parseValue(json, "CountriesIncluded").split(" ");
  }

  regionsIncluded: RegionBasedOnIso_3166_2Enum;
  countriesIncluded: [];
}

//     <Territory>
//       <RegionsIncluded>WORLD</RegionsIncluded>
//     </Territory>
