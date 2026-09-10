import type { Pet } from '../types/pet';

const API_URL = 'http://localhost:3000/pets';

export async function getPets(): Promise<Pet[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch pets');
  }

  return response.json();
}

export async function createPet(
  pet: Omit<Pet, 'id'>
): Promise<Pet> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  });

  if (!response.ok) {
    throw new Error('Failed to add pet');
  }

  return response.json();
}

export async function updatePet(
  id: string,
  pet: Omit<Pet, 'id'>
): Promise<Pet> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  });

  if (!response.ok) {
    throw new Error('Failed to update pet');
  }

  return response.json();
}

export async function deletePet(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete pet');
  }
}