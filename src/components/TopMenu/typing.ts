export interface ListItemI {
  name: string;
  action?: () => void;
}

export interface ItemI {
  title: string;
  list?: ListItemI[];
}

export interface TopMenuI {
  menu: ItemI[];
}
