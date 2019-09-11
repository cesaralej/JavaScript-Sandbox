const fs = require('fs');

//Randomize text
const current_datetime = new Date()
const text = "" + current_datetime.getFullYear() + (current_datetime.getMonth()) + current_datetime.getDate() + current_datetime.getHours() + current_datetime.getMinutes() + current_datetime.getSeconds()
newTopic = text

filePath = `${process.cwd()}/features/downloads/${newTopic}.csv`

const json3 = {
    "count": 2,
    "items": [{
        "title": "Apple iPhone 4S Sale Cancelled in Beijing Amid Chaos (Design You Trust)",
        "description": "Advertise here with BSA Apple cancelled its scheduled sale of iPhone 4S in one of its stores in China’s capital Beijing on January 13. Crowds outside the store in the Sanlitun district were waiting on queues overnight. There were incidents of scuffle between shoppers and the store’s security staff when shoppers, hundreds of them, were told that the sales [...]Source : Design You TrustExplore : iPhone, iPhone 4, Phone",
        "link": "http://wik.io/info/US/309201303",
        "timestamp": 1326439500,
        "image": null,
        "embed": null,
        "language": null,
        "user": null,
        "user_image": null,
        "user_link": null,
        "user_id": null,
        "geo": null,
        "source": "wikio",
        "favicon": "http://wikio.com/favicon.ico",
        "type": "blogs",
        "domain": "wik.io",
        "id": "2388575404943858468"
      },
      {
        "title": "Apple to halt sales of iPhone 4S in China (Fame Dubai Blog)",
        "description": "SHANGHAI – Apple Inc said on Friday it will stop selling its latest iPhone in its retail stores in Beijing and Shanghai to ensure the safety of its customers and employees. Go to SourceSource : Fame Dubai BlogExplore : iPhone, iPhone 4, Phone",
        "link": "http://wik.io/info/US/309198933",
        "timestamp": 1326439320,
        "image": null,
        "embed": null,
        "language": null,
        "user": null,
        "user_image": null,
        "user_link": null,
        "user_id": null,
        "geo": null,
        "source": "wikio",
        "favicon": "http://wikio.com/favicon.ico",
        "type": "blogs",
        "domain": "wik.io",
        "id": "16209851193593872066"
      }
    ]
  }

const data = {};
const prospects = []
data.prospects = prospects;
console.log(data);
const count = 2
for (let i=0; i<count; i++){
    const current_datetime = new Date()
    const url = "" + current_datetime.getFullYear() + (current_datetime.getMonth()) + current_datetime.getDate() + current_datetime.getHours() + current_datetime.getMinutes() + current_datetime.getSeconds()
    
    var prospect = {
        "url": `https://www.${url}.com/resources`,
        "topic": text
    }
    data.prospects.push(prospect);
} 
console.log(data);

//Convert JSON to CSV format
const items = json3.items
const replacer = (key, value) => value === null ? '' : value
const header = Object.keys(items[0])

let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))

csv.unshift(header.join(','))
csv = csv.join('\r\n')

//Create CSV file from CSV data
fs.appendFile(filePath, csv, (err) => {
    if (err) throw err;
    console.log(`Created ${newTopic}.csv`);
  });