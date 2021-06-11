import {
  DiscountCodeType,
  DiscountCodeTypeEnum,
} from "../codelists/DiscountCodeType";

export class DiscountCoded {
  constructor(json: any) {
    this.discountCodeType = DiscountCodeType[json.DiscountCodeType[0]];
    this.discountCode = json.DiscountCode[0];
    if (json.DiscountCodeTypeName)
      this.discountCodeTypeName = json.DiscountCodeTypeName[0];
  }

  discountCodeType: DiscountCodeTypeEnum;
  discountCodeTypeName: string;
  discountCode: string;
}

//     <DiscountCoded>
//       <DiscountCodeType>02</DiscountCodeType>
//       <DiscountCodeTypeName>HBG</DiscountCodeTypeName>
//       <DiscountCode>XL</DiscountCode>
//     </DiscountCoded>
