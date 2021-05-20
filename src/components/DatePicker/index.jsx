import React from "react";
import ReactDatetime from "react-datetime";

import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

export default function Datepicker({ value, onChange, dateFormat="DD-MM-YYYY" }) {
  return (
    <>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-calendar-grid-58" />
            </InputGroupText>
          </InputGroupAddon>
          <ReactDatetime
            inputProps={{
              placeholder: "Selecione a data",
            }}
            timeFormat={false}
            dateFormat={dateFormat}
            onChange={onChange}
            value={value}
            input={true}
          />
        </InputGroup>
      </FormGroup>
    </>
  );
}
