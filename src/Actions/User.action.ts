export function getDataForForm(prevState: unknown, formData: FormData) {
  const name = formData.get("myName");
  const email = formData.get("email");
  return {
    message: `my name is ${name} and my email address: ${email}`,
    success: true,
  };
}
