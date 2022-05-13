import  {CREATE, DELETE, EDIT, NONE} from "leaflet-freedraw";

export enum DrawingStateEnum {
    edit= 'edit',
    create = 'create',
    delete = 'delete'
}

export type ModeTypes = typeof CREATE | typeof EDIT | typeof DELETE | typeof NONE;

export interface DrawingState {
    id: DrawingStateEnum;
    label: string;
    mode: ModeTypes;
    isChecked: boolean;
}