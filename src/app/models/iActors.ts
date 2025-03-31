export interface IActors {
    cast: {
        id: number,
        known_for_department: string,
        name: string,
        profile_path: string,
        character: string
    } []; 
    crew: {
        adult: boolean,
        gender: number,
        id: number,
        known_for_department: string,
        name:string,
        original_name: string,
        popularity:number,
        profile_path: string,
        credit_id: string,
        department:string,
        job:string,
    }[];
    id:number;


}
