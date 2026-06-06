import axios from "axios";
import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
  CompanyTenK,
} from "./company.d";
import { API_BASE_URL } from "./config";

export interface SearchResponse {
  count: number;
  result: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `${API_BASE_URL}/stock/search?query=${query}`
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
      `${API_BASE_URL}/stock/profile/${query}`
    );

    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};

export const getQuote = async (query: string) => {
  try {
    const data = await axios.get(
      `${API_BASE_URL}/stock/quote/${query}`
    );

    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics>(
      `${API_BASE_URL}/stock/metrics/${query}`
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
      `${API_BASE_URL}/stock/financials-reported/${query}`
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
      `${API_BASE_URL}/stock/financials-reported/${query}`
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
      `${API_BASE_URL}/stock/financials-reported/${query}`
    );

    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};

export const getCompData = async (query: string) => {
  try {
    const data = await axios.get<string[]>(
      `${API_BASE_URL}/stock/peers/${query}`
    );

    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};

export const getTenK = async (query: string) => {
  try {
    const data = await axios.get<CompanyTenK[]>(
      `${API_BASE_URL}/stock/filings/${query}`
    );

    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
    return error.message || "An unexpected error has occurred.";
  }
};
