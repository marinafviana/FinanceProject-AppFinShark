import axios from "axios";
import { CommentGet, CommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/ErrorHandler";
import { API_BASE_URL } from "../config";

const api = `${API_BASE_URL}/comment/`;

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentPost>(
      api + symbol,
      {
        title,
        content,
      }
    );

    return data;
  } catch (error) {
    handleError(error);
  }
};

export const commentGetAPI = async (symbol: string) => {
  try {
    const data = await axios.get<CommentGet[]>(
      api + `?Symbol=${symbol}`
    );

    return data;
  } catch (error) {
    handleError(error);
  }
};
