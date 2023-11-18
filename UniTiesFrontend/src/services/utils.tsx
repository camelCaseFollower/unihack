export interface Question {
    email: string;
    firstName: string;
    lastName: string;
    message: string;
  }
  
  export const postQuestion = async (question : Question) => {
    try {
        console.log(question);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(question)
        };
        const response = await fetch('http://127.0.0.1:5000/questions', requestOptions);
        const data = await response.json();
        console.log(data);

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };