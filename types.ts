import { ReactNode } from "react"
export type adressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}
export type contactType = {
    id: string,
    name: string,
    email: string,
    address: adressType,
}

export type postType = {
    map: any,
    id: string,
    title: string,
    body: string,
}

export type socialsType = {
    map: any,
    id: number,
    icon: string,
    path: string,
}
