export default function ReservationForm({
  rooms,
  roomId,
  setRoomId,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  handleReservation,
}) {
  return (
    <form onSubmit={handleReservation}>
      <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
        <option value="">Selecione uma sala</option>
        {rooms.map((room) => (
          <option key={room.id} value={room.id}>
            {room.name}
          </option>
        ))}
      </select>

      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />

      <input
        type="datetime-local"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />

      <button type="submit">Reservar</button>
    </form>
  );
}
