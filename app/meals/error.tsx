"use client";
//must be a client comp (rule).
//simply because we also wanna manage errors on client side
export default function Error() {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}
