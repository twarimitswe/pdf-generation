const express=require('express');
const puppeteer=require('puppeteer');
const cors=require('cors');

const app=express();
app.use(cors());

const generateLargeData=(count) =>{
    return Array.from({length:count},(_, i) =>({
        name:`Student ${i+1}`,
        score: Math.floor(Math.random()* 100)
    }))

};

app.get('/api/data',(req,res)=>{
    res.json({ students:generateLargeData(500) });

});

app.get('/api/download-pdf', async (req,res)=>{
    let browser;
    try{
        //This code launc every time
      /*   const browser=await puppeteer.launch({
            headless:'new',
            args:['--no-sandbox', '--disable-setuid-sandbox'],


       }); */

       browser=await browserPromise;

       const page=await browser.newPage();

       await page.goto('http://localhost:3000/report',{waitUntil:'networkidle2'});

       const pdf=await page.pdf({
        format: 'A4', 
        printBackground:true,
    margin:{top:'20px', right:'20px',bottom:'20px',left:'20px'}
    });

       await page.close();

       res.contentType('application/pdf');
       res.send(pdf);
    }catch(error){
        console.error('Erro generating PDF:',error);
        res.status(500).send('Error generating PDF');
    }
});

const PORT=4000;
app.listen(PORT, ()=>{
    console.log(`Backend running at http://localhost:${PORT}`);

});

let browserPromise = puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
});