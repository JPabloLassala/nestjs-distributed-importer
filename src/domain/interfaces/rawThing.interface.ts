export interface IRawThing {
  id: number;
  name: string;
  tags: string[];
  idChildNode: number[];
  updated: Date;
  created: Date;
}
