import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  InputAdornment,
  InputBaseClasses,
  InputLabel,
  Link,
  List,
  OutlinedInput,
  OutlinedInputClasses,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React from "react";
import SingleNote from "./SingleNote";
import { NoteObjectArray } from "../extras/types";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0px;
  height: 50px;
  z-index: 10;
  padding: 0em;
  border-radius: 0px;
  border: 1px solid lightgray;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: white;
  /* align-items: center;
  justify-content: space-between; */
`;

const MenuSection = styled.section`
  margin: 10px;
`;
const HeadingSection = styled.section``;

const MenuHeaderLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const MainLayoutDrawer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const MainLayout = styled.section`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;
const DummyLayout = styled.section``;

function UpNavigation() {
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState("Uncertain");
  const [showPassword, setShowPassword] = useState(false);
  const [noteSearchInput, setNoteSearchInput] = useState("");
  const handleClickShowPassword = () => setNoteSearchInput("");
  const [deleteTriggeredStatus, setDeleteTriggeredStatus] =
    useState<boolean>(false);
  const [noteOpened, setNoteOpened] = useState<boolean>(false);
  const [persistedNotes, setPersistedNotes] = useState<{ [key: string]: any }>(
    []
  );

  const searchInputRef = useRef<HTMLInputElement>(null);
  const getDeviceType = () => {
    var width = window.innerWidth;

    if (width <= 768) {
      setDevice("Mobile");
    } else if (width >= 768 && width <= 1024) {
      setDevice("Tablet");
    } else if (width >= 1024) {
      setDevice("Desktop");
    } else {
      setDevice("Uncertain");
    }
  };

  function fetchPersistedNotes(): { [key: string]: any } {
    const allValues: { [key: string]: any } = {};
    for (const key of Object.keys(localStorage)) {
      const value = localStorage.getItem(key);
      const parsedValue = JSON.parse(value!) || value;
      allValues[key] = parsedValue;
    }
    return allValues;
  }

  useEffect(() => {
    getDeviceType();
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    const storedValues = fetchPersistedNotes();
    setPersistedNotes(storedValues);
    console.log("useEffect Triggered in parent(UpNavigation");
  }, []);

  function deleteTriggered(status: boolean): void {
    setDeleteTriggeredStatus(!status);
    const storedValues = fetchPersistedNotes();
    setPersistedNotes(storedValues);
    console.log("deleteTriggeredStatus callback called in parent");
  }

  function noteOpenTriggered(status: boolean): void {
    //setNoteOpened(status);
    setOpen(false);
    console.log("noteOpenTriggered() called in UpNavigation..");
  }

  const toggleDrawer =
    (anchor: any, status: boolean) =>
    (event: { type: string; key: string }) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setOpen(false);
    };

  const drawerItemList = (anchor: string) => (
    <Box>
      <Box>
        <MainLayoutDrawer>
          <Button sx={{ marginTop: "10px" }} variant="contained">
            + Create New
          </Button>
          <FormControl
            sx={{ marginTop: "20px", marginBottom: "15px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-search">
              Search Notes
            </InputLabel>
            <OutlinedInput
              inputRef={searchInputRef}
              fullWidth
              id="outlined-adornment-search"
              value={noteSearchInput}
              onChange={(e) => setNoteSearchInput(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password serach"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {noteSearchInput.length > 0 ? <HighlightOffIcon /> : null}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          {Object.entries(persistedNotes)
            .sort()
            .map(([key, value]) => (
              <SingleNote
                key={key}
                NoteKey={key}
                deleteTriggered={deleteTriggered}
                openTriggered={noteOpenTriggered}
                NoteHeading={value[0]["content"]}
                NoteContent={value[0]["content"]}
                CreatedAt={value[1]["createdAt"]}
                LastModified={value[1]["createdAt"]}
                CharCount={value[0]["content"].trim().length}
                WordCount={value[0]["content"].split(" ").length}
                LineCount={value[0]["content"].split("\n").length}
              />
            ))}
        </MainLayoutDrawer>
      </Box>
    </Box>
  );

  const drawer = (
    <React.Fragment>
      <Drawer
        variant={
          device === "Desktop"
            ? "temporary"
            : device === "Uncertain"
            ? "temporary"
            : "temporary"
        }
        anchor={"left"}
        color="black"
        open={open}
        onClose={toggleDrawer("left", false)}
        PaperProps={{
          sx: {
            backgroundColor: "#f4f5f8",
            width: 320,
          },
        }}
      >
        {drawerItemList("left")}
      </Drawer>
    </React.Fragment>
  );

  return (
    <div>
      {drawer}
      <MainLayout>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon
            fontSize="medium"
            sx={{
              width: "32px",
              height: "32px",
              color: "black",
            }}
          />
        </IconButton>
        <h1>Quick Notepad++</h1>
        <DummyLayout />
      </MainLayout>
    </div>
  );
}

export default UpNavigation;
