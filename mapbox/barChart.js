d3.csv("UNCERF.csv").then(function(data){
    var countries=[]
    var dollars=[]
    for (var i=0;i<6;i++){
        var dollar=data[i]["Total Disaster Relief($)"]
        dollar= parseInt(dollar)
        countries.push(data[i].Country)
        dollars.push(dollar)
        
    }
    


console.log(typeof dollars)


var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: countries,
        datasets: [{
            label: '# of Votes',
            data: dollars,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

})