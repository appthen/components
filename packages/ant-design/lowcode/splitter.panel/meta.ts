import snippets from './snippets';

export default {
  snippets,
  componentName: 'Splitter.Panel',
  title: '分割面板子项',
  category: '布局',
  props: [
    {
      name: 'defaultSize',
      title: { 
        label: '初始大小', 
        tip: '初始面板大小，支持数字px或百分比%' 
      },
      propType: ['number', 'string'],
      setter: ['NumberSetter', 'StringSetter', 'VariableSetter']
    },
    {
      name: 'min',
      title: { 
        label: '最小阈值', 
        tip: '最小阈值，支持数字px或百分比%' 
      },
      propType: ['number', 'string'],
      setter: ['NumberSetter', 'StringSetter', 'VariableSetter']
    },
    {
      name: 'max',
      title: { 
        label: '最大阈值', 
        tip: '最大阈值，支持数字px或百分比%' 
      },
      propType: ['number', 'string'],
      setter: ['NumberSetter', 'StringSetter', 'VariableSetter']
    },
    {
      name: 'size',
      title: { 
        label: '面板大小', 
        tip: '受控面板大小，支持数字px或百分比%' 
      },
      propType: ['number', 'string'],
      setter: ['NumberSetter', 'StringSetter', 'VariableSetter']
    },
    {
      name: 'collapsible',
      title: { 
        label: '快速折叠', 
        tip: '是否启用快速折叠功能' 
      },
      propType: ['bool', 'shape'],
      defaultValue: false,
      setter: ['BoolSetter', 'JsonSetter', 'VariableSetter']
    },
    {
      name: 'resizable',
      title: { 
        label: '可拖拽', 
        tip: '是否开启拖拽伸缩功能' 
      },
      propType: 'bool',
      defaultValue: true,
      setter: ['BoolSetter', 'VariableSetter']
    }
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      
      style: true,
      className: true
    }
  }
};