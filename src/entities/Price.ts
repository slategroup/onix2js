import { PriceTypeEnum, PriceType } from "../codelists/PriceType";
import {
  CurrencyCodeBasedOnIso_4217Enum,
  CurrencyCodeBasedOnIso_4217,
} from "../codelists/CurrencyCodeBasedOnIso_4217";

import { parseValue, parseType } from "../utils/parse";
import { Territory } from "./Territory";
import { DiscountCoded } from "./DiscountCoded";

export class Price {
  constructor(json: any) {
    this.priceType = parseType(json, "PriceType", PriceType);
    this.priceAmount = parseFloat(parseValue(json, "PriceAmount"));
    this.currencyCode = parseValue(json, "CurrencyCode");
    this.currency = parseType(
      json,
      "CurrencyCode",
      CurrencyCodeBasedOnIso_4217
    );
    if (json.Territory) this.territory = new Territory(json.Territory[0]);
  }

  priceType: PriceTypeEnum;
  priceAmount: Number;
  currencyCode: string;
  currency: CurrencyCodeBasedOnIso_4217Enum;
  territory: Territory;
  discountCodeds: DiscountCoded[];
}

// <Price>
//     <PriceType>05</PriceType>
//     <PriceAmount>55.00</PriceAmount>
//     <CurrencyCode>SEK</CurrencyCode>
// </Price>

//   <Price>
//     <PriceType>01</PriceType>
//     <DiscountCoded>
//       <DiscountCodeType>02</DiscountCodeType>
//       <DiscountCodeTypeName>HBG</DiscountCodeTypeName>
//       <DiscountCode>XL</DiscountCode>
//     </DiscountCoded>
//     <PriceAmount>25.98</PriceAmount>
//     <CurrencyCode>USD</CurrencyCode>
//     <Territory>
//       <CountriesIncluded>AD AE AF AL AM AO AQ AR AS AT AW AX AZ BA BE BF BG BH BI BL BO BQ BR BV BY CA CD CF CG CH CI CL CN CO CR CU CV CW CX CZ DE DJ DK DO DZ EC EE EH ER ES ET FI FM FO FR GA GE GF GL GN GP GQ GR GT GU GW HK HM HN HR HT HU ID IL IR IS IT JP KG KH KM KP KR KZ LA LB LI LR LT LU LV LY MA MC MD ME MF MG MH MK ML MM MO MP MQ MR MX MY NC NE NI NL NO NU OM PA PE PF PH PL PM PR PS PT PW PY QA RE RO RS RU RW SA SE SG SI SJ SK SM SN SR SS ST SV SX SY TD TF TG TH TJ TK TL TM TN TR TW UA UM US UY UZ VA VE VI VN WF YT</CountriesIncluded>
//     </Territory>
//     <PriceDate>
//       <PriceDateRole>14</PriceDateRole>
//       <Date dateformat="00">20200124</Date>
//     </PriceDate>
//   </Price>
//   <Price>
//     <PriceType>01</PriceType>
//     <DiscountCoded>
//       <DiscountCodeType>02</DiscountCodeType>
//       <DiscountCodeTypeName>HBG</DiscountCodeTypeName>
//       <DiscountCode>XL</DiscountCode>
//     </DiscountCoded>
//     <PriceAmount>33.98</PriceAmount>
//     <CurrencyCode>CAD</CurrencyCode>
//     <Territory>
//       <CountriesIncluded>AD AE AF AL AM AO AQ AR AS AT AW AX AZ BA BE BF BG BH BI BL BO BQ BR BV BY CA CD CF CG CH CI CL CN CO CR CU CV CW CX CZ DE DJ DK DO DZ EC EE EH ER ES ET FI FM FO FR GA GE GF GL GN GP GQ GR GT GU GW HK HM HN HR HT HU ID IL IR IS IT JP KG KH KM KP KR KZ LA LB LI LR LT LU LV LY MA MC MD ME MF MG MH MK ML MM MO MP MQ MR MX MY NC NE NI NL NO NU OM PA PE PF PH PL PM PR PS PT PW PY QA RE RO RS RU RW SA SE SG SI SJ SK SM SN SR SS ST SV SX SY TD TF TG TH TJ TK TL TM TN TR TW UA UM US UY UZ VA VE VI VN WF YT</CountriesIncluded>
//     </Territory>
//     <PriceDate>
//       <PriceDateRole>14</PriceDateRole>
//       <Date dateformat="00">20200124</Date>
//     </PriceDate>
//   </Price>
