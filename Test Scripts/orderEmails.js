const fs = require("fs");
const csv = require('csv-parser');
var xlsx = require('node-xlsx').default;

//Editar
originalFilePath = `/Users/ultertechnologies/Documents/Vontera/Vontera Automated Tests/features/resources/10.csv`

//Editar
reportPath = `/Users/ultertechnologies/Desktop/report_10.xlsx`
    
//Parse .xlsx file
const report = xlsx.parse(reportPath);

//RE to get digit out of email
re = /\((\d+)\)/

//Parse report data
URLReporte = []
for (i = 1; i < report[0]["data"].length; i++) {
    
    arry = report[0]["data"][i][4]

    if (arry) {
        
        //console.log(arry)

        emails = report[0]["data"][i][3].split("\n")

        for (j = 1; j < emails.length; j++) {
            let prev = parseInt(re.exec(emails[j - 1])[1])
            let curr = parseInt(re.exec(emails[j])[1])
            console.log(curr)
            
            //Check order of emails
            if (curr > prev) {
                console.log("Unordered:", curr, ">", prev, "on", report[0]["data"][i][0])
                //expect(curr).to.be.lessThan(prev)

            }
        }
    }
}