import { useNavigate } from "react-router-dom";

function Home() {
  let name;
  let navigate = useNavigate();
  return (
    <div className="selection_card">
      <h3>Welcome to our Weather Forcast</h3>
      <p>Please choose your city</p>
      <label htmlFor="location">
        Location :
        <select
          id="location"
          onChange={(event) => {
            name = event.target.value;
            console.log(name);
          }}
        >
          <option value="arbil"> Erbil</option>
          <option value="Kirkuk">Kirkuk</option>
          <option value="Sulaymaniyzah">Sulaymaniyah</option>
        </select>
      </label>

      <button
        className="home-button"
        onClick={() => {
          navigate(`/Weather/${name}`);
        }}
      >
        Show me
      </button>
    </div>
  );
}

export default Home;
