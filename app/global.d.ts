interface Response {
    restaurants: Restaurant[];
}

interface Restaurant {
    objectId: string;
    name: string;
    address1: string;
    suburb: string;
    cuisines: string[];
    imageLink: string;
    open: string;
    close: string;
    deals: Deal[];
}

interface Deal {
    objectId: string;
    discount: string;
    dineIn: string;
    lightning: string;
    qtyLeft: string;
    open?: string;
    close?: string;
}

interface TimedDeal extends Deal {
    start: string;
    end: string;
}
