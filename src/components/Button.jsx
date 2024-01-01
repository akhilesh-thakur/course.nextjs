export default function Button(props) {
  const btnClass = `my-7 bg-${"green"}-500 hover:bg-${"green"}-700 text-white font-bold py-2 px-4 rounded`;
  return (
    <>
      <button className={btnClass}>{props.btnName}</button>
    </>
  );
}
