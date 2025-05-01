import { useState } from "react";

export function useAddressState() {
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  return {
    address,
    setAddress,
    addressDetail,
    setAddressDetail,
  };
}
