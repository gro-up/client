export const setError = (error: unknown) => {
  if (error instanceof Error) {
    throw new Error(error.message);
  }

  throw new Error('알 수 없는 오류');
};
