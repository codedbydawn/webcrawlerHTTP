const {crawlPage} = require('./crawl.js')
async function main(){
    if (process.argv.length < 3) {
        console.log("no URL provided")
        process.exit(1)
    }
    if (process.argv.length > 3) {
        console.log("too many arguments provided")
        process.exit(1)
    }
    const baseURL = process.argv[2]
    console.log(`starting crawl of ${baseURL}`)
    const pagesVisited = await crawlPage(baseURL , baseURL, {})

    for (const page of Object.entries(pagesVisited)){
        console.log(page)
    }
}
main()