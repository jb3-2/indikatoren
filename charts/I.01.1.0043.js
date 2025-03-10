chartOptions['I.01.1.0043'] = {
  "plotOptions": {
    "series": {
      "stacking": "percent",
      /*"pointWidth": 35,*/
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": [
    {
      "alignTicks": false,
      "title": {
          "style": {
              "color": "#000000",
              "fontSize": null
          },
          "text": null
      },
      "labels": {
          "style": {
          "color": "#000000"
          },
          "format": "{value}%",
      },
      "reversedStacks": false
    },
    {
      "alignTicks": false,
      "min": 0,
      "title": {
          "style": {
              "color": "#000000",
              "fontSize": null
          },
          "text": null
      },      
      "labels": {
        "format": "{value:,0f}"      
      },
      "reversedStacks": true,
      "opposite": true
    }
  ],
  "tooltip": {    
    "shared": false
  },  
  "legend": {
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "x": 46,
    "y": 30,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#256370",
      "type": "column", 
      "legendIndex": 1
    },
    {
      "color": "#A8C4CB",
      "type": "column", 
      "legendIndex": 0
    },
    {
      "color": "#DC440E",
      "type": "column", 
      "legendIndex": 3
    },
    {
      "color": "#FABD24",
      "type": "column", 
      "legendIndex": 2
    },
    {
      "color": "#44AB2B",
      "type": "line",
      "yAxis": 1,
      "stacking": null, 
      "legendIndex": 4
    }    
  ],
  "chart": {
    "marginBottom": 65,
    "marginTop": 150,
    "type": "column"
  }
};
