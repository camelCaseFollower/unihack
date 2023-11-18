export interface Event {
    _id: string;
    name: string;
    description: number;
    county: string;
    open: boolean;
    accommodation: boolean;
    dateStart: Date;
    dateEnd: Date;
    organizer: string;
    imageUrl: string;
  }
  
  export const fetchEvents = async (): Promise<Event[]> => {
    try {
      const response = await fetch('http://127.0.0.1:5000');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      return data.events; 
  
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };