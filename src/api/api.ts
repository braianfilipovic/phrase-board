import { Phrase } from "../store/types/appContextTypes";

export const API_URL =
  "https://690d6caca6d92d83e851763d.mockapi.io/api/phrase-board";

export async function getPhrases(): Promise<Phrase[]> {
  try {
    const res = await fetch(`${API_URL}/Phrase`);

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
