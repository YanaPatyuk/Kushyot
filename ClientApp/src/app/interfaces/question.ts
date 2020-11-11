export interface Question 
{
    id: string;

    questionData: string;

    subject: string;

    format: string;

    author: string;

    adult: boolean;

    date: Date;

    rating?: number;

}