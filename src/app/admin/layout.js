export default function layout({ children }) {
  return (
    <>
     <main className="flex flex-col items-center justify-between p-24">
      <div>{children}</div>
      </main>
    </>
  );
}
