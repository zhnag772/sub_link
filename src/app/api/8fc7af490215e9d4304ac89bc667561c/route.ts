import { NextResponse } from 'next/server';
import { getMemoryData } from '../memoryStore';

export async function GET() {
  const text = getMemoryData();
  // 返回纯文本数据
  return new NextResponse(text, { headers: { 'Content-Type': 'text/plain' } });
}
