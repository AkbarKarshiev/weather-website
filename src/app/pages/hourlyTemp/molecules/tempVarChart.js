import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import SingleSeriesSpline2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {
  WhiteBox
} from '../../../screens/main/atoms'
ReactFC.fcRoot(FusionCharts, SingleSeriesSpline2D, FusionTheme);

const TempVarChart = (props) => {
    const setChartData = (props) => {
        let data = [];
        for(let i=0; i < props.tempToday.length; i++) {
            const dataObject = {
                label: props.tempToday[i].hour,
                value: props.tempToday[i].temp
            };
            data.push(dataObject);
        }
        return data;
    }
    const chartConfigs = {
        type: 'spline',
        renderAt: "chartContainer",
        width: "100%",
        height: "300",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Hourly Temperature",
                // captionFontBold: "0",
                captionFontColor: "#000000",
                captionPadding: "30",
                baseFont: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
                chartTopMargin: "10",
                showHoverEffect: "1",
                theme: "fusion",
                numberSuffix: "°C",
                anchorBgColor: "#6297d9",
                paletteColors: "#6297d9",
                drawCrossLine: "1",
                plotToolText: "$label<br><hr><b>$dataValue</b>",
                anchorRadius: "4",
                labelFontSize: "13",
                labelAlpha: "65",
                yAxisValueAlpha: "65",
                rotateLabels: "1",
                slantLabels: "1",
                canvasPadding: "20"
            },
            data: [
              {label: "11:00", value: "+0°C"},
              {label: "12:00", value: "+5°C"},
              {label: "13:00", value: "+15°C"},
              {label: "14:00", value: "+26°C"},
              {label: "15:00", value: "+15°C"},
              {label: "16:00", value: "+5°C"},
            ]
        }
    }
    // chartConfigs.dataSource.data = setChartData(props);
    return (         
      <WhiteBox>
        <div className="custom-card header-card card">
            <div className="card-body pt-0">
                <ReactFC 
                {...chartConfigs}/>
            </div>
        </div>
      </WhiteBox>
    );
}

export default TempVarChart;