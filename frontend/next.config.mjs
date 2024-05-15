/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,  
    swcMinify: true,
  	async rewrite() {
      return [
        {
          // localhost:9000의 api 요청할 때 /api/~~ 로작성하면 'http://localhost:9000/~~' 로 요청한 것과 동일하게 적용이 된다.
          source: "/api/:path*",
          // cors로 문제가 되었던 url 입력
          destination: "https://openapi.gg.go.kr/RESRESTRT??KEY=18e1d92bf8c24dca87a372d1215cc5ad"
        }
      ]
    }
};

export default nextConfig;
