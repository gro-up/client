import { BASE_URL } from "./base";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "@/hooks/auth";
const cookies = new Cookies();
export async function createSchedule(payload: {
  companyId?: number;
  companyName: string;
  step: string;
  dueDate: string;
  position: string;
  memo: string;
}) {
  const tokenData = cookies.get(ON_STEP_TOKEN_NAME);

  const res = await fetch(`${BASE_URL}/api/schedules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenData}`,
    },

    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "일정 추가에 실패했습니다.");
  }

  return res.json();
}
