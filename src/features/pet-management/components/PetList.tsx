import type { Pet } from '../types/pet';

interface PetListProps {
  pets: Pet[];
  onEdit: (pet: Pet) => void;
   onDelete: (id: string) => void;
}

export function PetList({ pets, onEdit, onDelete }: PetListProps) {
  if (pets.length === 0) {
    return <p>No pets found.</p>;
  }

  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          {pet.name} - {pet.breed} - {pet.age} years

           <button onClick={() => onEdit(pet)}>
        Edit
      </button>
      <button onClick={() => onDelete(String(pet.id))}>
    Delete
  </button>
        </li>
      ))}
    </ul>
  );
}