export default function RoomList({ rooms, handleEdit, handleDelete }) {
  return (
    <ul>
      {rooms.map((room) => (
        <li key={room.id}>
          {room.name} - {room.capacity}
          <button onClick={() => handleEdit(room)}>Editar</button>
          <button onClick={() => handleDelete(room.id)}>Deletar</button>
        </li>
      ))}
    </ul>
  );
}
