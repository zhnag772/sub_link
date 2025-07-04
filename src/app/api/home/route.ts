import { NextResponse } from 'next/server';
import { setMemoryData } from '../memoryStore';

export async function POST(req: Request) {
   // 读取并解析请求体
  const text = await req.text(); // 如果请求体是 JSON 格式
   // 写入新的内容
  setMemoryData(text);
  const host = req.headers.get('host'); // 获取当前域名（如 localhost:3000 或 example.com）
  const protocol = req.url.startsWith('https') ? 'https://' : 'http://';
  const fullPath = `${protocol}${host}/api/8fc7af490215e9d4304ac89bc667561c`;
  return NextResponse.json(fullPath);
}
