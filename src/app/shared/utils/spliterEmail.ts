export const spliterEmail = (email: string) => email.includes("@") ? email.split("@")[0] : "";
