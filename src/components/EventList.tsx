import {
  ButtonGroup,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Event, events } from "../mock/event";
import Private from "./Private";
import { Action } from "../mock/user";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const EventList = () => {
  const EventRow = (event: Event) => {
    return (
      <TableRow key={event.id}>
        <TableCell>{event.title}</TableCell>
        <TableCell align="right">
          {event.description || "no description"}
        </TableCell>
        <TableCell align="center">
          <ButtonGroup>
            <Private action={Action.delete} subject={event.type}>
              <IconButton color="error">
                <DeleteIcon />
              </IconButton>
            </Private>
            <Private action={Action.update} subject={event.type}>
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
            </Private>
          </ButtonGroup>
        </TableCell>
      </TableRow>
    );
  };
  return (
    <Stack>
      <Typography variant="h2">Event list</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} width={"100%"}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <Private
                key={event.id}
                action={Action.read}
                subject={event.type}
              >
                <EventRow {...event} />
              </Private>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default EventList;
