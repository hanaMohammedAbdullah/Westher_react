import { useNavigate } from "react-router-dom";
import { Select, Button } from "antd";
let { Option } = Select;

function Home() {
  let name = "Hawler";
  let navigate = useNavigate();
  return (
    <div className="">
      <h3>Welcome to our Weather Forcast</h3>
      <p>Please choose your city</p>
      {/* <Select
        showSearch
        optionFilterProp="children"
        onChange={(value) => {
          name = value;
        }}
      >
        <Option value="irbil">Irbil</Option>
        <Option value="kirkuk">Kirkuk</Option>
        <Option value="sulaymaniyah">Sulaymaniyah</Option>
      </Select> */}
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={(value) => {
          name = value;
        }}
        // onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="irbil">Irbil</Option>
        <Option value="kirkuk">Kirkuk</Option>
        <Option value="sulaymaniyah">Sulaymaniyah</Option>
      </Select>
      <Button
        type="primary"
        onClick={() => {
          navigate(`/Weather/${name}`);
        }}
      >
        {" "}
        Show me
      </Button>
    </div>
  );
}

export default Home;
