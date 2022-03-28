import classes from "./MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2> Desi Khana , Sirf 20 minute me</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch and dinner at home.
      </p>
      <p>
        All our meals are cooked hiigh-quality ingredients, just-in-time and of
        course by experienced chefs!
      </p>
    </section>
  );
}
