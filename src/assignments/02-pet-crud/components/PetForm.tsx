import { useState } from 'react';
import type { Pet } from '../types/pet';

interface PetFormProps {
  pet: Pet | null;
  onPetAdded: (
    name: string,
    breed: string,
    age: number
  ) => Promise<boolean>;
  onPetUpdated: (
    id: string,
    name: string,
    breed: string,
    age: number
  ) => Promise<boolean>;
  onCancel: () => void;
}

export function PetForm({  pet,
  onPetAdded}: PetFormProps) {

 const [name, setName] = useState(pet?.name ?? '');
const [breed, setBreed] = useState(pet?.breed ?? '');
const [age, setAge] = useState(
  pet ? String(pet.age) : ''
);


  const [errors, setErrors] = useState({
  name: '',
  breed: '',
  age: '',
});

  const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const newErrors = {
  name: '',
  breed: '',
  age: '',
};

if (!name.trim()) {
  newErrors.name = 'Pet name is required.';
}

if (!breed.trim()) {
  newErrors.breed = 'Breed is required.';
}

const petAge = Number(age);

if (!age) {
  newErrors.age = 'Pet age is required.';
} else if (petAge < 0 || petAge > 30) {
  newErrors.age = 'Age must be between 0 and 30.';
}

setErrors(newErrors);

if (newErrors.name || newErrors.breed || newErrors.age) {
  return;
}

  const added = await onPetAdded(
    name,
    breed,
    Number(age)
  );

  if (added) {
    setName('');
    setBreed('');
    setAge('');
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Pet</h2>

      <div>
        <label htmlFor="pet-name">Name</label>
        <input
          id="pet-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

         {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="pet-breed">Breed</label>
        <input
          id="pet-breed"
          type="text"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
        />
        {errors.breed && <p>{errors.breed}</p>}
      </div>

      <div>
        <label htmlFor="pet-age">Age</label>
        <input
          id="pet-age"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        {errors.age && <p>{errors.age}</p>}
      </div>

      <button type="submit">Add Pet</button>
    </form>
  );
}