export type Reason = {
  id: number;
  name: string;
  icon: string;
};

export type Field = {
  id: number;
  name: string;
};

export type Machinery = {
  id: number;
  name: string;
  serialNumber: null | string;
  growerId: number;
};

export type Farm = {
  id: number;
  name: string;
  growerId: number;
  growerName: string;
  fields?: Field[];
};
