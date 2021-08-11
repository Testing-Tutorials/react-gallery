export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
};

/* const get = () => {
  return jest.fn(() => Promise.resolve({ data: null }));
};

export default get;
 */
