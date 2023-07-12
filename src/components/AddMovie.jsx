import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  console.log(title, director, IMDBRating, hasOscars);

  const hanldeInputChange = (e, setState, isCheckbox) => {
    setState(isCheckbox ? e.target.checked : e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, director, IMDBRating, hasOscars };
    props.addNewMovie(newMovie);
    console.log("Submitted: ", newMovie);
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  };

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleFormSubmit}>
        <label>Title: </label>
        <input
          onChange={(e) => hanldeInputChange(e, setTitle)}
          type="text"
          name="title"
          value={title}
        />
        <label>Director: </label>
        <input
          onChange={(e) => hanldeInputChange(e, setDirector)}
          type="text"
          name="director"
          value={director}
        />

        <label>IMDB Rating: </label>
        <input
          onChange={(e) => hanldeInputChange(e, setIMDBRating)}
          type="number"
          name="IMDBRating"
          value={IMDBRating}
        />

        <label>Won Oscars: </label>
        <input
          onChange={(e) => hanldeInputChange(e, setHasOscars, true)}
          type="checkbox"
          name="hasOscars"
          checked={hasOscars}
        />

        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
