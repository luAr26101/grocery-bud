function SingleItem({ item, removeItem, editItem }) {
  const { completed, name, id } = item;
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textDecoration: completed && "line-through",
          textTransform: "capitalize",
        }}
      >
        {name}
      </p>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default SingleItem;
