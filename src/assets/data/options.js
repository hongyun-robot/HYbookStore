// 书店销售数据
// 近一周内书籍数据采样报告
export function report_option() {
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: ['热门书籍', '售出书籍', '借阅书籍', '其他'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: today(7),
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '热门书籍',
        type: 'bar',
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: '售出书籍',
        type: 'bar',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '借阅书籍',
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: '其他',
        type: 'bar',
        data: [62, 82, 91, 84, 109, 110, 120],
      },
    ],
  };
  return option;
}

function today(num) {
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let dates = [];
  for (let i = 0; i < num; i++) {
    dates.unshift(`${month}月${day - i}日`);
  }
  return dates;
}
// 近一周内销售数据占比明细
export function salesData() {
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['热门书籍', '售出书籍', '借阅书籍', '其他'],
    },
    series: [
      {
        name: '销售书籍类型',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: '售出书籍' },
          { value: 310, name: '借阅书籍' },
          { value: 234, name: '热门书籍' },
          { value: 135, name: '其他' },
        ],
      },
    ],
  };
  return option;
}

// -------------------------------------------------

// 月订单量统计趋势图
export function monthOrderTendency() {
  let date = new Date();
  let replace_month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  let tomonth = date.getMonth();
  let data = [];
  for (let index = 0; index < 7; index++) {
    data.push(replace_month[tomonth - index]);
  }
  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['订单量'],
    },
    xAxis: {
      type: 'category',
      name: '日期',
      data,
    },
    yAxis: {
      type: 'value',
      name: '订单量',
    },
    series: [
      {
        name: '订单量',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  return option;
}

// 月销售任务完成报表
export function monthOrderStatement() {
  let date = new Date();
  let replace_month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  let tomonth = date.getMonth();
  let data = [];
  for (let index = 0; index < 6; index++) {
    data.unshift(replace_month[tomonth - index]);
  }
  let actualData = [3200, 2500, 2400, 3000, 3400, 3650]; //实际值
  let warningData = [2600, 2600, 2600, 2600, 2600, 2600]; //预警值
  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['实际值', '预警标准'],
    },
    grid: [
      {
        containLabel: false,
      },
    ],
    xAxis: [
      {
        type: 'category',
        name: '日期',
        data,
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '订单量',
      },
    ],
    series: [
      {
        name: '实际值',
        color: 'green',
        type: 'bar',
        barWidth: 30,
        itemStyle: {
          normal: {
            //这里必须加normal,否者不显示夜色变化
            color: function(params) {
              //超过预警值显示红色
              if (actualData[params.dataIndex] < warningData[params.dataIndex]) {
                return 'red';
              } else {
                return 'green';
              }
            },
          },
        },
        data: actualData,
      },
    ],
  };

  return option;
}

// 畅销书籍分类百分比
export function bookCategory() {
  let option = {
    // color: ['#00a482'],
    tooltip: {
      trigger: 'axis',
      formatter: '{c}%',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      // left: '3%',
      // right: '4%',
      // bottom: '3%',
      // containLabel: true,
    },
    xAxis: [
      {
        type: 'value',
      },
    ],
    yAxis: [
      {
        type: 'category',
        data: ['杂志', '魔幻类', '伦理类', '科普类', '文学类', '情感类'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        label: {
          show: true,
          formatter: '{c}%',
          color: '#000',
        },
        itemStyle: {
          normal: {
            color(parms) {
              let colorList = ['#84ccc9', '#fdc010', '#fe0000', '#00a482', '#febc10', '#85cdca'];
              return colorList[parms.dataIndex];
            },
          },
        },
        data: [66, 84, 79, 93, 57, 66],
      },
    ],
  };
  return option;
}
