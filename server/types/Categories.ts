export enum Category
{
    Fun,
    Work,
    Chores
}

export interface SubCategory
{
    parent:Category
    name:string
    //Eg. Parent: Fun
    //SubCategory: Movies
    //SubCategory: Shows
}

