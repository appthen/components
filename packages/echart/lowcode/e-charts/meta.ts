import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

// 通用字体样式配置
const TextStyle = [
  {
    title: {
      label: {
        type: "i18n",
        "en-US": "color",
        "zh-CN": "颜色"
      }
    },
    name: "color",
    setter: {
      componentName: "ColorSetter",
    }
  },
  {
    title: {
      label: {
        type: "i18n",
        "en-US": "fontStyle",
        "zh-CN": "字体风格"
      }
    },
    name: "fontStyle",
    initialValue: 'normal',
    setter: {
      componentName: "SelectSetter",
      props: {
        options: [
          { title: 'normal', value: 'normal' },
          { title: 'italic', value: 'italic' },
          { title: 'oblique', value: 'oblique' },
        ],
      },
    }
  },
  {
    title: {
      label: {
        type: "i18n",
        "en-US": "fontWeight",
        "zh-CN": "字体粗细"
      }
    },
    name: "fontWeight",
    initialValue: 'normal',
    setter: {
      componentName: "SelectSetter",
      props: {
        options: [
          { title: 'normal', value: 'normal' },
          { title: 'bold', value: 'bold' },
          { title: 'bolder', value: 'bolder' },
          { title: 'lighter', value: 'lighter' },
        ],
      },
    }
  },
  {
    title: {
      label: {
        type: "i18n",
        "en-US": "fontSize",
        "zh-CN": "字体大小"
      }
    },
    name: "fontSize",
    setter: {
      componentName: "NumberSetter",
    }
  },
  {
    title: {
      label: {
        type: "i18n",
        "en-US": "lineHeight",
        "zh-CN": "行高"
      }
    },
    name: "lineHeight",
    setter: {
      componentName: "NumberSetter",
    }
  },
  {
    title: {
      label: {
        type: "i18n",
        "en-US": "width",
        "zh-CN": "文本宽度"
      }
    },
    name: "width",
    setter: {
      componentName: "NumberSetter",
    }
  },
  {
    title: {
      label: {
        type: "i18n",
        "en-US": "height",
        "zh-CN": "文本高度"
      }
    },
    name: "height",
    setter: {
      componentName: "NumberSetter",
    }
  },
  {
    title: {
      label: {
        type: "i18n",
        "en-US": "textBorderColor",
        "zh-CN": "文本描边"
      }
    },
    name: "textBorderColor",
    setter: {
      componentName: "ColorSetter",
    }
  },
  {
    title: {
      label: {
        type: "i18n",
        "en-US": "textBorderWidth",
        "zh-CN": "描边宽度"
      }
    },
    name: "textBorderWidth",
    setter: {
      componentName: "NumberSetter",
    }
  },
];

// 坐标轴通用配置
const AxisConfig = [
  {
    title: {
      label: {
        type: "i18n",
        "en-US": "show",
        "zh-CN": "显示"
      }
    },
    name: "show",
    setter: {
      componentName: "BoolSetter",
    }
  },
  {
    name: 'name',
    title: { label: '名称', tip: '坐标轴名称' },
    setter: 'StringSetter',
  },
  {
    name: 'type',
    title: { label: '类型', tip: '坐标轴类型' },
    setter: {
      componentName: "SelectSetter",
      props: {
        options: [
          { title: '数值轴', value: 'value' },
          { title: '类目轴', value: 'category' },
          { title: '时间轴', value: 'time' },
          { title: '对数轴', value: 'log' },
        ]
      }
    }
  },
  {
    name: 'data',
    title: { label: '数据', tip: '类目数据' },
    propType: 'Json',
    initialValue: [],
    setter: 'JsonSetter',
  },
];

// 创建条件表达式的工具函数
const createCondition = (propName: string, value: boolean) => ({
  type: 'JSFunction',
  value: `target => ${value ? '' : '!'}target.getProps().getPropValue("${propName}")`,
});

// 图表类型选项
const ChartTypeOptions = [
  { title: '折线图', value: 'line' },
  { title: '柱状图', value: 'bar' },
  { title: '饼图', value: 'pie' },
  { title: '散点图', value: 'scatter' },
  { title: 'K线图', value: 'candlestick' },
  { title: '仪表盘', value: 'gauge' },
  { title: '漏斗图', value: 'funnel' },
  { title: '树图', value: 'tree' },
  { title: '旭日图', value: 'sunburst' },
  { title: '雷达图', value: 'radar' },
];

// 堆叠方式选项
const StackOptions = [
  { title: '堆叠正负', value: 'samesign' },
  { title: '所有值', value: 'all' },
  { title: '堆积正值', value: 'positive' },
  { title: '堆叠负值', value: 'negative' },
];

