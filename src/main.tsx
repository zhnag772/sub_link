'use client'

import React, { useState } from 'react';
import ClipboardJS from 'clipboard';
export default function LoadingIndicator() {
    // 初始化 text 状态
    const [text, setText] = useState<string>('');
    const [tips, setTips] = useState<string>('');
    const [link, setLink] = useState<string>('');

    const handleClick = async () => {
        if (text === '') {
            setTips('请输入内容');
            return;
        }
        const data = await fetch('/api/home', { method: 'POST', body: text });
        const info = await data.json();
        setLink(info);
        setTips('写入成功! 请复制链接');
    };

    const handleCopy = () => {
        const clipboard = new ClipboardJS('.copy-btn', {
            text: function () {
                return link;
            }
        });
        clipboard.on('success', function (event) {
            event.clearSelection();
            setTips('复制成功!');
        });
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
                <button className='copy-btn w-28 px-4 py-2 bg-blue-500 text-white rounded-md ml-2 cursor-pointer hover:bg-blue-400 select-none' onClick={handleCopy}> 复制</button>
            </div>
        </div>
    );
}