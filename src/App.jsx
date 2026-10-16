import Guests from "./Guests";
import { GUESTS } from "./data";
import { useState } from "react";

export default function App() {
  const [selectedGuest, setSelectedGuest] = useState(null);

  //test
  console.log(selectedGuest);

  return (
    <>
      <h1>Guest List</h1>
      <Guests GUESTS={GUESTS} setSelectedGuest={setSelectedGuest} />
    </>
  );
}
