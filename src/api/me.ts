import { BASE_URL } from "./base";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "@/hooks/auth";

export async function getMe() {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);
  const url = `${BASE_URL}/api/users/me`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // credentials: "include", // 쿠키 인증 사용하는 경우
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message);
  }

  return res.json();
}
