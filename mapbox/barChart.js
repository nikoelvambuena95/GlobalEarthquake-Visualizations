d3.csv("UNCERF.csv").then(function(data){
    var countries=[]
    var dollars=[]
    for (var i=0;i<data.length;i++){
        var dollar=data[i]["Total Disaster Relief($)"]
        dollar= parseInt(dollar.replace(/,/g, ""))
        countries.push(data[i].Country)
        dollars.push(dollar)
        
    }
    

    var topTenCountries=countries.slice(0, 20)
    var topTenDollars=dollars.slice(0, 20)
    var bottomTenCountries=countries.slice((countries.length-20), countries.length)
    var bottomTenDollars=dollars.slice((dollars.length-20), dollars.length)
    var countryList=topTenCountries.concat(bottomTenCountries)
    var dollarList=topTenDollars.concat(bottomTenDollars)

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: countryList,
        datasets: [{
            label: "Relief Dollars: Top 20 and Bottom 20 Countries",
            data: dollarList,
            backgroundColor: [
                "#DFFF00",
                "#FFBF00",
                "#FF7F50",
                "#DE3163",
                "#9FE2BF",
                "#40E0D0",
                "#6495ED",
                "#CCCCFF"
            ],
            borderColor: [
                "#DFFF00",
                "#FFBF00",
                "#FF7F50",
                "#DE3163",
                "#9FE2BF",
                "#40E0D0",
                "#6495ED",
                "#CCCCFF"
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