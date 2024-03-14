export interface Member {
  name: string;
  email: string;
  officer?: 'president' | 'vice-president' | 'treasurer' | 'secretary';
  graduationDate: Date;
  employment?: string;
  selfBio?: string;
  photoURL?: string;
}

export const emptyMember: Member = {
  name: '',
  email: '',
  graduationDate: new Date(),
};

export interface Event {
  title: string;
  description: string;
  upvotes: number;
  date?: Date;
  presenter?: string;
}
