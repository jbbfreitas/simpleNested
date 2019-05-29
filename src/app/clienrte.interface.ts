export interface Cliente {
    name: string;
    addresses: Endereco[];
}

export interface Endereco {
    street: string;
    postcode: string;
}