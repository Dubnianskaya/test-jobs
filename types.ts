export interface LocationType {
    lat: number,
    long: number,
}

export interface JobType {
    address: string,
    benefits: Array<string>,
    createdAt: string,
    description: string,
    email: string,
    employment_type: Array<string>,
    id: string,
    location: LocationType,
    name: string,
    phone: string,
    pictures: Array<string>,
    salary: string,
    title: string,
}

export interface ImageType {
    img: string,
    width: number,
    height: number,
    styles: string,
}

export interface DescriptionType {
    desc: string,
    responsopilities: string,
    benefits: Array<string>,
}
