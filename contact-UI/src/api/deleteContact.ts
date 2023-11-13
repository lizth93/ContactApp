import { RequestOptions } from "../types/api";
import httpRequest from "./httpRequest";

export default async function deleteContact(id: number) {
  const url = `${id}`;
  const options: RequestOptions = {
    method: "DELETE",
  };

  return httpRequest(url, options);
}
