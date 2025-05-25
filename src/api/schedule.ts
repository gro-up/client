import { BASE_URL } from "./base";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "@/hooks/auth";
const cookies = new Cookies();
const token = cookies.get(ON_STEP_TOKEN_NAME);
//스케쥴 전체 조회
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

//스케쥴 범위별 일정조회
export async function getSchedulesByDateRange(start: string, end: string) {
  const url = `${BASE_URL}/api/schedules/range?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`;

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
    throw new Error(errorData.message || "날짜 범위 일정 조회 실패");
  }

  return res.json();
}
