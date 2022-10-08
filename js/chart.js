const chart = Highcharts.chart('container', {
  title: {
    text: 'Some Skills'
  },

  xAxis: {
    categories: ['Android', 'Python', 'Php', 'JS', 'UI/UX Design']
  },
  
  yAxis: {
	  max: 100
	},

  series: [{
    type: 'column',
    name: 'knowledge',
    colorByPoint: true,
    data: [85, 70, 85, 80, 90],
    showInLegend: false
  }]
});
