import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ConditionStyleSetterConfig, NodeChildrenSetterConfig, ViewStyleSetterConfig } from '../base';

const LinkMeta: IPublicTypeComponentMetadata = {
  componentName: 'Link',
  title: '路由链接',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'Link',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '基础',
  icon: 'rqelink',
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
        name: 'to',
        setter: 'StringSetter',
        title: '路由地址',
        isRequired: true,
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
    title: '路由链接',
    screenshot: '',
    schema: {
      componentName: 'Link',
      props: {
        children: '链接文本',
        to: '/',
      },
    },
  },
];

export default {
  ...LinkMeta,
  snippets,
}; 