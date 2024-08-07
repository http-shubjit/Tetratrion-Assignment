import ReactECharts from 'echarts-for-react';
import { useSelector } from 'react-redux'

export default function CreateEmployee() {
  const data = useSelector(state => state)
  

// const categories = (function () {
//   let now = new Date();
//   let res = [];
//   let len = 10;
//   while (len--) {
//   res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
//   now = new Date(+now - 2000);
//   }
//   return res;
//   })();
  
// const categories2 = (function () {
//   let res = [];
//   let len = 10;
//   while (len--) {
//     res.push(10 - len - 1);
//   }
//   return res;
// })();
// const data = (function () {
//   let res = [];
//   let len = 10;
//   while (len--) {
//     res.push(Math.round(Math.random() * 1000));
//   }
//   return res;
// })();
// const data2 = (function () {
//   let res = [];
//   let len = 0;
//   while (len < 10) {
//     res.push(+(Math.random() * 10 + 5).toFixed(1));
//     len++;
//   }
//   return res;
  // })();
const option = {
 
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#283b56'
      }
    }
  },
  legend: {},
  toolbox: {
    show: true,
    
  },
  dataZoom: {
    show: false,
    start: 0,
    end: 100
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: true,
      data: data.by_work_center.map((value)=>value.work_center)
    },
    {
      type: 'category',
      boundaryGap: true,
      data:data.by_work_center.map((value)=>value.work_center)
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
     
    },
    {
      type: 'value',
      scale: true,
     
    }
  ],
  series: [
    {
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: data.by_work_center.map((value)=>value.total_scrap_quantity)
    },
    {
      type: 'line',
      data: data.by_work_center.map((value)=>value.total_value_for_scrap)
    }
  ]
};



  return (
    <center>
   <h5>Scrap By Worker</h5>
      <ReactECharts option={option} />

    </center>
  )
}

