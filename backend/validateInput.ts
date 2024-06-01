export const validateInput = (requestType:any, requestInput:any) => {
    const validationResponse = requestType.safeParse(requestInput);
    return validationResponse.success;
}