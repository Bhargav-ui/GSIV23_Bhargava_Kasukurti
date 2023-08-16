import React from "react";
import { styled } from "@mui/material/styles";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledTextField = styled(TextField)`
  background: #dfdfdf;
  border-radius: 16px;
  width: 300px;
  margin: 0;

  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

const Topbar = ({ searchHandler, title }) => {
  const navigator = useNavigate();

  const searchFieldHndler = (e) => {
    console.log("value", e.target.value);
    searchHandler(e.target.value);
  };

  const pageRedirect = () => {
    navigator(`/`);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        boxShadow: "0px 2px 3px #9b9b9b",
      }}
    >
      {searchHandler ? (
        <StyledTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          // disableUnderline={false}
          name="name"
          autoFocus
          onChange={searchFieldHndler}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <h5 style={{ color: "#9b9b9b", margin: "0" }}>{title}</h5>
      )}
      <div onClick={pageRedirect} style={{ cursor: "pointer" }}>
        <HomeIcon />
      </div>
    </div>
  );
};

export default Topbar;
