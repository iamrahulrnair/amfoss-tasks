package main

import (
	"encoding/csv"
	"fmt"
	"os"

	"github.com/gocolly/colly"
)

func checkError(err error){
	if err!=nil{
		panic(err)
	}
}
func main(){
	fName:="data.csv"
	file,err:=os.Create(fName)
	checkError(err)
	defer file.Close()
	writer:=csv.NewWriter(file)
	defer writer.Flush()
	c:=colly.NewCollector(colly.AllowedDomains("forbes.com","www.forbes.com"),colly.UserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"))
	c.OnHTML(".scrolly-table tbody tr", func(e *colly.HTMLElement) {
			writer.Write([]string{
				e.ChildText(".rank .ng-binding"),
			})
		})	
		c.OnError(func(_ *colly.Response, err error) {
			fmt.Println("Something went wrong:", err)
		})
		c.OnRequest(func(r *colly.Request) {
			fmt.Println("Visiting", r.URL)
		})
		c.OnResponse(func(r *colly.Response) {
			fmt.Println("Visited", string(r.Body))
		})
		c.Visit("https://www.forbes.com/real-time-billionaires/#131241903d78")
}