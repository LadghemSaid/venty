import { createMachine } from "xstate";

export const FakeDataMachine = createMachine({
  id: "FakeDataMachine",
  initial: "Loading",
  states: {
    "Initializing data": {
      on: {
        ready: {
          target: "Fake data is generated",
        },
      },
    },
    "Fake data is generated": {
      after: {
        "2000": {
          actions: ["Update data in store", "Update data in cookies"],
          target: "Update random data",
        },
      },
    },
    Loading: {
      on: {
        "Event 1": [
          {
            cond: "Data is in store",
            target: "Get data from store",
          },
          {
            cond: "Data is in cookies",
            target: "Get data from cookie",
          },
          {
            target: "Initializing data",
          },
        ],
      },
    },
    "Update random data": {
      on: {
        generated: {
          target: "Loading",
        },
      },
    },
    "Get data from cookie": {
      on: {
        ready: {
          target: "Fake data is generated",
        },
      },
    },
    "Get data from store": {
      on: {
        ready: {
          target: "Fake data is generated",
        },
      },
    },
  },
});
