export interface Place {
    _id?: string;
    id?: string;
    category?: string;
    name?: string;
    imageUrl?: string;
    description?: string;
    location?: string;
    isCharDham?: boolean;
};

export interface Hotel {
    _id?: string;
    id?: string;
    name?: string;
    totalRooms?: string;
    roomsAvailable?: string;
    imageUrl?: string;
    location?: string;
};

export interface Total {
    totalPlaces?: string;
    totalHotels?: string;
    totalTravelers?: string;
};
export interface Booking {
    _id?: string;
    userName?: string;
    userId?: string;
    hotelId?: string;
    hotelName?: string;
    numberOfRooms?: string;
    fromDate?: string;
    toDate?: string;
    isConfirmed?: boolean;
};
