export const data = [
  {
    workflow: 'Cycle 1 - A',
    steps: [
      {
        name: 'Step 1',
        value: 'value 1',
        status: 'done',
      },
      {
        name: 'Step 2',
        value: 'value 2',
        status: 'not started',
      },
      {
        name: 'Step 3',
        value: 'value 3',
        status: 'not started',
      },
      {
        name: 'Step 4',
        value: 'value 4',
        status: 'failed',
      },
      {
        name: 'Step 5',
        value: 'value 5',
        status: 'in progress',
      },
    ],
  },
  {
    workflow: 'Cycle 1 - B',
    steps: [],
  },
  {
    workflow: 'Cycle 1 - C',
    steps: [],
  },
  {
    workflow: 'Cycle 2 - A',
    steps: [],
  },
  {
    workflow: 'Cycle 2 - B',
    steps: [],
  },
  {
    workflow: 'Cycle 2 - C',
    steps: [
      {
        name: 'Test',
        value: '',
        status: 'not started',
      },
    ],
  },
  {
    workflow: 'Cycle 3 - A',
    steps: [
      {
        name: 'Test',
        value: '',
        status: 'not started',
      },
      {
        name: 'Test',
        value: '',
        status: 'not started',
      },
      {
        name: 'Test',
        value: '',
        status: 'not started',
      },
    ],
  },
  {
    workflow: 'Cycle 3 - B',
    steps: [],
  },
];