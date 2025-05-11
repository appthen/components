import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const WithRouterMeta: ExtendComponentMetadata = {
  componentName: 'WithRouter',
  title: '路由包装器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'withRouter',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '高级组件',
  category: '基础',
  icon: 'rqeh-1',
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
              inputField: 'component',
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'Component',
            'zh-CN': '组件',
          },
        },
        name: 'component',
        setter: {
          componentName: 'ComponentSetter',
          isRequired: true,
        },
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
      isContainer: true,
      nestingRule: {
        childWhitelist: ['*'],
      },
    },
  },
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: '路由包装器',
    screenshot: '',
    schema: {
      componentName: 'WithRouter',
      props: {},
      children: [
        {
          componentName: 'Link',
          props: {
            to: '/example',
            children: '路由包装的组件',
          },
        },
      ],
    },
  },
];

export default {
  ...WithRouterMeta,
  snippets,
}; 