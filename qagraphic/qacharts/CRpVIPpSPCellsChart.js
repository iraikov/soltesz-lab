var CRpVIPpSPCellsFCN = function() {
	try {
	alert("you are doing great!")
	/*
	var myKey = "CRpVIPpSPCOUPFact";
	if (document.getElementById(myKey + "Input")) {
		document.getElementById(myKey).dataset.custom = document.getElementById(myKey + "Input").value;
	}IS III
	nNOSNPYoverlapCOUPTFII = .60; //parseFloat(((document.getElementById(myKey).dataset.custom)/100).toFixed(2)); 
	var COUPTFIIoverlapnNOSNPY = .06;
	window.CRpVIPpSPamidale = Math.round(window.COUPcells*.35*COUPTFIIoverlapnNOSNPY/nNOSNPYoverlapCOUPTFII);
	window.is3_SP = Math.round(window.CRpVIPpSPamidale/10)*10;

	
	if (document.getElementById("CRpVIPpSPCellsChart") && document.getElementById("CRpVIPpSPCells").style.display!="hidden" && document.getElementById("CRpVIPpSPCells").style.display!="none") {
	jQuery('#CRpVIPpSPCellsChart').highcharts({
    chart: {
        renderTo:'container',
        type:'scatter'
    },
    title:{
        text:'CR+/VIP+ Cells in<br/>S. Pyramidale (SP)'
    },
    credits:{enabled:false},
    legend:{
			enabled: true,
			layout: 'vertical',
			align: 'center',
			width: 220,
			verticalAlign: 'bottom',
			borderWidth: 0,
			useHTML: true,
			labelFormatter: function() {
				return '<div style="width:200px"><span style="float:left">' + this.name + '</span><span style="float:right">' + this.options.label + '</span></div>';
			} //,
	},
    plotOptions: {
        series: {
            shadow:false,
            borderWidth:0,
            marker:{
                symbol:'circle'
            }                            
        }
    },
    xAxis:{
        min:0,
        max:100,
        lineWidth:0,
        gridLineWidth:0,
        title:{text:''},
        labels:{enabled:false}
    },
    yAxis:{
        min:0,
        max:100,
        lineWidth:0,
        gridLineWidth:0,
        title:{text:''},
        labels:{enabled:false}
    },  
	tooltip:{
		crosshairs: false,
			headerFormat: '<b>{series.name}</b>',
			pointFormat: '<br />{point.z} cells<br/>'
	},
    series: [	{
       color:'rgba(241,90,96,.5)',
       name:'CR+/VIP+ (IS III) SP cells',
       label:Math.round(window.CRpVIPpSPamidale/10)*10,
       data: [{
           x:55,
           y:50,
		   z:Math.round(window.CRpVIPpSPamidale/10)*10,
           marker:{
               radius:Math.sqrt(Math.round(window.CRpVIPpSPamidale/10)*10/(Math.round(window.COUPcells*.35/10)*10+Math.round(window.CRpVIPpSPamidale/10)*10)*2000),
               fillColor:'rgba(241,90,96,.5)',
               lineColor:'rgba(241,90,96,.75)',
               lineWidth:1,
               states:{
                   hover:{
               radius:Math.sqrt(Math.round(window.CRpVIPpSPamidale/10)*10/(Math.round(window.COUPcells*.35/10)*10+Math.round(window.CRpVIPpSPamidale/10)*10)*2000),
                fillColor:'rgba(241,90,96,.5)',
               lineColor:'rgba(241,90,96,.75)',
               lineWidth:1
                  }
               }
           }
       }]
    },
	{
        color:'rgba(90,155,212,.5)',
        name:'COUP-TFII+ SP cells',
        label:Math.round(window.COUPcells*.35/10)*10,
        data: [{
           x:45,
            y:50,
			z:Math.round(window.COUPcells*.35/10)*10,
            marker:{
               radius:Math.sqrt(Math.round(window.COUPcells*.35/10)*10/(Math.round(window.COUPcells*.35/10)*10+Math.round(window.CRpVIPpSPamidale/10)*10)*2000),
                fillColor:'rgba(90,155,212,.5)',
                lineColor:'rgba(90,155,212,.75)',
                lineWidth:1,
                states:{
                    hover:{
               radius:Math.sqrt(Math.round(window.COUPcells*.35/10)*10/(Math.round(window.COUPcells*.35/10)*10+Math.round(window.CRpVIPpSPamidale/10)*10)*2000),
                 fillColor:'rgba(90,155,212,.5)',
                lineColor:'rgba(90,155,212,.75)',
                lineWidth:1
                   }
                }
            }
        }]
    },
	{
        color:'rgba(212,0,212,.5)',
        name:'COUP-TFII+/<br/>CR+/VIP+ SP cells',
        label:Math.round(window.COUPcells*.35*COUPTFIIoverlapnNOSNPY/10)*10,
        data: [{
  		   label:'COUP-TFII+/<br/>CR+/VIP+ SP cells',
           x:44,
            y:50,
			z:Math.round(window.COUPcells*.35*COUPTFIIoverlapnNOSNPY/10)*10,
                zIndex: 6,
            marker:{
                radius:35,
               fillColor:'rgba(212,0,212,0)',
                lineColor:'rgba(212,0,212,0)',
                lineWidth:0,
                states:{
                    hover:{
                        radius:35,
						   fillColor:'rgba(212,0,212,0)',
							lineColor:'rgba(212,0,212,0)',
							lineWidth:0
					}
                }
            }
        }]
    }]
   }, function(chart) {
        
        var point = chart.series[0].data[8];
        
        var textLeft = chart.renderer.text(
                COUPTFIIoverlapnNOSNPY*100 + '%', 
				35 + chart.plotLeft,
				20 + chart.plotTop

            ).attr({
			fill:'rgba(90,155,212,1)',
                zIndex: 5
            }).css({fontSize: '14px', fontWeight: 'bold'})
			.add();
        
        var textRight = chart.renderer.text(
                nNOSNPYoverlapCOUPTFII*100 + '%', 
				190 + chart.plotLeft,
				20 + chart.plotTop
            ).attr({
			fill:'rgba(241,90,96,1)',
                zIndex: 5
            }).css({fontSize: '14px', fontWeight: 'bold'})
			.add();
       
    */
		});  
	}
	} catch(err) {
	txt = 'Error!\n';
	txt += err.name + ': ' + err.message + '\n';
	txt += err.fileName + ': ' + err.lineNumber;
	alert(txt)
	};
	CRpVIPpSRCellsFCN();
};
$(function () {	
CRpVIPpSPCellsFCN();		
})(jQuery); 