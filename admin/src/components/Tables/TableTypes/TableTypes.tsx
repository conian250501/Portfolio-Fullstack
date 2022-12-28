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
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import FormTypes from "~/components/Modals/FormTypes";
import {
  deleteTypeProject,
  getAllTypeProject,
} from "~/featureds/project/projectActions";
import { getAllType } from "~/featureds/project/projectSlice";
import moment from "moment";
import ClearIcon from "@mui/icons-material/Clear";
import {
  CellCreateAt,
  CellDeleteIcon,
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

  const allTypeOfProject = useAppSelector(getAllType);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTypeProject());
  }, []);

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
      label: "",
    },
    {
      id: "delete",
      label: "",
    },
  ];

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  const handleDeleteType = (id: string | number) => {
    dispatch(deleteTypeProject(id));
  };

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
            {allTypeOfProject
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <CellId>{row._id}</CellId>
                  </TableCell>
                  <TableCell>
                    <CellName>{row.name}</CellName>
                  </TableCell>
                  <TableCell>
                    <CellCreateAt>
                      {moment(row.createdAt).fromNow()}
                    </CellCreateAt>
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
                  <TableCell>
                    <CellDeleteIcon onClick={() => handleDeleteType(row._id)}>
                      <ClearIcon className="icon" />
                    </CellDeleteIcon>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={allTypeOfProject.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TableTypes;
