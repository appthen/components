import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ConditionStyleSetterConfig, NodeChildrenSetterConfig, ViewStyleSetterConfig } from '../base';

const LiMeta: IPublicTypeComponentMetadata = {
  componentName: 'Li',
  title: '列表项',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'Li',
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
    title: '列表项',
    screenshot: '',
    schema: {
      componentName: 'Li',
      props: {
        children: '列表项',
      },
    },
  },
];

export default {
  ...LiMeta,
  snippets,
}; 