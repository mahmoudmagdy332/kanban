
export type card={
    id:number;
    title:string;
    email:string;
    mobile:string;
    age:number;
    status:'Unclaimed'|'FirstContact'|'PreparingWorkOffer'
    |'SendTherapist';
}


export type form={
    title:string;
    name:string;
    email:string;
    mobile:string;
    age:string;
}


