## 8 TypeScript Tips To Expand Your Mind (and improve your code)

https://www.youtube.com/watch?v=QSIXYMIJkQg

1. ReactNode vs JSX Element
2. beforeEach | afterEach - using mock = mockSomething() (removing each time so no before/each)
3. type TODO = any (alias for any to know what replace)
4. Type param async function retry<T> fn: () => Promise<T>
5. Using literally type not strings useStatuses<T>(statuses: T[]): T should be useStatuses<const T>(statuses: T[]): T
6. New feature in typeScript - NoInfer
7. Select roles from array as type -> type Role = (typeof roles)[number]
8. Element Ref - useRef
