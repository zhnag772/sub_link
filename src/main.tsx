'use client'

import React, { useState } from 'react';

export default function LoadingIndicator() {
    // 初始化 text 状态
    const [text, setText] = useState<string>('');
    const [tips, setTips] = useState<string>('');
    const link = 'http://127.0.0.1:3000/api/8fc7af490215e9d4304ac89bc667561c';

    const handleClick = async () => { 
        if(text === ''){
            setTips('请输入内容');
            return;
        }
        const data = await fetch('/api/home', { method: 'POST', body: text });
        const info = await data.json();
        setTips(info);
    };

    return (
        <div className='p-5 w-full filx flex-col space-y-3 items-center justify-center'>
            {/* 绑定 text 到 textarea 并添加 onChange 处理器 */}
            <textarea
                className='w-full p-2 border border-gray-300 rounded-md'
                value={text} // 绑定当前的 text 状态
                onChange={(e) => setText(e.target.value)} // 当内容变化时更新状态
                rows={20}
                style={{ resize: 'none' }}
            >
            </textarea>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-full cursor-pointer hover:bg-blue-400 select-none' onClick={handleClick}>写入</button>
            <div className='w-full h-5 text-green-600 text-center'>{tips}</div>
            <div className='w-full h-9 flex items-center justify-center mt-6'>
                <span className='text-nowrap mr-3'>订阅链接: </span>
                <input className='w-full h-full px-2 border rounded-md' value={link} readOnly />
                <button className='w-28 px-4 py-2 bg-blue-500 text-white rounded-md ml-2 cursor-pointer hover:bg-blue-400 select-none'>复制</button>
            </div>
        </div>
    );
}