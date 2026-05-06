import axios from "axios";
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company.d";

export interface SearchResponse {
  count: number;
  result: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://finnhub.io/api/v1/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) { 
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile>(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) { 
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://finnhub.io/api/v1/stock/metric?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) { 
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};