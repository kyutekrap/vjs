### Breakdown of Features
1. UI Objects
    - Base (Abtract): Calls factory, maps DOM objects
    - Factory: Helps create DOM objects
    - Props: Defines props
    - Component (Default/Custom): Extends Base, manages event listeners
    - View (Custom): Defines UI
2. Browser Caching
    - sessionstorage
    - localstorage
    - indexeddb
3. Global Utils
    - PubSub
    - UI modifiers
---
### How to use cachier functions
Update tsconfig.json as<br>
```json
"experimentalDecorators": false,
"emitDecoratorMetadata": false,
```

### How to use IndexedDB
Use `createIndexedDB`<br>
Use `connectIndexedDB`

### How to use components
Download public/css<br>
Change css according to preference

### How to run (for developers)
Run `npm i` to install node_modules<br>
Run `npm run build` to package up<br>
Run `npm run dev` to render web page