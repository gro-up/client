import { BASE_URL } from "./base";

export const verifyEmail = async (email: string) => {
  const url = `${BASE_URL}/api/auth/email/verify-request?email=${encodeURIComponent(email)}`;

  const res = await fetch(url, {
    method: "POST",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.message);
  }

  return res.json();
};

export const verifyCheck = async (email: string, code: string) => {
  const url = `${BASE_URL}/api/auth/email/verify-check?email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`;

  const res = await fetch(url, {
    method: "POST",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.message);
  }

  return res.json();
};

export const signup = async ({ email, password }: { email: string; password: string }) => {
  const url = `${BASE_URL}/api/auth/signup`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message = errorData?.message || "회원가입 실패";
    throw new Error(message);
  }

  return res.json();
};

export const signin = async (email: string, password: string) => {
  const url = `${BASE_URL}/api/auth/signin`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await res.json();

  if (!res.ok || result.code !== 200) {
    const message = result.message || "로그인 실패";
    throw new Error(message);
  }

  return result.data;
};
