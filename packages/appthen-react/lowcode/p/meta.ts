import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ConditionStyleSetterConfig, NodeChildrenSetterConfig, ViewStyleSetterConfig } from '../base';

const PMeta: IPublicTypeComponentMetadata = {
  componentName: 'P',
  title: '段落',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'P',
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
        virtual: () => true,
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
    title: '段落',
    screenshot: '',
    schema: {
      componentName: 'P',
      props: {
        children: '段落文本',
      },
    },
  },
];

export default {
  ...PMeta,
  snippets,
}; 