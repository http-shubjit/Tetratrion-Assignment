import ReactECharts from 'echarts-for-react';
import { useSelector } from 'react-redux'


export default function Chart1() {
  const data = useSelector(state => state)
const option = {
  
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ["Scrap Value","Scrap Quantity"]
  },
  grid: {
    left: '3%',
    right: '3%',
    bottom: '3%',
    containLabel: true
  },
 
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: data.by_month_year.map((value)=>value.month+" - "+value.year)
  },
  yAxis: {
    type: 'value',
    
  },
  series: [
    {
      name: 'Scrap Value',
      type: 'line',
      data: data.by_month_year.map((value)=>value.total_scrap_quantity)
    },
    {
      name: 'Scrap Quantity',
      type: 'line',
      data: data.by_month_year.map((value)=>value.total_value_for_scrap)
    },
    
  ]
};

  return (
    <>
      <center>
        <h5> MOM Trending of Scrap Value & Quantity</h5>
              <ReactECharts option={option} />

      </center>
    </>
  )
}











