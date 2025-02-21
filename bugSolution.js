```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello</div>
  );
}

// app/api/route/[...param]/route.js

import { NextResponse } from 'next/server'

export async function middleware(req) {
  const { params } = req;
  console.log('params', params);
  if (params?.param) {
    if(params.param[0] === 'test'){
        return NextResponse.rewrite(new URL('/test', req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```