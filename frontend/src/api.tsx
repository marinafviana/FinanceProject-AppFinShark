import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company.d";

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

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://finnhub.io/api/v1/stock/financials-reported?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) { 
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://finnhub.io/api/v1/stock/financials-reported?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) { 
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};

export const getCashFlow = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://finnhub.io/api/v1/stock/financials-reported?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) { 
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};