const fs = require("fs");
const csv = require('csv-parser');
var xlsx = require('node-xlsx').default;

//Editar
originalFilePath = `/Users/ultertechnologies/Documents/Vontera/Vontera Automated Tests/features/resources/10.csv`

//Editar
reportPath = `/Users/ultertechnologies/Desktop/report_10.xlsx`

//Parse .xlsx file
const report = xlsx.parse(reportPath);

//Report data
URLReporte = []
for (i = 1; i < report[0]["data"].length; i++) {
    
    if (report[0]["data"][i][0]) {

        if (report[0]["data"][i][0].split("\n")[1]) {
            urly = report[0]["data"][i][0].split("\n")[1]
            
        } else {
            urly = report[0]["data"][i][0].split("\n")[0]   
        }

        urly = urly.replace(/(https?:\/\/(www\.)?)/g, "");
        urly = urly.replace(/\/$/g, "");

        URLReporte.push(urly)
    }
}

//Original data
URLOriginal = []
fs.createReadStream(originalFilePath)
.pipe(csv())
.on('data', (row) => {
    urly = row["URL"]

    urly = urly.replace(/(https?:\/\/(www\.)?)/g, "");
    urly = urly.replace(/\/$/g, "");

    // urly = urly.substring(urly.indexOf('/') + 2)
    
    // if(urly.charAt(urly.length-1)=='/'){
    //     urly = urly.slice(0,-1)
    // }

    // if(urly.includes('www.')){
    //     urly = urly.slice(4)
    // }
    
    URLOriginal.push(urly)

}).on('end', () => {

    m = URLOriginal.sort()
    n = URLReporte.sort()
    console.log(m)
    console.log(n)
    

    for (i = 0; i < m.length; i++) {

        //expect(m[i]).to.equal(n[i])

        if (m[i] != n[i]) {
            //TODO Fail test agregar return
            console.log(m[i] , n[i])
            console.log("URLs do not match")
        }
    }
});
