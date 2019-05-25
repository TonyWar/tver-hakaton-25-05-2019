export interface Task {
    id: string;
    description: string;
    categoryId: string;
    olderId: string;
    helperId?: string;
    dateStart: string;
    dateEnd?: string;
    repeatable: boolean;
    repeatDays?: {
        Monday: boolean;
        Tuesday: boolean;
        Wednesday: boolean;
        Thursday: boolean;
        Friday: boolean;
        Saturday: boolean;
        Sunday: boolean;
    };
    timeMinutes: number;
    timeHours: number;
};
