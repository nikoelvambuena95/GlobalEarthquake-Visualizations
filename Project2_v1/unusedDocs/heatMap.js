var timeList={timestamp: 1618843146,
    timestamp2: 1618843117,
    timestamp3: 1618695546}
//     1615158579020,
//     1615158093920,
//     1615157500312,
//     1615156987073,
//     1615156958715,
//     1615156942020,
//     1615156919820,
//     1615156919680,
//     1615156679048,
//     1615156662340,
//     1615156258150,
//     1615155875990,
//     1615155538808,
//     1615155242290,
//     1615154961460,
//     1615154833500,
//     1615154657900,
//     1615154095505,
//     1615153756300,
//     1615153462892,
//     1615153185562,
//     1615152817100,
//     1615152704302,
//     1615152701263,
//     1615152465503,
//     1615152234690,
//     1615151901029,
//     1615151841445,
//     1615151824941,
//     1615151747410,
//     1615151486050,
//     1615151327440,
//     1615151210270,
//     1615150979600,
//     1615150889834,
//     1615150232789,
//     1615149994676,
//     1615149836880,
//     1615149806379,
//     1615149352755,
//     1615148766310,
//     1615147576024,
//     1615147496770,
//     1615147493850,
//     1615147080470,
//     1615147074010,
//     1615147042090,
//     1615146765750,
//     1615146665480,
//     1615145453240,
//     1615145328047,
//     1615145199020,
//     1615145016910,
//     1615144572460,
//     1615144443890,
//     1615144434710,
//     1615144276079,
//     1615144046066,
//     1615143418490,
//     1615143253450,
//     1615142512780,
//     1615142267119,
//     1615142257527,
//     1615141652250,
//     1615141525862,
//     1615141334420,
//     1615141234490,
//     1615140469630,
//     1615139848350,
//     1615139519940,
//     1615139481357,
//     1615139370970,
//     1615139244210,
//     1615138870160,
//     1615138596911,
//     1615138382630,
//     1615138118530,
//     1615138037060,
//     1615137545427,
//     1615137303433,
//     1615137228852,
//     1615137105450,
//     1615136881890,
//     1615136772578,
//     1615136725120,
//     1615136496130,
//     1615136432331,
//     1615136034190
// }






// var maxTime=Math.max.apply(Math, timeList)
// var maxTimeUtc=new Date(maxTime)
// console.log(maxTimeUtc)

// var stringList=timeList.map(String)

var parserData = function (data) {
    var dataJSON = {};
  
    for(var i=0; i<data.length; i++) {
      var date = new Date(data[i].date); // Date of activity 
      var sec = date.getTime()/1000; // Convert to sec
  
      // Pair "Key-Value" for calendar data
      if(dataJSON[sec]) {
        dataJSON[sec]++;
      } else {
        dataJSON[sec] = 1;
      }
    }
  
    return dataJSON;
  }

  console.log(parserData(timeList))


var cal = new CalHeatMap();
	cal.init({
        itemSelector:"#cal-heatmap",
        domain:"month",
        subDomain:"hour",
        range:2,
        cellSize:20,
        cellPadding:6,
        verticalOrientation:true,
        label:{
            height:30,
            align:"center"
        }, 
        data:timeList,
        afterLoadData:parserData

      

    });