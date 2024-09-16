import type {
  PaginatedPostsWithUserAndCategory,
  PostWithUserAndCategory,
} from "@/types";
import { API_URL } from "./constants";

const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getPosts = async ({
  page = 1,
}: {
  page?: number;
}): Promise<PaginatedPostsWithUserAndCategory> => {
  const res = await fetch(`${API_URL}/posts?page=${page}`, {
    headers: apiHeaders,
  });

  return res.json();
};

export const getPost = async ({
  slug,
}: {
  slug: string;
}): Promise<PostWithUserAndCategory> => {
  const res = await fetch(`${API_URL}/posts/${slug}`, {
    headers: apiHeaders,
  });

  const data = await res.json();

  return data.data;
};
