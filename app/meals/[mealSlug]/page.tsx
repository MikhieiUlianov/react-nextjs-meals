type Props = {
  params: {
    mealSlug: string;
  };
};

export default function MealsMealPage({ params }: Props) {
  return <h1>{params.mealSlug}</h1>;
}
