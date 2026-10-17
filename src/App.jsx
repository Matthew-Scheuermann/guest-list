import Guests from "./Guests";
// import { GUESTS } from "./data";
import { useState } from "react";
import GuestDetails from "./GuestDetails";
import { useEffect } from "react";

import { fetchGuests } from "./api";

export default function App() {
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [guests, setGuests] = useState([]);

  //test
  // console.log(selectedGuest);

  useEffect(() => {
    const getGuests = async () => {
      const data = await fetchGuests();
      setGuests(data);
    };

    getGuests();
  }, []);

  return (
    <>
      <h1>Guest List</h1>
      {selectedGuest ? (
        <GuestDetails
          selectedGuest={selectedGuest}
          setSelectedGuest={setSelectedGuest}
        />
      ) : (
        <Guests guests={guests} setSelectedGuest={setSelectedGuest} />
      )}
    </>
  );
}
