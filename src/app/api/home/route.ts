import { NextResponse } from 'next/server';
import { setMemoryData } from '../memoryStore';

let data = '';


export async function POST(req: Request) {
   // 读取并解析请求体
  const text = await req.text(); // 如果请求体是 JSON 格式
   // 写入新的内容
  setMemoryData(text);

  return NextResponse.json('写入成功 请复制链接');
}
