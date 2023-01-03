import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Box, Grid, Switch, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { ProfileUpdateTypes } from "~/common/types";
import { getProfile, updateProfile } from "~/featureds/profile/profileActions";
import {
  selectLoadingProfile,
  selectProfile,
} from "~/featureds/profile/profileSlice";
import {
  ButtonSubmit,
  Form,
  ImgPreview,
  InputForm,
  InputImage,
  IOSSwitch,
  LabelImage,
  SectionLeft,
  SectionRight,
} from "./formUpdateStyles";
type Props = {};

interface DataTypes {
  avatar: string;
  email: string;
  userName: string;
  nickName: string;
  phone: string;
  title: string;
  description: string;
  introduce: string;
  isAdmin: boolean;
}

const FromUpdate = (props: Props) => {
  const [newAvatar, setNewAvatar] = useState("");
  const dispatch = useAppDispatch();

  const profileData = useAppSelector(selectProfile);
  const loading = useAppSelector(selectLoadingProfile);
  const { register, handleSubmit, setValue } = useForm<DataTypes>();

  useEffect(() => {
    dispatch(getProfile());
    profileData && setNewAvatar(profileData.avatar);
    profileData && setValue("email", profileData.email);
    profileData && setValue("userName", profileData.userName);
    profileData && setValue("nickName", profileData.nickName);
    profileData && setValue("phone", profileData.phone);
    profileData && setValue("isAdmin", profileData.isAdmin);
    profileData && setValue("title", profileData.title);
    profileData && setValue("description", profileData.description);
    profileData && setValue("introduce", profileData.introduce);
  }, [dispatch, profileData?.avatar]);

  const handleChangeAvatar = (e: any) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      setNewAvatar(Reader.result as string);
    };
  };

  const handleUpdate = (data: DataTypes) => {
    const payload: ProfileUpdateTypes = { ...data, avatar: newAvatar };
    console.log(payload);
    dispatch(updateProfile(payload));
  };
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <Form onSubmit={handleSubmit(handleUpdate)}>
          <Grid container spacing={2}>
            <Grid item desktop={5} laptop={5} tablet={5} mobile={12}>
              <SectionLeft>
                <InputImage
                  type="file"
                  id="input_avatar"
                  hidden
                  accept="images/*"
                  onChange={handleChangeAvatar}
                />
                <ImgPreview>
                  <img
                    src={
                      newAvatar
                        ? newAvatar
                        : "/assets/images/avatar-placeholder.png"
                    }
                    alt=""
                  />
                  <LabelImage htmlFor="input_avatar" className="label_avatar">
                    <AddAPhotoIcon className="icon_upload" />
                    Upload photo
                  </LabelImage>
                </ImgPreview>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: 2 }}
                >
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                </Typography>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <IOSSwitch
                    focusVisibleClassName=".Mui-focusVisible"
                    disableRipple
                    defaultChecked
                    {...register("isAdmin")}
                  />
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "red",
                      marginLeft: 1,
                    }}
                  >
                    Active
                  </Typography>
                </Box>
              </SectionLeft>
            </Grid>
            <Grid item desktop={7} laptop={7} tablet={7} mobile={12}>
              <SectionRight>
                <Grid container spacing={2}>
                  <Grid item desktop={6} laptop={6} tablet={6} mobile={12}>
                    <InputForm
                      placeholder="your email..."
                      fullWidth
                      disabled
                      required
                      helperText={
                        <Typography
                          sx={{ fontSize: 14, fontWeight: 500, color: "red" }}
                        >
                          Your email
                        </Typography>
                      }
                      {...register("email")}
                    />
                    <InputForm
                      placeholder="your name..."
                      fullWidth
                      required
                      helperText={
                        <Typography
                          sx={{ fontSize: 14, fontWeight: 500, color: "red" }}
                        >
                          Your name
                        </Typography>
                      }
                      {...register("userName")}
                    />
                    <InputForm
                      fullWidth
                      required
                      {...register("nickName")}
                      helperText={
                        <Typography
                          sx={{ fontSize: 14, fontWeight: 500, color: "red" }}
                        >
                          Your nick name
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item desktop={6} laptop={6} tablet={6} mobile={12}>
                    <InputForm
                      placeholder="phone"
                      fullWidth
                      required
                      helperText={
                        <Typography
                          sx={{ fontSize: 14, fontWeight: 500, color: "red" }}
                        >
                          Your phone
                        </Typography>
                      }
                      {...register("phone")}
                    />

                    <InputForm
                      placeholder="Title profile..."
                      fullWidth
                      required
                      {...register("title")}
                      helperText={
                        <Typography
                          sx={{ fontSize: 14, fontWeight: 500, color: "red" }}
                        >
                          Your title profile
                        </Typography>
                      }
                    />
                    <InputForm
                      placeholder="Description profile"
                      multiline
                      fullWidth
                      required
                      helperText={
                        <Typography
                          sx={{ fontSize: 14, fontWeight: 500, color: "red" }}
                        >
                          Your description profile
                        </Typography>
                      }
                      {...register("description")}
                    />
                  </Grid>
                  <Grid item desktop={12} laptop={12} tablet={12} mobile={12}>
                    <InputForm
                      placeholder="Introduce myself..."
                      multiline
                      fullWidth
                      required
                      helperText={
                        <Typography
                          sx={{ fontSize: 14, fontWeight: 500, color: "red" }}
                        >
                          Your introduce profile
                        </Typography>
                      }
                      {...register("introduce")}
                    />
                  </Grid>
                </Grid>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginTop: "12px",
                  }}
                >
                  <ButtonSubmit type="submit">Save changes</ButtonSubmit>
                </Box>
              </SectionRight>
            </Grid>
          </Grid>
        </Form>
      )}

      <ToastContainer position="top-right" theme="dark" />
    </>
  );
};

export default FromUpdate;
