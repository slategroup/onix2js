import { parseValue } from "../utils/parse";
import { ImprintIdentifier } from "./ImprintIdentifier";

export class Imprint {
  constructor(json: any) {
    this.imprintName = parseValue(json, "ImprintName");
    this.imprintIdentifiers =
      ((json && json.ImprintIdentifier) || []).map(
        (ii) => new ImprintIdentifier(ii)
      ) || [];
  }

  imprintName: string;
  imprintIdentifiers: ImprintIdentifier[];
}

// <Imprint>
//   <ImprintName>Cicero</ImprintName>
// </Imprint>;

// <Imprint>
//   <ImprintIdentifier>
//     <ImprintIDType>01</ImprintIDType>
//     <IDValue>010406</IDValue>
//   </ImprintIdentifier>
//   <ImprintName>Twelve</ImprintName>
// </Imprint>
