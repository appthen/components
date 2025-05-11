import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const H3Meta: ExtendComponentMetadata = {
  componentName: 'H3',
  title: '标题3',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'H3',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '基础',
  icon: 'rqeh-3',
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
            showModuleList: ['font', 'layout', 'position'],
          }
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'style',
            'zh-CN': '动态样式',
          },
        },
        name: 'inlineStyle',
        description: '动态样式',
        display: 'block',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'enable',
                      title: '可用',
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'name',
                      title: '样式名',
                      setter: 'StringSetter',
                      isRequired: true,
                    },
                    {
                      name: 'style',
                      title: '样式',
                      setter: 'StyleSetter',
                      display: 'block',
                      isRequired: false,
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  enable: true,
                  name: '动态样式1',
                  style: {},
                };
              },
            },
          },
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
    title: '标题3',
    screenshot: '',
    schema: {
      componentName: 'H3',
      props: {
        children: '标题3',
      },
    },
  },
];

export default {
  ...H3Meta,
  snippets,
}; 