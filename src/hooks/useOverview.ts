import { useContext } from "react";
import { OverviewContext } from "../contexts/OverviewContext";

export function useOverview() {
  return useContext(OverviewContext);
}
