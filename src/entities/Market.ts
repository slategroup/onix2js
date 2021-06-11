import { Territory } from "./Territory";

import { parseValue, parseType } from "../utils/parse";

export class Market {
  constructor(json: any) {
    this.territory = new Territory(parseValue(json, "Territory"));
  }

  territory: Territory;

  //TODO missing SalesRestriction
}

//   <Market>
//     <Territory>
//       <RegionsIncluded>WORLD</RegionsIncluded>
//     </Territory>
//   </Market>
