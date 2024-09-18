import type {
  LoginResponse,
  PaginatedPostsWithUserAndCategory,
  PostWithUserAndCategory,
  User,
} from "@/types";
import { API_URL } from "./constants";
import jsonwebtoken from "jsonwebtoken";

const jsonWebTokenSecret = "eAVE74nQYKndVwDT";

export function encodeJwt(item: Object) {
  try {
    var token = jsonwebtoken.sign(item, jsonWebTokenSecret, {
      expiresIn: "3d",
    });

    return token;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export function decodeJwt(token: string | null | undefined) {
  if (!token) return null;

  try {
    var decoded = jsonwebtoken.verify(token, jsonWebTokenSecret);
    return decoded as User;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export function formatValidationErrors(text: string) {
  // format error from laravel validation errors
  const err: string[] = [];

  const parsed = JSON.parse(text);

  if (parsed.errors) {
    Object.keys(parsed.errors).forEach((key) => {
      err.push(String(parsed.errors[key][0]));
    });
  }

  return err.join("\n");
}

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

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await fetch(`${API_URL}/login`, {
    headers: apiHeaders,
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    if (res.status === 422) {
      return new Error(formatValidationErrors(await res.text()));
    }

    return new Error(await res.text());
  }

  const data = await res.json();

  return data as LoginResponse;
};
