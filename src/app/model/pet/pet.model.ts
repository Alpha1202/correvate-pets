interface IPetCategory {
  id: number;
  name: String;
}
interface IPetTag {
  id: number;
  name: String;
}

export interface IPet {
  id: number;
  category: IPetCategory;
  name: String;
  photoUrls: String[];
  tags: IPetTag[];
  status: string;
}

export interface IPetState {
  Pets: IPet[];
  filteredPets: IPet[];
  isLoading: boolean;
}

export interface IPetStatus {
  item: String;
  value: String;
}
