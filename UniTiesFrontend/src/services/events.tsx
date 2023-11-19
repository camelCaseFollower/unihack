export interface Event {
  _id: string;
  name: string;
  description: string;
  county: string;
  dateStart: Date;
  dateEnd: Date;
  organizer: string;
  imageUrl: string;
  category: string;
}

let newIds: number[] = [];

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

export const fetchEvent = async (id: string): Promise<Event> => {
  try {
    console.log(id);
    const url = 'http://127.0.0.1:5000/event/' + id;
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data.event;

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


