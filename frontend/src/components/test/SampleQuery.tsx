"use client";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from '@/service/getTrends';
import { useState, useEffect } from "react";

export default function SmapleQuery() {
  const { data } = useQuery({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  })

  const [loadData, setLoadData] = useState([])

  useEffect(() => {
    if (data?.RESRESTRT && data.RESRESTRT[1] && data.RESRESTRT[1].row) {
      setLoadData(data.RESRESTRT[1].row);
    }
  }, [data]);
  console.log(loadData)
  return (
    <div>
      <div>
        <h3>나를 위한 트렌드</h3>
        <ul>
          {loadData.map((item, index) => (
            <li key={index}>{item.BIZPLC_NM}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}