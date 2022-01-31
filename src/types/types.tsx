export interface IPost{
    id: number,
    title: string,
    body: string
}

export interface IAdress{
    street: string,
    suite: string,
    city: string
}

export interface ICompany{
    name: string
}

export interface IUser{
    name: string,
    username: string,
    email: string,
    address: IAdress,
    phone: string,
    website: string,
    company: ICompany
}