import { RequestOptions } from "../types/api";
import { Contacts } from "../types/card";
import httpRequest from "./httpRequest";

export default async function addContact(newContact: Contacts) {
  const raw = JSON.stringify(newContact);
  const options: RequestOptions = {
    method: "POST",
    body: raw,
  };

  return httpRequest("Contact", options);
}
