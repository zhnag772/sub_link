// 内存存储模块
let storedData: string = '';

export function setMemoryData(data: string) {
  storedData = data;
}

export function getMemoryData(): string {
  return storedData;
}