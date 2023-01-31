
const confirmate = async (confirmationPayload) => {
  return await fetch(`/api/confirmation`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(confirmationPayload)
  });
}

export default {
  confirmate
}
