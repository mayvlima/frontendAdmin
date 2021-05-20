import React, { useState } from "react";
import Autosuggest from 'react-autosuggest';

import "./style.scss"

export default function AutoSuggest({ arraySuggestions, onChange, onKeyDown, value, className, }) {
  const [suggestions, setSuggestions] = useState([]);

  const inputProps = {
    placeholder: "Buscar...",
    value,
    onChange,
    onKeyDown,
  };

  function onSuggestionsFetchRequested({ value }) {
    const newSuggestions = getSuggestions(value);
    setSuggestions(newSuggestions);
  }

  function escapeRegexCharacters(str) {
    if (!str)
      return "";

    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (!escapedValue || !arraySuggestions || arraySuggestions.length === 0)
      return [];

    const regex = new RegExp('^' + escapedValue, 'i');

    return arraySuggestions.filter(suggest => regex.test(suggest.name));
  }

  function renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}
