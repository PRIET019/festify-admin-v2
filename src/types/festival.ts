export type Festival = {

        id: number;
        title: string;
        about: string;
        city: string;
        from: Date;
        to: Date;
        price_from: DoubleRange;
        price_to: DoubleRange;

        

}


export type FestivalRequest = {

        id?: number;
        title: string;
        about: string;
        city: string;
        from: Date;
        to: Date;
        price_from: DoubleRange;
        price_to: DoubleRange;


}