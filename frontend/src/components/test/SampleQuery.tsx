"use client";
import {useQuery} from "@tanstack/react-query";

import { getTrends } from '@/service/getTrends';

export default function SmapleQuery() {
  const { data } = useQuery({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  })

  return (
    <div>
      <div>
        <h3>나를 위한 트렌드</h3>
        {/* 데이터 바인딩 */}
      </div>
    </div>
  );
}