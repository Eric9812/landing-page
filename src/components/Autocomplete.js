import React from "react";
import styled, { ThemeContext } from "styled-components";
import { SearchIcon } from "../assets/images";
import { useDebounce } from "../hooks";
import { Provinces } from "../data";
import { breakpoints } from "../theme";

const Wrapper = styled.div`
  width: 600px;
  margin: 240px auto;
  @media screen and (max-width: ${breakpoints.medium}px) {
    width: 80%;
    margin: 40% auto;
  }
`;

const SearchBox = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.theme.input};
`;
const Icon = styled(SearchIcon)`
  width: 10%;
`;
const Input = styled.input`
  background: transparent;
  width: 90%;
  height: 80%;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: ${(props) => props.theme.text};
  &:focus {
    outline: none;
  }
`;

const Options = styled.ul`
  max-height: 300px;
  overflow: hidden;
  overflow-y: scroll;
  background: ${(props) => props.theme.options};
`;

const Option = styled.li`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.text};
  padding: 15px;
`;

const Autocomplete = () => {
  const { text } = React.useContext(ThemeContext);
  const [keyword, setKeyword] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const debouncedKeyword = useDebounce(keyword, 500);

  React.useEffect(() => {
    if (debouncedKeyword) {
      const filteredProvinces = Provinces.filter((value) => {
        return value.toLowerCase().includes(debouncedKeyword.toLowerCase());
      });
      setOptions(filteredProvinces);
    } else {
      setOptions([]);
    }
  }, [debouncedKeyword]);

  return (
    <Wrapper>
      <SearchBox>
        <Icon fill={text} />
        <Input onChange={({ target: { value } }) => setKeyword(value)} />
      </SearchBox>
      <Options>
        {options.map((value, index) => (
          <Option key={index}>{value}</Option>
        ))}
      </Options>
    </Wrapper>
  );
};

export default Autocomplete;
