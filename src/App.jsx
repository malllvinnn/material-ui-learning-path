import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const CardMagic = styled(Card)(({ theme }) => ({
  borderRadius: "20px",
  [theme.breakpoints.up("mobile")]: {
    maxWidth: "327px",
  },
  [theme.breakpoints.up("tablet")]: {
    maxWidth: "384px",
  },
}));

const ContainerHFull = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled("label")(({ theme }) => ({
  backgroundColor: theme.palette.yellow.main,
  padding: "4px 12px",
  borderRadius: "4px",
  fontWeight: "700",
  [theme.breakpoints.up("mobile")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("tablet")]: {
    fontSize: "14px",
  },
}));

const TygPublished = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("tablet")]: {
    fontSize: "14px",
  },
}));

const TygTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  [theme.breakpoints.up("mobile")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("tablet")]: {
    fontSize: "24px",
  },
}));

const TygDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey.main,
  [theme.breakpoints.up("mobile")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("tablet")]: {
    fontSize: "16px",
  },
}));

const ImageProfile = styled("img")(() => ({
  width: "32px",
}));

export default function App() {
  return (
    <ContainerHFull maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <CardMagic>
          <CardContent
            sx={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <img src="/src/assets/blog-image.png" alt="Blog Image" />
            <Stack direction={"column"} alignItems={"flex-start"} gap={"12px"}>
              <Label>Learning</Label>
              <TygPublished>Published 21 Dec 2024</TygPublished>
              <TygTitle variant="h1">HTML & CSS Foundation</TygTitle>
              <TygDescription>
                These languages are the backbone of every website, defining
                structure, content, and presentation.
              </TygDescription>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
              <ImageProfile src="/src/assets/userpic.png" alt="User Picture" />
              <Typography fontWeight={"bold"} fontSize={"14px"}>
                Greeg Hooper
              </Typography>
            </Stack>
          </CardContent>
        </CardMagic>
      </Box>
    </ContainerHFull>
  );
}
