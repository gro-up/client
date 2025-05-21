import { BASE_URL } from "./base";
import { Cookies } from "react-cookie";
import { COOKIES } from "@/hooks/auth";
const cookies = new Cookies();
const token = cookies.get(COOKIES.groAccessToken);
//스케쥴조회
export async function getSchedules() {
  const res = await fetch(`${BASE_URL}/api/schedules`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "일정 조회에 실패했습니다.");
  }

  return res.json();
}

//스케쥴생성
export async function createSchedule(payload: {
  companyId?: number;
  companyName: string;
  step: string;
  dueDate: string;
  position: string;
  memo: string;
}) {
  const res = await fetch(`${BASE_URL}/api/schedules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "일정 추가에 실패했습니다.");
  }

  return res.json();
}
