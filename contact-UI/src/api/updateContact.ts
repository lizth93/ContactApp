import { Contacts } from "../types/card";
import httpRequest from "./httpRequest";
import { RequestOptions } from "../types/api";

export default async function updateContact(
  id: number,
  updatedContact: Contacts
) {
  const url = `Contact/${id}`;
  const raw = JSON.stringify(updatedContact);
  const options: RequestOptions = {
    method: "PUT",
    body: raw,
  };

  return httpRequest(url, options);
}
