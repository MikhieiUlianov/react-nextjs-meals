"use server";

export async function shareMealPage(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("title"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };
}
