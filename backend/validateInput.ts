export const validateInput = (requestType, requestInput) => {
    const validationResponse = requestType.safeParse(requestInput);
    return validationResponse.success;
}