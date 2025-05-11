import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ConditionStyleSetterConfig, NodeChildrenSetterConfig, ViewStyleSetterConfig } from '../base';

const AMeta: IPublicTypeComponentMetadata = {
  componentName: 'A',
  title: '链接',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'A',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '基础',
  icon: 'rqebeijingtupian',
  hideInProjectType: ['web', 'app'],
  configure: {
    props: [
      {
        name: 'componentSetterHeader',
        title: ' ',
        display: 'plain',
        setter: {
          componentName: 'ComponentHeaderSetter',
          props: {
            fastBind: {
              inputField: 'children',
            },
          },
        },
      },
      {
        name: 'children',
        setter: 'StringSetter',
        title: '文本',
      },
      {
        name: 'href',
        setter: 'StringSetter',
        title: '链接地址',
        isRequired: true,
      },
      {
        name: 'target',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              { label: '当前窗口', value: '_self' },
              { label: '新窗口', value: '_blank' },
            ],
          },
        },
        title: '打开方式',
      },
      ViewStyleSetterConfig,
      ConditionStyleSetterConfig,
      NodeChildrenSetterConfig,
    ],
    supports: {
      style: false,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击',
          template: "onClick(e, ${extParams}) {\n  console.log('onClick');\n}",
        },
      ],
    },
    component: {
      isContainer: true,
    },
  },
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: '链接',
    screenshot: '',
    schema: {
      componentName: 'A',
      props: {
        children: '链接文本',
        href: '#',
      },
    },
  },
];

export default {
  ...AMeta,
  snippets,
}; 