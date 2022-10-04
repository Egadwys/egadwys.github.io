const chart = Highcharts.chart('container', {
  title: {
    text: 'Some Skills'
  },

  xAxis: {
    categories: ['Java', 'Kotlin', 'Flutter', 'Python', 'Php', 'JS', 'UI/UX Design', 'Ms.Office']
  },
  
  yAxis: {
	  max: 100
	},

  series: [{
    type: 'column',
    name: 'knowledge',
    colorByPoint: true,
    data: [80, 90, 35, 60, 85, 80, 90, 100],
    showInLegend: false
  }]
});