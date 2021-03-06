import * as React from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../Dropdown/Dropdown";
import ClickOutside from "../ClickOutside/ClickOutside";

interface SearchBarProps {
  suggestions: Array<string>;
  onChange: (value: string) => void;
  defaultValue?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  suggestions,
  onChange,
  defaultValue,
}) => {
  const [input, setInputState] = React.useState("");
  const [filteredSuggestions, setSuggestions] = React.useState<Array<string>>([]);

  React.useEffect(() => {
    if (defaultValue) setInputState(defaultValue);
  }, [defaultValue]);

  const filterSuggestions = (inputValue: string): void => {
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase()) ? suggestion : null
    );
    filteredSuggestions.length > 0
      ? setSuggestions(filteredSuggestions)
      : setSuggestions(["Sorry, can't find this location"]);
  };

  const handleInputChange = React.useCallback(
    e => {
      const inputValue = e.target.value;
      setInputState(inputValue);
      filterSuggestions(inputValue);
    },
    [input]
  );

  const handleClose = React.useCallback(() => {
    setInputState("");
  }, []);

  const handleSuggestionClick = React.useCallback(suggestion => {
    if (suggestions.includes(suggestion)) {
      setInputState(suggestion);
      setSuggestions([]);
      onChange(suggestion);
    }
  }, []);

  const handleClickAway = React.useCallback(() => {
    setSuggestions([]);
  }, []);

  return (
    <ClickOutside onClickOutside={handleClickAway}>
      <section className={styles.SearchBar}>
        {filteredSuggestions.length > 0 && input !== "" && (
          <div onClick={handleClose}>
            <FontAwesomeIcon icon="times" className={styles.SearchBar_closeIcon} size="1x" />
          </div>
        )}
        <input
          type="text"
          placeholder="Search by city"
          autoComplete="off"
          className={styles.SearchBar_textBox}
          value={input}
          onChange={handleInputChange}
        />
        {filteredSuggestions.length > 0 && input !== "" && (
          <Dropdown options={filteredSuggestions} onOptionsClicked={handleSuggestionClick} />
        )}
      </section>
    </ClickOutside>
  );
};

export default SearchBar;
