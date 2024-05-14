export async function getTrends() {
  // 여기 url을 다른 api로 대체 하면 됨
  // .env에서 NEXT_PUBLIC_BASE_URL 설정해서 공통으로 사용 가능
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hashtags/trends`, {
  //   next: {
  //     tags: ['trends'],
  //   },
  //   // 옵션
  //   credentials: 'include',
  //   cache: 'no-store',
  // });


  /**
   * 순서대로
   * baseURL: https://openapi.gg.go.kr/RESRESTRT?
   * 키지정 : KEY=18e1d92bf8c24dca87a372d1215cc5ad 
   * 타입: &TYPE=json (기본값은 xml로 되어 있어 변경)
   * 페이지 위치: &pIndex=2
   * 페이지당 요청수: &pSize=30
   * 요청인자(시군코드):&SIGUN_CD=41310
   * 참고 url : https://data.gg.go.kr/portal/intro/develop/searchBulletinPage.do
   */
  const res = await fetch(`https://openapi.gg.go.kr/RESRESTRT??KEY=18e1d92bf8c24dca87a372d1215cc5ad&TYPE=json&pIndex=2&pSize=30&SIGUN_CD=41310`, {
    next: {
      tags: ['restaruant'],
    },
    // 옵션
    // credentials: 'include',
    // cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }


  return res.json()
}