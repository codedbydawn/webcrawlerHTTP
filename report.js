function printReport(pagesVisited) {
    console.log("================crawl report================")   
    const sortedPages = sortPages(pagesVisited)
    for (const sortedPage of sortedPages){
        const url = sortedPage[0]
        const hits = sortedPage[1]
        console.log(`${url} - ${hits} hits`)
    }
    console.log("================end report================")
}
function sortPages(pagesVisited) {
    const pagesVisitedArr = Object.entries(pagesVisited)
    pagesVisitedArr.sort((a, b) => {
        aHits = a[1]
        bHits = b[1]
        return bHits - aHits
    })
    return pagesVisitedArr
}

module.exports = { sortPages, printReport }