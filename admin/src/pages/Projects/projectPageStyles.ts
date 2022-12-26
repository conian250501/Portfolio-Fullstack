import { MenuItem, Select, styled, TextField } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  padding: theme.mixins.toolbar.padding,
}));
export const Heading = styled("div")(({ theme }) => ({
  fontSize: "22px",
  fontWeight: 600,
  marginBottom: 12,
}));

export const InputForm = styled(TextField)(({ theme }) => ({}));
export const InputImgage = styled("input")(({ theme }) => ({}));
export const LabelImage = styled("label")(({ theme }) => ({}));
export const SelectType = styled(Select)(({ theme }) => ({}));
export const SelectItem = styled(MenuItem)(({ theme }) => ({}));
