export interface Notebook{
    asset_code:string,
    brand:string,
    model:string,
    serial:string,
    status:string,
    warranty:number,
    warranty_date:string,
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
        warranty_date:string,
        purchase_date:string,
        remark:string,}[]
}