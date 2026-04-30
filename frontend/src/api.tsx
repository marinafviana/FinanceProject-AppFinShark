import axios from "axios";
import { CompanySearch } from "./company.d";

interface FinnhubSearchResponse {
  count: number;
  result: CompanySearch[];
}

export const searchCompanies = async (
  query: string
): Promise<CompanySearch[] | string> => {
  try {
    console.log("API KEY:", process.env.REACT_APP_API_KEY);

    const response = await axios.get<FinnhubSearchResponse>(
      "https://finnhub.io/api/v1/search",
      {
        params: {
          q: query,
          token: process.env.REACT_APP_API_KEY,
        },
      }
    );

    console.log("RESPOSTA:", response.data);

    return response.data.result;
  } catch (error: any) {
    console.log("ERRO COMPLETO:", error);
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("MESSAGE:", error.message);

    return "Erro ao conectar com a API";
  }
};