export default [
  {
    "title": "表单容器",
    "screenshot": "https://alifd.alicdn.com/fusion-cool/icons/icon-antd/form-1.png",
    "schema": {
      "componentName": "Form",
      "props": {
        "labelCol": {
          "span": 6
        },
        "wrapperCol": {
          "span": 14
        },
        "onValuesChange": {
          "type": "JSFunction",
          "value": "function onValuesChange(changedValues, allValues) {\n  console.log('onValuesChange', changedValues, allValues);\n}"
        },
        "onFinish": {
          "type": "JSFunction",
          "value": "function onFinish(values) {\n  console.log('onFinish', values);\n}"
        },
        "onFinishFailed": {
          "type": "JSFunction",
          "value": "function onFinishFailed({ values, errorFields, outOfDate }) {\n  console.log('onFinishFailed', values, errorFields, outOfDate);\n}"
        },
        "name": "basic"
      },
      "children": [
        {
          "componentName": "Form.Item",
          "props": {
            "label": "表单项",
            "labelAlign": "right",
            "colon": true,
            "required": true,
            "noStyle": false,
            "valuePropName": "value",
            "name": "a",
            "requiredobj": {
              "required": true,
              "message": "必填"
            },
            "typeobj": {
              "type": null,
              "message": null
            },
            "lenobj": {
              "max": null,
              "min": null,
              "message": null
            },
            "patternobj": {
              "pattern": null,
              "message": null
            }
          },
          "children": [
            {
              "componentName": "Input",
              "props": {
                "placeholder": "请输入",
                "bordered": true,
                "disabled": false,
              }
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "props": {
            "label": "表单项",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": null,
              "message": null
            },
            "typeobj": {
              "type": null,
              "message": null
            },
            "lenobj": {
              "max": null,
              "min": null,
              "message": null
            },
            "patternobj": {
              "pattern": null,
              "message": null
            },
            "name": "b"
          },
          "children": [
            {
              "componentName": "InputNumber",
              "props": {
                "placeholder": "请输入",
                "autoFocus": false,
                "disabled": false,
                "controls": true,
                "bordered": true,
              }
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "props": {
            "label": "表单项",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": null,
              "message": null
            },
            "typeobj": {
              "type": null,
              "message": null
            },
            "lenobj": {
              "max": null,
              "min": null,
              "message": null
            },
            "patternobj": {
              "pattern": null,
              "message": null
            },
            "name": "c"
          },
          "children": [
            {
              "componentName": "Input.Password",
              "props": {
                "bordered": true,
                "disabled": false,
                "visibilityToggle": true,
                "placeholder": "请输入",
              }
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "props": {
            "label": "表单项",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": null,
              "message": null
            },
            "typeobj": {
              "type": null,
              "message": null
            },
            "lenobj": {
              "max": null,
              "min": null,
              "message": null
            },
            "patternobj": {
              "pattern": null,
              "message": null
            },
            "name": "d"
          },
          "children": [
            {
              "componentName": "Input.TextArea",
              "props": {
                "autoSize": {
                  "minRows": 3,
                  "maxRows": 3
                },
                "placeholder": "请输入",
                "bordered": true,
                "disabled": false,
                "showCount": false,
              }
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "props": {
            "label": "表单项",
            "name": "e",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": null,
              "message": null
            },
            "typeobj": {
              "type": null,
              "message": null
            },
            "lenobj": {
              "max": null,
              "min": null,
              "message": null
            },
            "patternobj": {
              "pattern": null,
              "message": null
            }
          },
          "children": [
            {
              "componentName": "Select",
              "props": {
                "style": {
                  "width": 200
                },
                "options": [
                  {
                    "label": "A",
                    "value": "A"
                  },
                  {
                    "label": "B",
                    "value": "B"
                  },
                  {
                    "label": "C",
                    "value": "C"
                  }
                ],
                "allowClear": false,
                "autoFocus": false,
                "defaultActiveFirstOption": true,
                "disabled": false,
                "labelInValue": false,
                "showSearch": false,
                "loading": false,
                "bordered": true,
                "filterOption": true,
                "optionFilterProp": "value",
                "tokenSeparators": []
              }
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "props": {
            "label": "表单项",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": null,
              "message": null
            },
            "typeobj": {
              "type": null,
              "message": null
            },
            "lenobj": {
              "max": null,
              "min": null,
              "message": null
            },
            "patternobj": {
              "pattern": null,
              "message": null
            },
            "name": "f"
          },
          "children": [
            {
              "componentName": "Slider",
              "props": {
                "defaultValue": 30,
                "range": false,
                "disabled": false,
                "dots": false,
                "reverse": false,
                "vertical": false
              }
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "props": {
            "label": "表单项",
            "name": "g",
            "initialValue": "A",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": null,
              "message": null
            },
            "typeobj": {
              "type": null,
              "message": null
            },
            "lenobj": {
              "max": null,
              "min": null,
              "message": null
            },
            "patternobj": {
              "pattern": null,
              "message": null
            }
          },
          "children": [
            {
              "componentName": "Checkbox.Group",
              "props": {
                "options": [
                  {
                    "label": "A",
                    "value": "A"
                  },
                  {
                    "label": "B",
                    "value": "B"
                  },
                  {
                    "label": "C",
                    "value": "C"
                  }
                ]
              }
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "props": {
            "label": "表单项",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "checked",
            "requiredobj": {
              "required": null,
              "message": null
            },
            "typeobj": {
              "type": null,
              "message": null
            },
            "lenobj": {
              "max": null,
              "min": null,
              "message": null
            },
            "patternobj": {
              "pattern": null,
              "message": null
            },
            "name": "i"
          },
          "children": [
            {
              "componentName": "Switch",
              "props": {
                "defaultChecked": false,
                "autoFocus": false,
                "disabled": false,
                "loading": false,
              }
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "props": {
            "label": "表单项",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": null,
              "message": null
            },
            "typeobj": {
              "type": null,
              "message": null
            },
            "lenobj": {
              "max": null,
              "min": null,
              "message": null
            },
            "patternobj": {
              "pattern": null,
              "message": null
            },
            "name": "j"
          },
          "children": [
            {
              "componentName": "TimePicker",
              "props": {
                "allowClear": true,
                "autoFocus": false,
                "bordered": true,
                "disabled": false,
                "hideDisabledOptions": false,
                "inputReadOnly": false,
                "use12Hours": false
              }
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "props": {
            "label": "表单项",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": null,
              "message": null
            },
            "typeobj": {
              "type": null,
              "message": null
            },
            "lenobj": {
              "max": null,
              "min": null,
              "message": null
            },
            "patternobj": {
              "pattern": null,
              "message": null
            },
            "name": "k"
          },
          "children": [
            {
              "componentName": "Rate",
              "props": {
                "defaultValue": 3,
                "allowClear": true,
                "allowHalf": false,
                "autoFocus": false,
                "count": 5,
                "disabled": false,
                "tooltips": []
              }
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "props": {
            "wrapperCol": {
              "offset": 6
            }
          },
          "children": [
            {
              "componentName": "Button",
              "props": {
                "type": "primary",
                "children": "提交",
                "htmlType": "submit"
              }
            },
            {
              "componentName": "Button",
              "props": {
                "style": {
                  "marginLeft": 20
                },
                "children": "取消"
              }
            }
          ]
        }
      ]
    }
  }
]
