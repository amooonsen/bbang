"use client";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from '@/service/getTrends';
import { useEffect } from "react";

export default function SmapleQuery() {
  const { data } = useQuery({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  })

  useEffect(() => {
    // if (!data) return;
    console.log(data)
  }, [data])

  return (
    <div>
      <div>
        <h3>나를 위한 트렌드</h3>
        
        {/* {
          data.map(post => {
            <li key={post.id}>{post.title}</li>
          })
        } */}
      </div>
    </div>
  );
}