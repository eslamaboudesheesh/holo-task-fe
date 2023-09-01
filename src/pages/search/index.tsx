import React, { useState, useEffect, useCallback } from "react";

import { debounce } from "lodash";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchDataSearch } from "../../features/search-form/DataFormSubmitSlice";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import Header from "../../components/Header";
import GitHubIcon from "../../assets/icons/github.svg";
import UserCard from "../../components/UserCard";
import RepoCard from "../../components/RepoCard";
import "./index.scss";
import Loader from "../../components/Loader";

const options = [
  { value: "users", label: "Users" },
  { value: "repositories", label: "Repositories" },
];

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { data, loading, queryText } = useAppSelector(
    (state) => state.DataFormSubmitReducer
  );
  const [results, setResults] = useState<any>([]);
  const [value, setValue] = useState<string | any>("");
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  }>(options[0]);

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      if (query.length >= 3) {
        dispatch(fetchDataSearch({ query, type: selectedOption.value }));
      }
    }, 800),
    [dispatch, selectedOption.value]
  );

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    debouncedSearch(inputValue);
  };

  const handleDropDownOnChange = (e: any): void => {
    const selectedValue = e.target.value;

    setSelectedOption((prevSelectedOption: any) => {
      if (prevSelectedOption.value !== selectedValue) {
        // Only update if the value is different
        return options.find((option) => option.value === selectedValue);
      }
      return prevSelectedOption;
    });
  };

  useEffect(() => {
    if (value.length >= 3) {
      debouncedSearch(value);
      setResults([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption.value]);

  useEffect(() => {
    if (data.items.length) {
      setResults(data.items);
    }
  }, [data.items]);

  const renderResults = () => {
    if (selectedOption.value === "users")
      return results.map((element: any) => (
        <UserCard
          key={element.login}
          name={element.login}
          url={element.html_url}
          ownerAvatar={element.avatar_url}
          bio={element.bio}
          location={element.location}
          repos={element.repository_count}
          followers={element.followers}
        />
      ));
    return results.map((element: any) => (
      <RepoCard
        key={element.full_name}
        fullName={element.full_name}
        ownerName={element.owner?.login}
        language={element.language}
        description={element.description}
        stars={element.stargazers_count}
        forks={element.forks_count}
        name={element.name}
        url={element.html_url}
      />
    ));
  };

  return (
    <div className="search-page-container">
      <div
        className={`search-wrapper ${
          value.length >= 3 ? "Active-result" : " "
        } `}
      >
        <Header
          icon={GitHubIcon}
          title="GitHub Searcher"
          subtitle="Search users or repositories below"
        />

        <div className="search-input">
          <TextInput
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChangeValue}
          />

          <SelectInput
            options={options}
            value={selectedOption.value}
            onChange={handleDropDownOnChange}
          />
        </div>
      </div>

      <div className="search-result-wrapper">
        {loading ? (
          <Loader />
        ) : results.length > 0 && value.length >= 3 ? (
          renderResults()
        ) : results.length === 0 ? (
          "Not Data Available "
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default SearchPage;
