import { parseValue } from "../utils/parse";

export class Sender {
  constructor(json: any) {
    this.senderName = parseValue(json, "SenderName");

    if (json.ContactName != null)
      this.contactName = parseValue(json, "ContactName");

    if (json.EmailAddress != null)
      this.emailAddress = parseValue(json, "EmailAddress");
  }

  senderName: string;
  contactName: string;
  emailAddress: string;
}
