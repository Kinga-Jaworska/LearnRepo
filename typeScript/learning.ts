// https://www.youtube.com/watch?v=QSIXYMIJkQg

// we can use it to better organise
// then we search via project key- TODO and we see all types to change

type TODO = any;

// we can set own type for promise
type T = { name: string };

function getPromise(): T {
  return Promise<T>;
}

// to not create literally strings as 'loading' 'successfull'
// we can use const T
type StateType = "loading" | "successfull";

// instead  useStatuses<T>(statuses: T[])
// should be:
// const [status, setStatus] = useState<const StateType>(statuses: T[]): T

// we can use new feature in typeScript - NoInfer
type NoInfer<T> = [T][T extends any ? 0 : never];

// we can extract type from array of types
const roles = ["admin", "user"] as const;
type Roles = (typeof roles)[number];

// hard finding refs
// we can use
// useREf<ElementRef<"audio"> tag name

// https://www.youtube.com/watch?v=zM9UPcIyyhQ
// Types vs Interfaces
// interfaces have special features as merge or declaring
// if we need this feature use interface in other way -> types
