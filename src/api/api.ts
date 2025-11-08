import { Phrase } from "../types/appContextTypes";

export const API_URL =
  "https://690fe38e45e65ab24ac4fc80.mockapi.io/phrase-board/api";

export async function getPhrases(): Promise<Phrase[]> {
  try {
    const res = await fetch(`${API_URL}/phrases`);

    if (!res.ok) {
      throw new Error("Error fetching lorem phrases");
    }

    const data: Phrase[] = await res.json();
    return data;
  } catch (error) {
    console.error("fetchPhrases error:", error);
    throw error;
  }
}
