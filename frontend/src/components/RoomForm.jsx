export default function RoomForm({
  name,
  setName,
  capacity,
  setCapacity,
  handleSubmit,
  editingRoom,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da sala"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Capacidade"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
      />

      <button type="submit">{editingRoom ? "Atualizar" : "Criar"}</button>
    </form>
  );
}
