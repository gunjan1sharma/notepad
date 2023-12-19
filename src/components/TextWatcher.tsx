import { Typography } from "@mui/material";
import styled from "styled-components";
import { TextWatcherProps } from "../extras/types";

const MainLayout = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const SelectedTextLayout = styled.div`
  margin: 20px;
  padding: 10px;
`;

function TextWatcher(props: TextWatcherProps) {
  return (
    <div>
      <MainLayout>
        <Typography sx={{ fontSize: 12 }}>
          Chars : <b>{props.char}</b>
        </Typography>
        <Typography sx={{ fontSize: 12 }}>
          Words : <b>{props.words}</b>
        </Typography>
        <Typography sx={{ fontSize: 12 }}>
          Lines : <b>{props.lines}</b>
        </Typography>
      </MainLayout>

      {props.selectedText.length > 0 ? (
        <SelectedTextLayout>
          <Typography sx={{ fontSize: 13, fontStyle: "italic" }}>
            "{props.selectedText}"
          </Typography>
        </SelectedTextLayout>
      ) : null}
    </div>
  );
}

export default TextWatcher;
