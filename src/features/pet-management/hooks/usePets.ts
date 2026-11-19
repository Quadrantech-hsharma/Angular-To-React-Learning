import { useEffect, useState } from 'react';
import {
  createPet,
  getPets,
  updatePet,
  deletePet,
} from '../services/petService';
import type { Pet } from '../types/pet';

export function usePets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPets = async () => {
      try {
        const data = await getPets();
        setPets(data);
      } catch {
        setError('Unable to load pets.');
      } finally {
        setLoading(false);
      }
    };

    loadPets();
  }, []);

  const addPet = async (
    name: string,
    breed: string,
    age: number
  ) => {
    try {
      const newPet = await createPet({
        name,
        breed,
        age,
      });

      setPets((currentPets) => [
        ...currentPets,
        newPet,
      ]);

      return true;
    } catch {
      setError('Unable to add pet.');
      return false;
    }
  };

  const editPet = async (
  id: string,
  name: string,
  breed: string,
  age: number
) => {
  try {
    const updatedPet = await updatePet(id, {
      name,
      breed,
      age,
    });

    setPets((currentPets) =>
      currentPets.map((pet) =>
        String(pet.id) === id ? updatedPet : pet
      )
    );

    return true;
  } catch {
    setError('Unable to update pet.');
    return false;
  }
};

const removePet = async (id: string) => {
  setError('');

  try {
    await deletePet(id);

    setPets((currentPets) =>
      currentPets.filter((pet) => String(pet.id) !== id)
    );

    return true;
  } catch {
    setError('Unable to delete pet.');
    return false;
  }
};

  return {
    pets,
    loading,
    error,
    addPet,
    editPet,
    removePet
  };
}