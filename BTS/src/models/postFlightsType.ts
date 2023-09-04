export interface IPostFlightsType {
  user_id: string;
  first_name: string;
  last_name: string;
  notes: string;
  emails: string[];
  phones: string[];
  marketing_source: string;
  details: [
    {
      adults: string;
      child: string;
      infants: string;
      flights: [
        {
          iata_from: string;
          iata_to: string;
          departure_date: string;
        },
      ];
    },
  ];
}
