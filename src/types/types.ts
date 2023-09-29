export interface Resources {
  machineries: Machinery[];
  farms: Farm[];
  reasons: Reason[];
}

export interface Machinery {
  id: number;
  name: string;
  serialNumber: null | string;
  growerId: number;
}

export interface Farm {
  id: number;
  name: string;
  growerId: number;
  growerName: string;
  fields?: Field[];
}

export interface Field {
  id: number;
  name: string;
}

export interface Reason {
  id: number;
  name: string;
  icon: string;
}
