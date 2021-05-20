import React from "react";

import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";

import "./styles.scss";

export default function SearchBar({ value, onChange, onClick, onKeyDown }) {
  return (
    <Form className="searchbar-container navbar-search d-block">
      <FormGroup className="test">
        <InputGroup
          style={{ flexWrap: "nowrap" }}
          className="input-group-alternative"
        >
          <Input
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="Pesquisa"
            type="text"
            maxLength="50"
          />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <i
                className="fas fa-search mr-1"
                onClick={onClick}
                style={{ cursor: "pointer" }}
              />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
