import { BASE_URL } from "./base";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "@/hooks/auth";

//본인 조회
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
export async function uploadImageToS3(base64: string) {
  const token = new Cookies().get(ON_STEP_TOKEN_NAME);
  const url = `${BASE_URL}/api/images`;

  const formData = new FormData();
  const blob = await (await fetch(base64)).blob();
  formData.append("image", blob, "profile.png");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`, // Content-Type 설정하지 말 것!
    },
    body: formData,
  });

  const result = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(result.message || "이미지 업로드 실패");
  }
  console.log(result.data.imageUrl);
  return result.data.imageUrl; // { imageUrl: string }
}

export async function uploadImage(imageUrl: string) {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);
  const url = `${BASE_URL}/api/users`;
  console.log(imageUrl);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ imageUrl }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message);
  }

  return res.json();
}
