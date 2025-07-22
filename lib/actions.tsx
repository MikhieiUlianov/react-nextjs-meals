"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "./meals";

export type MealInput = {
  title: string;
  summary: string;
  instructions: string;
  image: string | File;
  creator: string;
  creator_email: string;
  slug?: string;
};

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}
export async function shareMeal(formData: FormData) {
  const title = formData.get("title");
  const summary = formData.get("summary");
  const instructions = formData.get("instructions");
  const image = formData.get("image");
  const creator = formData.get("name");
  const creator_email = formData.get("email");

  if (
    typeof title !== "string" ||
    typeof summary !== "string" ||
    typeof instructions !== "string" ||
    !(image instanceof File) ||
    typeof creator !== "string" ||
    typeof creator_email !== "string"
  ) {
    throw new Error("Invalid form data");
  }

  const meal: MealInput = {
    title,
    summary,
    instructions,
    image,
    creator,
    creator_email,
  };
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid error");
  }
  await saveMeal(meal);
  redirect("/meals");
}
