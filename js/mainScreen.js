;
(function() {
	$(document).ready(function() {

		//		添加边角
		$('.has-side').append($('<span class="side-left-top"></span><span class="side-right-top"></span><span class="side-left-bottom"></span><span class="side-right-bottom"></span>'));

		//	设置字体大小
		var setFont = function() {
			var docEl = document.documentElement
			var clientWidth = docEl.clientWidth;
			docEl.style.fontSize = 20 * (clientWidth / 1920) + 'px';
			console.log(docEl.style.fontSize)
		}
		setFont()

		//	绘制界面标题事件
		var drowTitle = function() {
			var titleBox = document.querySelector('.main-title');
			var width = titleBox.clientWidth;
			var height = titleBox.clientHeight;
			console.dir(titleBox)
			var c = document.getElementById("myCanvas");
			console.dir(c)
			c.height = (height - 0) * 0.65
			c.width = width
			var ctx = c.getContext("2d");
			console.log(document.documentElement.style.fontSize)
			ctx.font = "1.9rem Verdana";
			// 创建渐变
			var gradient = ctx.createLinearGradient(0, 0, 0, c.height);
			//		gradient.addColorStop("0","magenta");
			gradient.addColorStop("0", "#53B7FF");
			gradient.addColorStop("1.0", "#3A7CFD");
			// 用渐变填色
			//		ctx.strokeStyle=gradient;
			ctx.fillStyle = gradient;
			ctx.textBaseline = "top";
			ctx.textAlign = "center";
			//		ctx.strokeText("实验室监控系统",(width-0)/2,10);	
			ctx.fillText("实验室监控系统", (width - 0) / 2, 10);
		}
		drowTitle()

		//绘制饼图
		var drowPie = function(id) {
			var dom = document.getElementById(id);
			var myChart = echarts.init(dom);
			var app = {};
			option = null;
			app.title = '环形图';
			option = {
				//		    tooltip: {
				//		        trigger: 'item',
				//		        formatter: "{a} <br/>{b}: {c} ({d}%)"
				//		    },
				title: {
					x: 'center',
					y: '28%',
					show: true,
					text: '风机',
					textStyle: {
						color: '#fff',
						fontSize: '90%',
						align: 'center',
						fontWeight: 'normal'
					},
				},
				legend: {
					orient: 'vertical',
					x: 'center',
					y: 'bottom',
					itemGap: 2,
					textStyle: {
						color: '#fff',
						fontSize: '60%',
						align: 'center',
						fontWeight: 'normal'
					},
					data: [{
							name: '直接访问',
							icon: 'circle'
						},
						{
							name: '邮件营销',
							icon: 'circle'
						},
						{
							name: '联盟广告',
							icon: 'circle'
						},
					]
					//		        data:['直接访问','邮件营销','联盟广告']
				},

				series: [{
					name: '访问来源',
					type: 'pie',
					radius: ['65%', '85%'],
					center: ['50%', '35%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: false,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
							value: 335,
							name: '直接访问'
						},
						{
							value: 310,
							name: '邮件营销'
						},
						{
							value: 234,
							name: '联盟广告'
						},
					]
				}]
			};;
			if(option && typeof option === "object") {
				//			myChart.clear();
				myChart.setOption(option, true);
				myChart.resize();
			}
		};
		drowPie('pie-pic1')
		drowPie('pie-pic2')
		drowPie('pie-pic3')

		//绘制供气压力图
		var drawPress = function() {
			var dom = document.querySelector('.gas-left');
			var myChart = echarts.init(dom);
			var app = {};
			option = null;
			var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
			option = {
				//		    backgroundColor: '#0e2147',
				title: {
					x: 'center',
					y: '3%',
					show: true,
					text: '供气压力',
					textStyle: {
						color: '#fff',
						fontSize: '70%',
						align: 'center',
						fontWeight: 'normal'
					},
				},
				grid: {
					left: '11%',
					top: '12%',
					right: '8%',
					bottom: '0%',
					containLabel: true
				},
				xAxis: [{
					show: false,
				}],
				yAxis: [{
					axisTick: 'none',
					axisLine: 'none',
					offset: '27',
					axisLabel: {
						textStyle: {
							color: '#ffffff',
							fontSize: '70%',
						}
					},
					data: ['宁夏转运中心', '兰州转运中心', '南宁转运中心', '长沙转运中心', '武汉转运中心', '合肥转运中心', '贵州转运中心']
				}, {
					axisTick: 'none',
					axisLine: 'none',
					axisLabel: {
						textStyle: {
							color: '#ffffff',
							fontSize: '70%',
						}
					},
					data: ['7', '6', '5', '4', '3', '2', '1']
				}, {
					name: '分拨延误TOP 10',
					nameGap: '50',
					nameTextStyle: {
						color: '#ffffff',
						fontSize: '70%',
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(0,0,0,0)'
						}
					},
					data: [],
				}],
				series: [{
						name: '条',
						type: 'bar',
						yAxisIndex: 0,
						data: [29, 38, 44, 50, 52, 60, 72],
						label: {
							normal: {
								show: true,
								position: 'right',
								textStyle: {
									color: '#ffffff',
									fontSize: '70%',
								}
							}
						},
						barWidth: 6,
						itemStyle: {
							normal: {
								color: function(params) {
									var num = myColor.length;
									return myColor[params.dataIndex % num]
								},
							}
						},
						z: 2
					}, {
						name: '白框',
						type: 'bar',
						yAxisIndex: 1,
						barGap: '-100%',
						data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
						barWidth: 16,
						itemStyle: {
							normal: {
								color: '#0e2147',
								barBorderRadius: 5,
							}
						},
						z: 1
					}, {
						name: '外框',
						type: 'bar',
						yAxisIndex: 2,
						barGap: '-100%',
						data: [100, 100, 100, 100, 100, 100, 100],
						barWidth: 18,
						itemStyle: {
							normal: {
								color: function(params) {
									var num = myColor.length;
									return myColor[params.dataIndex % num]
								},
								barBorderRadius: 5,
							}
						},
						z: 0
					},
					{
						name: '外圆',
						type: 'scatter',
						hoverAnimation: false,
						data: [0, 0, 0, 0, 0, 0, 0],
						yAxisIndex: 1,
						symbolSize: 20,
						itemStyle: {
							normal: {
								color: function(params) {
									var num = myColor.length;
									return myColor[params.dataIndex % num]
								},
								opacity: 1,
							}
						},
						z: 2
					}
				]
			};
			if(option && typeof option === "object") {
				//			myChart.clear();
				myChart.setOption(option, true);
				myChart.resize();
			}
		}
		drawPress();

		var drawLine = function() {
			var dom = document.querySelector('.gas-right-top');
			var myChart = echarts.init(dom);
			var app = {};
			option = null;
			option = {
				title: {
					x: 'center',
					y: '6%',
					show: true,
					text: '气瓶间环境',
					textStyle: {
						color: '#fff',
						fontSize: '70%',
						align: 'center',
						fontWeight: 'normal'
					},
				},
				grid: {
					left: '11%',
					top: '24%',
					right: '4%',
					bottom: '6%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					axisLine: {
		                lineStyle: {
		                    color: "#fff",
		                }
		           },
					data: ['03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
				},
				yAxis: {
					type: 'value',
					axisLine: {
		                lineStyle: {
		                    color: "#fff",
		                }
		           },
		           
				},
				series: [{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line',
					smooth: true
				}]
			};
			if(option && typeof option === "object") {
				//			myChart.clear();
				myChart.setOption(option, true);
				myChart.resize();
			}
		}
		drawLine()
		
//		温湿度监控系统li填充元素
	var appendElement = function(){
		$('.wet-section ol li').html('');
		$('.wet-section ol li').append($('<div class="top">正常</div><div class="bottom">8</div>'))
	}
	appendElement()
	
//	ups系统填充
	var upsApppend = function(){
		$('.ups-section>ul>li').html('')
		$('.ups-section>ul>li').append($('<div class="li-top">1#UPS LC-MS/MS</div><div class="li-section"><ul><li><span>正常</span><b class="green"></b></li><li><span>电池</span><b></b></li><li><span>旁路</span><b></b></li><li><span>故障</span><b></b></li></ul><ol><li><span>负载</span><div><ul><li></li></ul></div></li><li><span>电压输出</span><div>219</div></li><li><span>电量</span><div><ul><li></li><li></li><li></li><li></li><li></li><i></i></ul></div></li></ol></div>')) 
	}
	upsApppend()
		//window添加监听窗口变化事件	
		$(window).resize(function() { //动态监听监听网页窗口变化
			setFont()
			drowTitle()
			drowPie('pie-pic1')
			drowPie('pie-pic2')
			drowPie('pie-pic3')
			drawPress()
			drawLine()
		});
	})

})()