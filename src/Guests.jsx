const Guests = ({ GUESTS, setSelectedGuest }) => {
  return (
    <ul>
      {GUESTS.map((guest) => (
        <li key={guest.id} onClick={() => setSelectedGuest(guest)}>
          {guest.name} | {guest.email} | {guest.phone}
        </li>
      ))}
    </ul>
  );
};

export default Guests;
