import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ConditionStyleSetterConfig, NodeChildrenSetterConfig, ViewStyleSetterConfig } from '../base';

const UlMeta: IPublicTypeComponentMetadata = {
  componentName: 'Ul',
  title: '无序列表',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'Ul',
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
    title: '无序列表',
    screenshot: '',
    schema: {
      componentName: 'Ul',
      props: {},
    },
  },
];

export default {
  ...UlMeta,
  snippets,
}; 