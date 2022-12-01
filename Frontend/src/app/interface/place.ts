export interface Place {
    id: string;
    category: string;
    name: string;
    imageUrl: string;
    description: string;
    location: string;
    isCharDham: boolean;
};


export interface Hotel {
    id: string;
    name?: string;
    totalRooms?: string;
    roomsAvailable?: string;
    imageUrl?: string;
    location: string;
};
