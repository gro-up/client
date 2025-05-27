import { BASE_URL } from "./base";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "@/hooks/auth";
import { ScheduleUpdatePayload } from "@/types";

//스케쥴 전체 조회
export async function getSchedules() {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);
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
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);
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
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);
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

// 스케쥴 삭제
export async function deleteSchedule(scheduleId: number) {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);
  const url = `${BASE_URL}/api/schedules/${scheduleId}`;

  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // credentials: "include", // 쿠키 기반 인증이면
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "일정 삭제 실패");
  }

  return res.json();
}

// 단일 스케줄 조회
export async function getScheduleById(id: number) {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);
  const url = `${BASE_URL}/api/schedules/${id}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // credentials: "include", // 쿠키 방식일 경우 필요
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "일정 상세 조회 실패");
  }

  return res.json();
}

export async function updateSchedule(id: number, payload: ScheduleUpdatePayload) {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);
  const url = `${BASE_URL}/api/schedules/${id}`;

  const res = await fetch(url, {
    method: "PUT", // ✅ PUT 메서드 사용
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "일정 수정 실패");
  }

  return res.json();
}
