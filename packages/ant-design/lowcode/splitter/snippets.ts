export default  [
    {
      title: '分隔面板',
      screenshot: 'https://cdn.appthen.com/editor/antd/img/splitter.svg',
      schema: {
        componentName: 'Splitter',
        props: {
          "style": {
            "height": "100vh"
          }
        },
        children: [
          {
            componentName: 'Splitter.Panel',
            props: {
              "collapsible": false,
              "resizable": true
            },
          },
          {
            componentName: 'Splitter.Panel',
            props: {
              "collapsible": false,
              "resizable": true
            },
          }
        ],
      },
    },
  ]

