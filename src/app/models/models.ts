export interface Notebook{
    brand:string,
    model:string,
    serial:string,
    status:string,
    waranty:number,
    asset_code:string,
    purchae_date:string,
    remark:string,
}

export interface RequestNotebook{
    resultCode: number,
    resultDescription: string,
    resultData: {
        brand:string,
        model:string,
        serial:string,
        status:string,
        waranty:number,
        asset_code:string,
        purchae_date:string,
        remark:string,}[]
}