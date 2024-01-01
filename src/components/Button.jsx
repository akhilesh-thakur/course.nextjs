export default function Button(props) {
  return (
    <>
      <button class="my-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {props.btnName}
      </button>
    </>
  );
}
