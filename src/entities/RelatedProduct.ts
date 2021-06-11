import {
  ProductRelationEnum,
  ProductRelation,
} from "../codelists/ProductRelation";
import { parseValue } from "../utils/parse";
import { ProductIdentifier } from "./ProductIdentifier";

export class RelatedProduct {
  constructor(json: any) {
    this.productRelationCode = ProductRelation[json.ProductRelationCode[0]];
    this.productIdentifier = new ProductIdentifier(
      parseValue(json, "ProductIdentifier")
    );
  }

  productRelationCode: ProductRelationEnum;
  productIdentifier: ProductIdentifier;
}

// <RelatedProduct>
// <ProductRelationCode>13</ProductRelationCode>
// <ProductIdentifier>
//   <ProductIDType>02</ProductIDType>
//   <IDValue>1455540366</IDValue>
// </ProductIdentifier>
// </RelatedProduct>
