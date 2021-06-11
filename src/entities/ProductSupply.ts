import { Market } from "./Market";
import { SupplyDetail } from "./SupplyDetail";

export class ProductSupply {
  constructor(json: any) {
    this.supplyDetails =
      (json.SupplyDetail || []).map((m) => new SupplyDetail(m)) || [];
    this.markets = (json.Market || []).map((m) => new Market(m)) || [];
    // if (json.MarketPublishingDetail)
    //   this.marketPublishingDetail = new MarketPublishingDetail(
    //     json.MarketPublishingDetail[0]
    //   );
  }

  // <optional><ref name="MarketPublishingDetail" /></optional>
  // <oneOrMore><ref name="SupplyDetail" /></oneOrMore>

  markets: Market[];
  // marketPublishingDetail: MarketPublishingDetail;
  supplyDetails: SupplyDetail[];
}

// <ProductSupply>
//     <SupplyDetail>
//         <Supplier>
//             <SupplierRole>03</SupplierRole>
//             <SupplierName>xx Media AB</SupplierName>
//         </Supplier>
//         <ProductAvailability>20</ProductAvailability>
//         <Price>
//             <PriceType>05</PriceType>
//             <PriceAmount>55.00</PriceAmount>
//             <CurrencyCode>SEK</CurrencyCode>
//         </Price>
//     </SupplyDetail>
// </ProductSupply>

// <ProductSupply>
// <Market>
//   <Territory>
//     <CountriesIncluded>AD AE AF AL AM AO AQ AR AS AT AW AX AZ BA BE BF BG BH BI BL BO BQ BR BV BY CA CD CF CG CH CI CL CN CO CR CU CV CW CX CZ DE DJ DK DO DZ EC EE EH ER ES ET FI FM FO FR GA GE GF GL GN GP GQ GR GT GU GW HK HM HN HR HT HU ID IL IR IS IT JP KG KH KM KP KR KZ LA LB LI LR LT LU LV LY MA MC MD ME MF MG MH MK ML MM MO MP MQ MR MX MY NC NE NI NL NO NU OM PA PE PF PH PL PM PR PS PT PW PY QA RE RO RS RU RW SA SE SG SI SJ SK SM SN SR SS ST SV SX SY TD TF TG TH TJ TK TL TM TN TR TW UA UM US UY UZ VA VE VI VN WF YT</CountriesIncluded>
//   </Territory>
// </Market>
// <MarketPublishingDetail>
//   <MarketPublishingStatus>04</MarketPublishingStatus>
//   <MarketDate>
//     <MarketDateRole>01</MarketDateRole>
//     <Date dateformat="00">20180515</Date>
//   </MarketDate>
// </MarketPublishingDetail>
// <SupplyDetail>
//   <Supplier>
//     <SupplierRole>00</SupplierRole>
//     <SupplierName>Hachette Book Group USA</SupplierName>
//   </Supplier>
//   <ReturnsConditions>
//     <ReturnsCodeType>02</ReturnsCodeType>
//     <ReturnsCode>N</ReturnsCode>
//   </ReturnsConditions>
//   <ProductAvailability>20</ProductAvailability>
//   <SupplyDate>
//     <SupplyDateRole>02</SupplyDateRole>
//     <Date dateformat="00">20180515</Date>
//   </SupplyDate>
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
// </SupplyDetail>
// </ProductSupply>
