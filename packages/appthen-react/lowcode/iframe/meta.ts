import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const IframeMeta: ExtendComponentMetadata = {
  componentName: 'Iframe',
  title: '内嵌框架',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'Iframe',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
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
              inputField: 'src',
            },
          },
        },
      },
      {
        name: 'src',
        setter: 'StringSetter',
        title: '链接地址',
        isRequired: true,
      },
      {
        name: 'width',
        setter: 'StringSetter',
        title: '宽度',
      },
      {
        name: 'height',
        setter: 'StringSetter',
        title: '高度',
      },
      {
        name: 'allow',
        setter: 'StringSetter',
        title: '允许的权限',
      },
      {
        name: 'sandbox',
        setter: 'StringSetter',
        title: '沙箱模式',
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
            showModuleList: ['layout', 'position'],
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
    title: '内嵌框架',
    screenshot: '',
    schema: {
      componentName: 'Iframe',
      props: {
        src: 'https://www.appthen.com',
        width: '100%',
        height: '500px',
      },
    },
  },
];

export default {
  ...IframeMeta,
  snippets,
}; 