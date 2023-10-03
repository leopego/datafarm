export type ResourcesType = {
  machineries: MachineryType[];
  farms: FarmType[];
  reasons: ReasonType[];
};

export type MachineryType = {
  id: number;
  name: string;
  serialNumber: null | string;
  growerId: number;
};

export type FarmType = {
  id: number;
  name: string;
  growerId: number;
  growerName: string;
  fields?: FieldType[];
};

export type FieldType = {
  id: number;
  name: string;
};

export type ReasonType = {
  id: number;
  name: string;
  icon: string;
};

export type StopType = {
  id: string;
  farm: FarmType;
  field: FieldType;
  machinery: MachineryType;
  note?: string;
  reason: ReasonType;
  minutes: number;
  longitude: number;
  latitude: number;
  synced: boolean;
  errorOnSync: boolean;
};
