import { PriceDateRoleEnum, PriceDateRole } from "../codelists/PriceDateRole";
import { parseOnixDate } from "../utils/date";

import { parseValue, parseType } from "../utils/parse";

export class PriceDate {
  constructor(json) {
    this.priceDateRole = parseType(json, "PriceDateRole", PriceDateRole);
    this.date = parseOnixDate(parseValue(json, "Date"));
  }

  priceDateRole: PriceDateRoleEnum;
  date: Date;
}

//     <PriceDate>
//       <PriceDateRole>14</PriceDateRole>
//       <Date dateformat="00">20200124</Date>
//     </PriceDate>
