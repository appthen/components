# @appthen/xterm

基于 xterm.js 封装的终端组件库，用于在 Appthen 低代码平台中使用。

## 介绍

@appthen/xterm 是一个简洁的 xterm.js 封装库，提供了终端功能和常用插件的快速集成。本库基于 xterm.js 官方库和多个常用插件，使您可以在 React 应用中轻松添加终端功能。

## 特性

- 简化的 API 访问
- 内置多个常用 xterm.js 插件：
  - FitAddon - 自动调整终端大小以适应容器
  - WebLinksAddon - 使终端中的链接可点击
  - SearchAddon - 提供终端内容搜索功能

## 安装

```bash
# 使用 npm 
npm install @appthen/xterm

# 使用 yarn
yarn add @appthen/xterm

# 使用 pnpm
pnpm add @appthen/xterm
```

## 使用示例

```tsx
import React, { useRef, useEffect } from 'react';
import { Terminal, FitAddon, WebLinksAddon, SearchAddon } from '@appthen/xterm';
import '@xterm/xterm/css/xterm.css'; // 别忘了导入样式

const XtermExample = () => {
  const terminalRef = useRef(null);
  
  useEffect(() => {
    if (terminalRef.current) {
      // 创建终端实例
      const terminal = new Terminal({
        cursorBlink: true,
        theme: {
          background: '#1E1E1E',
          foreground: '#FFFFFF'
        }
      });
      
      // 加载插件
      const fitAddon = new FitAddon();
      const webLinksAddon = new WebLinksAddon();
      const searchAddon = new SearchAddon();
      
      terminal.loadAddon(fitAddon);
      terminal.loadAddon(webLinksAddon);
      terminal.loadAddon(searchAddon);
      
      // 打开终端
      terminal.open(terminalRef.current);
      fitAddon.fit();
      
      // 示例：写入一些内容
      terminal.writeln('Welcome to @appthen/xterm');
      terminal.writeln('Try typing commands...');
      
      // 处理用户输入
      terminal.onData(data => {
        // 这里可以处理用户输入
        terminal.write(data);
      });
      
      // 在组件卸载时清理
      return () => {
        terminal.dispose();
      };
    }
  }, []);
  
  return <div ref={terminalRef} style={{ height: '400px', width: '100%' }} />;
};

export default XtermExample;
```

## API

本库导出以下组件：

- `Terminal` - xterm.js 的核心终端组件
- `FitAddon` - 用于自动调整终端大小
- `WebLinksAddon` - 用于使终端中的链接可点击
- `SearchAddon` - 用于在终端内容中搜索

所有 API 继承自原始 xterm.js 库，请参考 [xterm.js 官方文档](https://xtermjs.org/docs/) 了解更多详情。

## 许可证

MIT
