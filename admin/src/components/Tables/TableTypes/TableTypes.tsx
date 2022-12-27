import DesignServicesIcon from "@mui/icons-material/DesignServices";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React from "react";
import FormTypes from "~/components/Modals/FormTypes";
import {
  CellCreateAt,
  CellEditIcon,
  CellId,
  CellName,
} from "./tableTypesStyles";

interface Column {
  id: string;
  label: string;
}
interface Data {
  id: number | string;
  name: string;
  createdAt: string;
}
type Props = {};

const TableTypes = (props: Props) => {
  const [page, setPage] = React.useState(0);
  const [openForm, setOpenForm] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns: readonly Column[] = [
    {
      id: "id",
      label: "Id",
    },
    {
      id: "name",
      label: "Type for project",
    },
    {
      id: "createAt",
      label: "Create At",
    },
    {
      id: "edit",
      label: "Edit",
    },
  ];

  const rows: Data[] = [
    {
      id: 1,
      name: "poster",
      createdAt: "12-12-2022",
    },
    {
      id: 2,
      name: "web-code",
      createdAt: "12-12-2022",
    },
    {
      id: 3,
      name: "web-design",
      createdAt: "12-12-2022",
    },
  ];
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <>
      <TableContainer
        sx={{ maxHeight: 440, borderRadius: "6px", marginTop: "12px" }}
      >
        <Table
          // stickyHeader
          aria-label="sticky table"
          sx={{ background: "#fff" }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <CellId>{row.id}</CellId>
                  </TableCell>
                  <TableCell>
                    <CellName>{row.name}</CellName>
                  </TableCell>
                  <TableCell>
                    <CellCreateAt>{row.createdAt}</CellCreateAt>
                  </TableCell>
                  <TableCell>
                    <CellEditIcon onClick={handleOpenForm}>
                      <DesignServicesIcon className="icon" />
                    </CellEditIcon>
                    <FormTypes
                      isOpen={openForm}
                      isUpdate={true}
                      onClose={handleCloseForm}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TableTypes;
