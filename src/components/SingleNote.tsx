import styled from "styled-components";
import { useContext, useState } from "react";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SingleNoteProps } from "../extras/types";
import React from "react";
import { NotesContext } from "../store/NoteContext";

const MainLayout = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  border: 1px grey solid;
  background-color: #f3f33b;
  padding: 10px;
  &:hover {
    background-color: lightblue;
  }
`;

const CountLayout = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const HeadingLayout = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function SingleNote(props: SingleNoteProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { selectedNote, setSelectedNote } = useContext(NotesContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function deleteNote(): void {
    localStorage.removeItem(props.NoteKey);
    props.deleteTriggered(true);
    handleClose();
    console.log("NoteIdToBeDeleted : " + props.NoteKey);
    console.log("ItemToBeDeleted : " + localStorage.getItem(props.NoteKey));
    console.log("Note " + props.NoteKey + " Deleted SuccessFully..");
  }

  function openNote(): void {
    setSelectedNote(props.NoteContent);
    props.openTriggered(true);
    handleClose();
    console.log("Open Note Button Fired from SingleNote");
  }

  const ActionsMenu = (
    <React.Fragment>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={openNote}>Open Note</MenuItem>
        <MenuItem onClick={deleteNote}>Delete Note</MenuItem>
        <MenuItem onClick={handleClose}>Share Note</MenuItem>
        <MenuItem onClick={handleClose}>Copy Note</MenuItem>
      </Menu>
    </React.Fragment>
  );

  return (
    <div>
      {ActionsMenu}
      <MainLayout>
        <HeadingLayout>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {props.NoteHeading}
          </Typography>
          <IconButton
            id="basic-menu"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </HeadingLayout>
        <Typography
          sx={{
            fontSize: "12px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {props.NoteContent}
        </Typography>

        <Typography
          sx={{ marginTop: "8px", fontWeight: "bold", fontSize: "10px" }}
        >
          Created at : {props.CreatedAt} | {props.LastModified}
        </Typography>

        <CountLayout>
          <Typography sx={{ fontWeight: "bold", fontSize: "10px" }}>
            char : {props.CharCount}
          </Typography>

          <Typography sx={{ fontWeight: "bold", fontSize: "10px" }}>
            word : {props.WordCount}
          </Typography>

          <Typography sx={{ fontWeight: "bold", fontSize: "10px" }}>
            Lines : {props.LineCount}
          </Typography>
        </CountLayout>
      </MainLayout>
    </div>
  );
}

export default SingleNote;
