const Guests = ({ guests, setSelectedGuest }) => {
  return (
    <ul>
      {guests.map((guest) => (
        <li key={guest.id} onClick={() => setSelectedGuest(guest)}>
          {guest.name} | {guest.email} | {guest.phone}
        </li>
      ))}
    </ul>
  );
};

export default Guests;
