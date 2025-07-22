//run: insert data, if we were changing data
//all: if fetching data, and we wanna get all rows that are fetched by that statement

import { MealItemType } from "@/components/Meals/MealsGrid";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all() as MealItemType[];
}

/* 
This is because this specific page - our homepage with all our delicious meals listed - is already prepared,
 yes including HTML and images and links and everything, at build time. Build time just means, once you have finished this project,
  you build the production ready (market ready) bundle with a single command, and all your static pages are now built.

When a user now visits your homepage, our server will NOT query our database for meals list. It already has that list saved. Hence, SSR. */
