export interface Notebook{
    brand:string,
    model:string,
    serial:string,
    status:string,
    warranty:number,
    asset_code:string,
    purchase_date:string,
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
        warranty:number,
        asset_code:string,
        warrant_date:string,
        purchase_date:string,
        remark:string,}[]
}