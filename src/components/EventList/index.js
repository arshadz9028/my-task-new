export default function EventList({ events }) {
  return (
    <div>
      {events?.map((event) => (
        <div key={event.id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <h3>{event.title}</h3>
          <p>{event.city}</p>
          <p>{event.mode_of_event}</p>
        </div>
      ))}
    </div>
  );
}