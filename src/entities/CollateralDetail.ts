import { TextContent } from "./TextContent";
import { SupportingResource } from "./SupportingResource";
import { parseValue } from "../utils/parse";

export class CollateralDetail {
  constructor(json: any) {
    this.textContents =
      (json.TextContent || []).map((tc) => new TextContent(tc)) || [];

    // shortcut for backwards compatibility.
    this.textContent = this.textContents[0];

    this.supportingResources =
      (json.SupportingResource || []).map((sr) => new SupportingResource(sr)) ||
      [];
  }

  textContent: TextContent;
  textContents: TextContent[];
  supportingResources: SupportingResource[];
}
