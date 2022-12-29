import DesignServicesIcon from "@mui/icons-material/DesignServices";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { ProjectTypes } from "~/common/types";
import FormTypes from "~/components/Modals/FormTypes";
import { getAllProject } from "~/featureds/project/projectActions";
import {
  selectAllProject,
  selectLoadingProject,
} from "~/featureds/project/projectSlice";
import ShowMoreText from "react-show-more-text";
import ClearIcon from "@mui/icons-material/Clear";

import {
  CellCreateAt,
  CellDeleteIcon,
  CellDescription,
  CellEditIcon,
  CellId,
  CellImage,
  CellName,
  CellTypeName,
} from "./tableProjectStyles";

interface Column {
  id: string;
  label: string;
}
interface Data {
  id: number | string;
  name: string;
  descriptiom: string;
  image: string;
  type: string[];
  technologies: [];
  createdAt: string;
}
type Props = {};

const TableProjects = (props: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectAllProject);
  const loadingProject = useAppSelector(selectLoadingProject);
  useEffect(() => {
    dispatch(getAllProject());
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
      label: "Name",
    },
    {
      id: "description",
      label: "Description",
    },
    {
      id: "image",
      label: "Image",
    },
    {
      id: "type",
      label: "Type",
    },
    {
      id: "technologies",
      label: "Technologies",
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
            {loadingProject ? (
              <tr>
                <td>loading...</td>
              </tr>
            ) : (
              projects.length >= 0 &&
              projects
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((project: ProjectTypes) => (
                  <TableRow key={project._id}>
                    <TableCell>
                      <CellId>{project._id}</CellId>
                    </TableCell>
                    <TableCell>
                      <CellName>{project.name}</CellName>
                    </TableCell>
                    <TableCell>
                      <ShowMoreText
                        lines={1}
                        more={
                          <Typography
                            sx={{
                              fontSize: "14px",
                              color: "blue",
                            }}
                          >
                            more
                          </Typography>
                        }
                        less={
                          <Typography
                            sx={{
                              fontSize: "14px",
                              color: "blue",
                            }}
                          >
                            less
                          </Typography>
                        }
                        className="content-css"
                        anchorClass="show-more-less-clickable"
                        // onClick={executeOnClick}
                        expanded={false}
                        width={160}
                        truncatedEndingComponent={"... "}
                      >
                        {project.description}
                      </ShowMoreText>
                    </TableCell>
                    <TableCell>
                      <CellImage>
                        <img src={project.image} alt="" />
                      </CellImage>
                    </TableCell>
                    <TableCell>
                      <CellTypeName>{project.type.name}</CellTypeName>
                    </TableCell>
                    <TableCell>
                      <CellCreateAt>{project.technologicals}</CellCreateAt>
                    </TableCell>
                    <TableCell>
                      <CellCreateAt>{project.createdAt}</CellCreateAt>
                    </TableCell>
                    <TableCell>
                      <CellEditIcon>
                        <DesignServicesIcon className="icon" />
                      </CellEditIcon>
                    </TableCell>
                    <TableCell>
                      <CellEditIcon>
                        <CellDeleteIcon>
                          <ClearIcon className="icon" />
                        </CellDeleteIcon>
                      </CellEditIcon>
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={projects.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TableProjects;
