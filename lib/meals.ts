//run: insert data, if we were changing data
//all: if fetching data, and we wanna get all rows that are fetched by that statement

import { MealItemType } from "@/components/Meals/MealsGrid";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error('Loading meals failed')
  return db.prepare("SELECT * FROM meals").all() as MealItemType[];
}

export function getMeal(slug: string) {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as MealItemType;
}
