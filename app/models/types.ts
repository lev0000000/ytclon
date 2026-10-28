
export interface PropsUrl<T> {
    params : Promise<T>;
}

export type Params<K extends string, T = string> = {
    [params in K]:T;
}

export interface Component {
    className?:string
    children?: React.ReactNode
}