import note from "../../models/note";
import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function addNote(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}