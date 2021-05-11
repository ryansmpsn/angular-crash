// Interface - a way to define a contract on a function with respect to the arguments and their type. Along with functions, an interface can also be used with a Class as well to define custom types.

export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
