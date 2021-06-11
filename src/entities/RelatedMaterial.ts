import { RelatedWork } from "./RelatedWork";
import { RelatedProduct } from "./RelatedProduct";

export class RelatedMaterial {
  constructor(json: any) {
    this.relatedWorks = (json.RelatedWork || []).map(
      (rw) => new RelatedWork(rw)
    );

    this.relatedProducts = (json.RelatedProduct || []).map(
      (rp) => new RelatedProduct(rp)
    );
  }

  relatedWorks: RelatedWork[];
  relatedProducts: RelatedProduct[];
}
// <RelatedMaterial>
// <RelatedWork>
//   <WorkRelationCode>01</WorkRelationCode>
//   <WorkIdentifier>
//     <WorkIDType>01</WorkIDType>
//     <IDValue>9781455540365</IDValue>
//   </WorkIdentifier>
// </RelatedWork>
// <RelatedProduct>
//   <ProductRelationCode>13</ProductRelationCode>
//   <ProductIdentifier>
//     <ProductIDType>02</ProductIDType>
//     <IDValue>1455540366</IDValue>
//   </ProductIdentifier>
// </RelatedProduct>
// <RelatedProduct>
//   <ProductRelationCode>13</ProductRelationCode>
//   <ProductIdentifier>
//     <ProductIDType>15</ProductIDType>
//     <IDValue>9781455540365</IDValue>
//   </ProductIdentifier>
// </RelatedProduct>
// </RelatedMaterial>