// 通用设置项
const CommonSetters = {
  Json: ["JsonSetter", "VariableSetter"],
  Bool: { componentName: "BoolSetter" },
  String: { componentName: "StringSetter" },
  Number: { componentName: "NumberSetter" },
  Color: { componentName: "ColorSetter" },
};

const EChartsMeta: IPublicTypeComponentMetadata = {
  componentName: "ECharts",
  title: "图表",
  docUrl: "",
  screenshot: "",
  devMode: "proCode",
  npm: {
    package: "@appthen/echarts",
    version: "0.1.0",
    exportName: "ECharts",
    main: "src/index.tsx",
    destructuring: true,
    subName: ""
  },
  group: '原子组件',
  category: '展示',
  configure: {
    props: [
      {
        title: {
          label: {
            type: "i18n",
            "en-US": "advanced",
            "zh-CN": "高级模式"
          }
        },
        name: "advanced",
        setter: CommonSetters.Bool
      },
      {
        title: {
          label: {
            type: "i18n",
            "en-US": "theme",
            "zh-CN": "主题名称"
          }
        },
        name: "theme",
        setter: CommonSetters.String
      },
      {
        title: {
          label: {
            type: "i18n",
            "en-US": "themeConfig",
            "zh-CN": "自定义主题配置"
          }
        },
        name: "themeConfig",
        setter: CommonSetters.Json
      },
      {
        title: {
          label: {
            type: "i18n",
            "en-US": "option",
            "zh-CN": "图表配置"
          }
        },
        name: "option",
        setter: [
          {
            componentName: "JsonSetter",
            initialValue: {}
          },
          'FunctionSetter', 
          'VariableSetter'
        ],
        condition: createCondition('advanced', true),
      },
      {
        title: {
          label: {
            type: "i18n",
            "en-US": "mapName",
            "zh-CN": "地图名称"
          }
        },
        name: "mapName",
        setter: CommonSetters.String,
      },
      {
        title: {
          label: {
            type: "i18n",
            "en-US": "mapData",
            "zh-CN": "地图数据"
          }
        },
        name: "mapData",
        setter: CommonSetters.Json,
      },
      {
        name: 'dataset',
        title: { label: '数据集', tip: '数据集，用于数据管理' },
        supportVariable: true,
        condition: createCondition('advanced', false),
        setter: "JsonSetter"
      },
      {
        name: 'dataZoom',
        supportVariable: true,
        condition: createCondition('advanced', false),
        title: { label: '区域缩放', tip: '用于区域缩放，查看数据细节或整体概览' },
        setter: "JsonSetter"
      },
      {
        name: 'tooltip',
        title: { label: '工具提示', tip: '鼠标悬浮时的提示框' },
        supportVariable: true,
        condition: createCondition('advanced', false),
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'show',
                    title: { label: '显示', tip: '是否显示提示框' },
                    propType: 'bool',
                    initialValue: true,
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'trigger',
                    title: { label: '触发方式', tip: '触发提示框的方式' },
                    initialValue: 'item',
                    setter: {
                      componentName: "SelectSetter",
                      props: {
                        options: [
                          { title: '无类目触发', value: 'item' },
                          { title: '坐标轴触发', value: 'axis' },
                          { title: '不触发', value: 'none' },
                        ]
                      }
                    }
                  }
                ],
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        name: 'legend',
        title: { label: '图例', tip: '图表的图例' },
        supportVariable: true,
        condition: createCondition('advanced', false),
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    title: {
                      label: {
                        type: "i18n",
                        "en-US": "show",
                        "zh-CN": "显示"
                      }
                    },
                    name: "show",
                    setter: CommonSetters.Bool
                  },
                  {
                    name: 'data',
                    title: { label: '数据', tip: '图例数据' },
                    propType: 'Json',
                    initialValue: [],
                    setter: 'JsonSetter',
                  },
                ],
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        name: 'title',
        supportVariable: true,
        condition: createCondition('advanced', false),
        title: { label: '标题设置', tip: '图表标题配置' },
        setter:[
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    title: {
                      label: {
                        type: "i18n",
                        "en-US": "show",
                        "zh-CN": "显示"
                      }
                    },
                    name: "show",
                    setter: CommonSetters.Bool
                  },
                  {
                    title: {
                      label: {
                        type: "i18n",
                        "en-US": "text",
                        "zh-CN": "标题"
                      }
                    },
                    name: "text",
                    setter: CommonSetters.String
                  },
                  {
                    title: {
                      label: {
                        type: "i18n",
                        "en-US": "textStyle.color",
                        "zh-CN": "标题颜色"
                      }
                    },
                    name: "textStyle.color",
                    setter: CommonSetters.Color
                  },
                  {
                    title: {
                      label: {
                        type: "i18n",
                        "en-US": "subtext",
                        "zh-CN": "副标题"
                      }
                    },
                    name: "subtext",
                    setter: CommonSetters.String
                  },
                ],
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        name: 'xAxis',
        supportVariable: true,
        condition: createCondition('advanced', false),
        title: { label: 'X轴', tip: '直角坐标系中的X轴配置' },
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: AxisConfig,
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        name: 'yAxis',
        supportVariable: true,
        condition: createCondition('advanced', false),
        title: { label: 'Y轴', tip: '直角坐标系中的Y轴配置' },
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: AxisConfig
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        name: 'series',
        supportVariable: true,
        condition: createCondition('advanced', false),
        title: { label: '系列', tip: '图表系列配置' },
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'type',
                        title: { label: '图表类型', tip: '图表类型' },
                        propType: {
                          type: 'oneOf',
                          value: ChartTypeOptions.map(option => option.value),
                        },
                        isRequired: true,
                        setter: [
                          {
                            componentName: 'SelectSetter',
                            props: {
                              options: ChartTypeOptions,
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                      {
                        title: {
                          label: {
                            type: "i18n",
                            "en-US": "data",
                            "zh-CN": "数据"
                          }
                        },
                        name: "data",
                        initialValue: [],
                        setter: {
                          componentName: "JsonSetter",
                        }
                      },
                      {
                        title: {
                          label: {
                            type: "i18n",
                            "en-US": "name",
                            "zh-CN": "名称"
                          }
                        },
                        name: "name",
                        isRequired: true,
                        setter: CommonSetters.String
                      },
                      {
                        title: {
                          label: {
                            type: "i18n",
                            "en-US": "yAxisIndex",
                            "zh-CN": "y轴索引"
                          }
                        },
                        name: "yAxisIndex",
                        initialValue: 0,
                        setter: CommonSetters.Number
                      },
                      {
                        title: {
                          label: {
                            type: "i18n",
                            "en-US": "smooth",
                            "zh-CN": "折线平滑曲线"
                          }
                        },
                        name: "smooth",
                        initialValue: false,
                        setter: CommonSetters.Bool
                      },
                      {
                        title: {
                          label: {
                            type: "i18n",
                            "en-US": "encode",
                            "zh-CN": "维度编码"
                          }
                        },
                        name: "encode",
                        setter: "JsonSetter"
                      },
                      {
                        name: 'stack',
                        title: { label: '数据堆叠', tip: '同个类目轴上系列配置相同的stack值可以堆叠放置' },
                        propType: {
                          type: 'oneOf',
                          value: StackOptions.map(option => option.value),
                        },
                        setter: [
                          {
                            componentName: 'SelectSetter',
                            props: {
                              options: StackOptions,
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                      {
                        title: {
                          label: {
                            type: "i18n",
                            "en-US": "areaStyle.color",
                            "zh-CN": "面积图颜色"
                          }
                        },
                        name: "areaStyle.color",
                        setter: "ColorSetter"
                      },
                      'VariableSetter',
                    ],
                  },
                },
                initialValue: { name: '标题' },
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        condition: createCondition('advanced', false),
        name: 'color',
        title: '颜色',
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ColorSetter',
                initialValue: '#0079f2',
              },
            },
          },
          "JsonSetter"
        ]
      },
      {
        condition: createCondition('advanced', false),
        name: 'backgroundColor',
        title: '背景',
        setter: CommonSetters.Color,
      },
      {
        condition: createCondition('advanced', false),
        name: 'textStyle',
        supportVariable: true,
        title: { label: '全局字体样式', tip: '全局的字体样式配置' },
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: TextStyle,
            },
          },
        },
      },
    ],
    publicMethods: [
      {
        name: 'refresh',
        desc: '刷新图表',
        code: 'refresh()',
      },
    ],
    supports: {
      className: true,
      style: true
    },
    component: {}
  }
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: "图表",
    screenshot: "https://cdn.appthen.com/FvRQ-vh132wSuT4XOyTOCpifKYmV",
    schema: {
      componentName: "ECharts",
      props: {
        advanced: false,
        title: {
          text: 'ECharts 入门示例',
          show: true,
        },
        tooltip: {
          trigger: 'item',
          show: true
        },
        legend: {
          show: true,
          data: ['销量']
        },
        xAxis: {
          type: "category",
          name: "Appthen",
          show: true,
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          type: "value",
          name: "Appthen",
          show: true,
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ],
        option: {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value",
            name: "Appthen"
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)"
            }
          }]
        }
      }
    }
  }
];

export default {
  ...EChartsMeta,
  snippets
};
