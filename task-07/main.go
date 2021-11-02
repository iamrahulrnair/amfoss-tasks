package main

import (
	"context"
	"encoding/csv"
	"fmt"
	"log"
	"os"
	"strconv"
	// "time"
	"github.com/chromedp/cdproto/emulation"
	"github.com/chromedp/chromedp"
)
func checkError(err error){
	if err!=nil{
		panic(err)
	}
}

func main() {
	// create chrome instance
	ctx, cancel := chromedp.NewContext(
		context.Background(),
		chromedp.WithLogf(log.Printf),
	)
	defer cancel()

	// create a timeout
	// start := time.Now()
	// navigate to a page, wait for an element, click
	var name string;
	var net_worth string;
	var age string;
	var country string;
	var source string;
	fName:= "data.csv";
	file,err:=os.Create(fName)
	checkError(err)
	defer file.Close()
	for i := 1; i < 11; i++ {
		err := chromedp.Run(ctx,
			emulation.SetUserAgentOverride("WebScraper 1.0"),
			chromedp.Navigate(`https://www.forbes.com/real-time-billionaires/`),
			chromedp.ScrollIntoView(`body`),
			chromedp.WaitVisible(`#row-4 > div.table-parent.ng-scope.ng-isolate-scope > div > div.fbs-table > div.scrolly-table > table > tbody`),
			chromedp.TextContent(fmt.Sprintf(`#row-4 > div.table-parent.ng-scope.ng-isolate-scope > div > div.fbs-table > div.scrolly-table > table > tbody > tr:nth-child(%s) > td.name > div > h3 > a`,strconv.Itoa(i)), &name,chromedp.ByQueryAll),
			chromedp.TextContent(fmt.Sprintf(`#row-4 > div.table-parent.ng-scope.ng-isolate-scope > div > div.fbs-table > div.scrolly-table > table > tbody > tr:nth-child(%s) > td.Net.Worth > div > span`,strconv.Itoa(i)), &net_worth,chromedp.ByQueryAll),
			chromedp.TextContent(fmt.Sprintf(`#row-4 > div.table-parent.ng-scope.ng-isolate-scope > div > div.fbs-table > div.scrolly-table > table > tbody > tr:nth-child(%s) > td.age > div > span`,strconv.Itoa(i)), &age,chromedp.ByQueryAll),
			chromedp.TextContent(fmt.Sprintf(`#row-4 > div.table-parent.ng-scope.ng-isolate-scope > div > div.fbs-table > div.scrolly-table > table > tbody > tr:nth-child(%s) > td.source > div > span`,strconv.Itoa(i)), &source,chromedp.ByQueryAll),
			chromedp.TextContent(fmt.Sprintf(`#row-4 > div.table-parent.ng-scope.ng-isolate-scope > div > div.fbs-table > div.scrolly-table > table > tbody > tr:nth-child(%s) > td.Country\/Territory > div > span`,strconv.Itoa(i)), &country,chromedp.ByQueryAll),
		)
		checkError(err)
	writer:=csv.NewWriter(file)
		writer.Write([]string{
			name,net_worth,age,country,source,
			})	
		// 	fmt.Printf(name,net_worth,age,country,source,)
		// fmt.Printf("\nTook: %f secs\n", time.Since(start).Seconds())
		writer.Flush()	
	}
}