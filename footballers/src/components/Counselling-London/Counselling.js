import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import Sheet from "@mui/joy/Sheet";
import { Grid } from "@mui/joy";
import Div from "../../shared/Div/Div";

const Counselling = () => {
  return (
    <Box
      sx={{
        width: "80%",
        position: "relative",
        margin: "auto",
        overflow: { xs: "auto", sm: "initial" },
      }}
    >
      <Grid item>
        <Div sx={{ padding: "20px" }}>
          <h1>Counselling in London</h1>
        </Div>
        <Card orientation="horizontal"
        sx={{
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          resize: 'horizontal',
        }}>
          <AspectRatio flex ratio="1" minHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg"
              //   srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent sx={{ flex: "30%" }}>
            <h2>Alexandra Sherley</h2>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              Psychotherapist MSc, MBACP
            </Typography>
            <Typography>
              Starting counselling or psychotherapy can be a major decision and
              finding a therapist who feels right for you is really important.
              Therapy is about finding a safe and containing space to explore
              together whatever is concerning you – without judgement. It is a
              chance to work collaboratively to make sense of painful or
              difficult feelings. I hold an MSc in Psychodynamic Counselling and
              Psychotherapy from Birkbeck,
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "10%" }}>
            <h1>020 4538 8458</h1>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              Email
            </Button>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              View
            </Button>
          </CardContent>
        </Card>

        <Card orientation="horizontal"
        sx={{
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          resize: 'horizontal',
        }}>
          <AspectRatio flex ratio="1" minHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg"
              alt="image"
            />
          </AspectRatio>
          <CardContent sx={{ flex: "30%" }}>
            <h2>Dr Katie Yon</h2>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
             Psychologist, PsychD, HCPC - Clin. Psych. (she, her)
            </Typography>
            <Typography>
              Starting counselling or psychotherapy can be a major decision and
              finding a therapist who feels right for you is really important.
              Therapy is about finding a safe and containing space to explore
              together whatever is concerning you – without judgement. It is a
              chance to work collaboratively to make sense of painful or
              difficult feelings. I hold an MSc in Psychodynamic Counselling and
              Psychotherapy from Birkbeck,
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "10%" }}>
            <h1>020 4538 1487</h1>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              Email
            </Button>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              View
            </Button>
          </CardContent>
        </Card>

        <Card orientation="horizontal"
        sx={{
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          resize: 'horizontal',
        }}>
          <AspectRatio flex ratio="1" minHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg"
              //   srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent sx={{ flex: "30%" }}>
            <h2>Raquel Navarro Martinez</h2>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              MSc
            </Typography>
            <Typography>
              Starting counselling or psychotherapy can be a major decision and
              finding a therapist who feels right for you is really important.
              Therapy is about finding a safe and containing space to explore
              together whatever is concerning you – without judgement. It is a
              chance to work collaboratively to make sense of painful or
              difficult feelings. I hold an MSc in Psychodynamic Counselling and
              Psychotherapy from Birkbeck,
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "10%" }}>
            <h1>020 4538 4677</h1>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              Email
            </Button>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              View
            </Button>
          </CardContent>
        </Card>

        <Card orientation="horizontal"
        sx={{
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          resize: 'horizontal',
        }}>
          <AspectRatio flex ratio="1" minHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg"
              alt=""
            />
          </AspectRatio>
          <CardContent sx={{ flex: "30%" }}>
            <h2>Dr Erika Annabelle Pratte</h2>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              Psychologist, PhD, HCPC - Couns. Psych.
            </Typography>
            <Typography>
              Starting counselling or psychotherapy can be a major decision and
              finding a therapist who feels right for you is really important.
              Therapy is about finding a safe and containing space to explore
              together whatever is concerning you – without judgement. It is a
              chance to work collaboratively to make sense of painful or
              difficult feelings. I hold an MSc in Psychodynamic Counselling and
              Psychotherapy from Birkbeck,
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "10%" }}>
            <h1>020 4538 3005</h1>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              Email
            </Button>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              View
            </Button>
          </CardContent>
        </Card>

        <Card orientation="horizontal"
        sx={{
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          resize: 'horizontal',
        }}>
          <AspectRatio flex ratio="1" minHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg"
              alt=""
            />
          </AspectRatio>
          <CardContent sx={{ flex: "30%" }}>
            <h2>Sarah Keller</h2>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              Counsellor, MBACP
            </Typography>
            <Typography>
              Starting counselling or psychotherapy can be a major decision and
              finding a therapist who feels right for you is really important.
              Therapy is about finding a safe and containing space to explore
              together whatever is concerning you – without judgement. It is a
              chance to work collaboratively to make sense of painful or
              difficult feelings. I hold an MSc in Psychodynamic Counselling and
              Psychotherapy from Birkbeck,
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "10%" }}>
            <h1>01895 545631</h1>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              Email
            </Button>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              View
            </Button>
          </CardContent>
        </Card>

        <Card orientation="horizontal"
        sx={{
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          resize: 'horizontal',
        }}>
          <AspectRatio flex ratio="1" minHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg"
              alt=""
            />
          </AspectRatio>
          <CardContent sx={{ flex: "30%" }}>
            <h2>The Fitzrovia Psychology Clinic</h2>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              Psychologist, PsychD, HCPC - Clin. Psych.
            </Typography>
            <Typography>
              Starting counselling or psychotherapy can be a major decision and
              finding a therapist who feels right for you is really important.
              Therapy is about finding a safe and containing space to explore
              together whatever is concerning you – without judgement. It is a
              chance to work collaboratively to make sense of painful or
              difficult feelings. I hold an MSc in Psychodynamic Counselling and
              Psychotherapy from Birkbeck,
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "10%" }}>
            <h1>020 4538 4770</h1>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              Email
            </Button>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              View
            </Button>
          </CardContent>
        </Card>

        <Card orientation="horizontal"
        sx={{
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          resize: 'horizontal',
        }}>
          <AspectRatio flex ratio="1" minHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg"
              alt=""
            />
          </AspectRatio>
          <CardContent sx={{ flex: "30%" }}>
            <h2>Mihaela Rosca</h2>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              Counsellor, MBACP (she, her)
            </Typography>
            <Typography>
              Starting counselling or psychotherapy can be a major decision and
              finding a therapist who feels right for you is really important.
              Therapy is about finding a safe and containing space to explore
              together whatever is concerning you – without judgement. It is a
              chance to work collaboratively to make sense of painful or
              difficult feelings. I hold an MSc in Psychodynamic Counselling and
              Psychotherapy from Birkbeck,
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "10%" }}>
            <h1>020 4538 0536</h1>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              Email
            </Button>
            <Button
              variant="contained"
              color="primary" // 'primary' is usually associated with the theme's primary color
              sx={{
                backgroundColor: "white",
                color: "dark",
                border: '1px solid lightgray',
                padding:"10px",
                marginTop:2
              }}
            >
              View
            </Button>
          </CardContent>
        </Card>
     
      </Grid>
    </Box>
  );
};

export default Counselling;
