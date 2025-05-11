import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const BrMeta: ExtendComponentMetadata = {
  componentName: 'Br',
  title: '换行',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'Br',
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
        title: {
          label: {
            type: 'i18n',
            'en-US': 'style',
            'zh-CN': '样式',
          },
        },
        name: 'style',
        description: '样式',
        display: 'block',
        setter: {
          componentName: 'StyleSetter',
          props: {
            showModuleList: ['layout', 'position'],
          }
        },
      },
    ],
    supports: {
      style: false,
      className: true
    },
    component: {
      isContainer: false,
    },
  },
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: '换行',
    screenshot: '',
    schema: {
      componentName: 'Br',
      props: {},
    },
  },
];

export default {
  ...BrMeta,
  snippets,
}; 