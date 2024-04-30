export async function getTrends() {
  // 여기 url을 다른 api로 대체 하면 됨
  // .env에서 NEXT_PUBLIC_BASE_URL 설정해서 공통으로 사용 가능
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hashtags/trends`, {
    next: {
      tags: ['trends'],
    },
    // 옵션
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}