const express = require('express')
const app = express()
const fs = require('fs')
const request = require('request')
const config = require('./config')
const port = config.PORT
const api_key = config.API_KEY


app.get('/ticker=:ticker', function (req, res) {
    const ticker = req.params.ticker
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${api_key}`;
    //console.log(url)
    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
      }, (err, response, data) => {
        if (err) {
          console.log('Error:', err);
        } else if (response.statusCode !== 200) {
          console.log('Status:', response.statusCode);
        } else {
          // data is successfully parsed as a JSON object:
          //console.log(data);
          const newData = JSON.stringify(data)
          fs.writeFile(`${ticker}.json`, newData, (err) => {
            if (err) {
                console.log('File write error', err)
                res.status(500).send('Internal Server Error')
            } else {
                console.log('File write success')
                res.send('Success')
            }
          })
        }
    })
   // res.send('Success')
})

app.get('/ticker-result=:ticker', function (req, res) {
    const ticker = req.params.ticker
    const filePath = `${__dirname}/${ticker}.json`

    fs.readFile(filePath, 'utf8', function(err, data){
        if(err) {
            console.log('File read error', err)
            res.status(500).send('Internal Server Error')
        } else {
            res.send(JSON.parse(data))
        }
    })
})

app.listen(port || 5000, () => {
    console.log('Running ...')
})