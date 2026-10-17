const GuestDetails = ({ selectedGuest, setSelectedGuest }) => {
  const { name, email, phone, bio, job } = selectedGuest;

  return (
    <section id="card">
      <h2>{name}</h2>
      <p>{job}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{bio}</p>
      <button on onClick={() => setSelectedGuest(null)}>
        Back
      </button>
    </section>
  );
};

export default GuestDetails;
