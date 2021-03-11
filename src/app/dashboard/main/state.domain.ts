export interface StateDetail {
    name: String,
    activeCases: number,
    curedCases: number,
    vaccinated: number
    deaths: number,
    stateHealth: string
}
export interface Detail {
    FIPS: string,
    Admin2: string,
    Province_State: string,
    Country_Region: string,
    Last_Update: Date,
    Lat: number,
    Long_: number,
    Confirmed: number,
    Deaths: number,
    Recovered: number,
    Active: number,
    Combined_Key: string,
    Incident_Rate: number,
    Case_Fatality_Ratio: number
}