export interface FormData {
    id?: string;
    date: string;
    radioData: string;
    activityName: string;
    amountSpent: number;
    category: string
}

export interface ResponseData extends Omit<FormData, 'id'> {
    _id: string;  // Assuming _id is always present in ResponseData
}

export interface todoType {
    id?: string;
    date: string;
    content: string;
    hoursTaken: number;
    minutesTaken: number
}

export interface FormListItem  {
    id?: string;
    buttonId?: string; 
    date: string; 
    number: number;
    activityName: string;
    amountSpent: string;
    radioData: string; 
  };