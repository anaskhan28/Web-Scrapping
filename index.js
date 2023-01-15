const puppeteer = require("puppeteer");
const fs = require("fs");
const download = require("download");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = [
     "https://www.bankofbaroda.in/tenders/corporate-office/implementation-and-maintenance-of-automated-collection-system",
    "https://www.unionbankofindia.co.in/english/tendelviewall.aspx",
   

  ];

  for (const urls of url){
    await page.goto(urls);
    let sel = 'a[href$=".pdf"]';
     totalLinks = await page.evaluate(sel => {
      let elements = Array.from(document.querySelectorAll(sel));
      let links = elements.map(element => {
       return element.href
        
      });
    
      return links;
  
  }, sel);
 
}

    // fs.writeFile('tenders.json', JSON.stringify(totalLinks), (err)=>{
    //     if(err) throw err;
    //     console.log("file saved");
    // })
    
// TO download the files 

  for (var i = 0; i < totalLinks.length; i++) {
    //console.log(totalLinks[i])
     let value = totalLinks[i].toString();
     download(value,"tenders").then(() => {
       console.log("***PDF Download***")
     })
    
    
 }
  await browser.close();
})();


// async function run(){
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.bankofbaroda.in/tenders/corporate-office/implementation-and-maintenance-of-automated-collection-system');

//     // await page.pdf({path: "baroda.pdf", format: "A4"});
    
//     // const title = await page.evaluate(()=> document.title);
    

//     // );


    
//     // fs.writeFile('tender.json', JSON.stringify(courses), (err)=>{
//     //     if(err) throw err;
//     //     console.log("file saved");
//     // })
    
//     const bankPdf = await page.click('.download-btn');
//     fs.writeFile('bank.pdf',bankPdf, (err) =>{
//         if(err) throw err;
//         console.log("file saved");
//     } )



//     await browser.close();
// }
// run();