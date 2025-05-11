// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createElement } from 'react';
import * as echarts from 'echarts';

import EChart from 'echarts-for-react';

interface EChartsProps {
  option?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  advanced?: boolean;
  themeConfig?: object;
  mapName?: string;
  mapData?: any;
  theme?: string;
}

export class ECharts extends React.Component<
  EChartsProps,
  {
    init: boolean;
  }
> {
  private chartRef = React.createRef<EChart>();

  state = {
    init: false,
  };

  componentDidMount(): void {
    // @ts-ignore
    if (this.props.__designMode === 'design' || this.props._leaf) {
      setTimeout(() => {
        this.setState({ init: true });
      }, 500);
    } else {
      this.setState({ init: true });
    }
  }

  render(): React.ReactNode {
    const { init } = this.state;
    const { advanced, option, mapName, mapData, themeConfig, theme = 'default', ...props } = this.props;
    
    if (!init) return null;

    // Register theme if provided
    if (themeConfig) {
      echarts.registerTheme(theme, themeConfig);
    }

    // Register map if both name and data are provided
    if (mapName && mapData) {
      echarts.registerMap(mapName, mapData);
    }

    return (
      <EChart
        ref={this.chartRef}
        option={advanced ? option : this.props}
        theme={theme}
        {...props}
      />
    );
  }
}
