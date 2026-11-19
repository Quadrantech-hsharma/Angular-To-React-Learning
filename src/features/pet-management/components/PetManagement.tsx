import { usePets } from '../hooks/usePets';
import { PetForm } from './PetForm';
import { PetList } from './PetList';
import { useState } from 'react';
import type { Pet } from '../types/pet';

export function PetManagement() {
  const { pets, loading, error, addPet, editPet, removePet } = usePets();
  const [editingPet, setEditingPet] = useState<Pet | null>(null);

  if (loading) {
    return <p>Loading pets...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h1>Pet Management</h1>

     <PetForm
  key={editingPet?.id ?? 'new'}
  pet={editingPet}
  onPetAdded={addPet}
  onPetUpdated={editPet}
  onCancel={() => setEditingPet(null)}
/>

     <PetList
  pets={pets}
  onEdit={setEditingPet}
  onDelete={removePet}
/>
    </section>
  );
}