interface Quest
{
    //Read a Book
    //Watch the next episode of Dragon Ball
    objective:string
    //FromDate.Now as reference in epoch
    //Duration=endtime-nowTime in epoch    
    startDate:Date
    endDate:Date
    category:SubCategory
    interrupted:boolean
    
}