export const getErrorMessage = (error: unknown) => {
  const message =
    error instanceof Error ? error.message : "Something went wrong";

  return message;
};
