//run: insert data, if we were changing data
//all: if fetching data, and we wanna get all rows that are fetched by that statement
import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import { MealItemType } from "@/components/Meals/MealsGrid";
import { MealInput } from "./actions";

const db = sql("meals.db");
type FormDataType = {
  title: any;
  summary: any;
  instructions: any;
  image: any;
  creator: any;
  creator_email: any;
};
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

export async function saveMeal(meal: MealInput) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
