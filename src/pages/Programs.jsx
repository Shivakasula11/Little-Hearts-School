import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BrushIcon from "@mui/icons-material/Brush";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  ACADEMIC_PROGRAMS,
  STUDENT_DEVELOPMENT_PROGRAMS,
} from "../services/data";
import SEO from "../seo/SEO";

const DEV_ICON_MAP = {
  RecordVoiceOver: RecordVoiceOverIcon,
  AutoStories: AutoStoriesIcon,
  Brush: BrushIcon,
  MusicNote: MusicNoteIcon,
  Lightbulb: LightbulbIcon,
  EmojiEvents: EmojiEventsIcon,
  FitnessCenter: FitnessCenterIcon,
  Celebration: CelebrationIcon,
};

export default function Programs() {
  return (
    <Box sx={{ pt: 12, pb: 8 }}>
      <Box
        sx={{
          background:
            "linear-gradient(to right, rgba(224,242,254,0.6), rgba(255,241,242,0.5))",
          py: { xs: 6, md: 8 },
          px: 2,
          mb: 8,
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{ color: "secondary.main", fontWeight: 600, letterSpacing: 2 }}
          >
            Our Child Grooming Systems
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
              mt: 1,
              fontSize: { xs: "1.8rem", sm: "2.5rem" },
            }}
          >
            Academic Levels & Skill Programs
          </Typography>
          <Typography
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto", mt: 2 }}
          >
            Carefully curated, play-guided and state-aligned curricula designed
            to support continuous discovery from age 2 to 10+.
          </Typography>
        </Container>
      </Box>

      <SEO
        title="Academic Programs – Playgroup, Nursery, LKG, UKG, Primary"
        description="Explore Little Hearts Kindergarten School's academic programs: Playgroup (age 2-3), Nursery (3-4), LKG (4-5), UKG (5-6), and Primary School (Class 1-5) in Devarakonda."
        path="/programs"
      />

      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Academic Classes */}
          <Box>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  color: "primary.main",
                  mb: 1,
                  fontSize: { xs: "1.5rem", sm: "1.9rem" },
                }}
              >
                Classes & Grade Structures Offered
              </Typography>
              <Box
                sx={{
                  width: 60,
                  height: 4,
                  bgcolor: "warning.main",
                  mx: "auto",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", maxWidth: 550, mx: "auto" }}
              >
                Each classroom tier is equipped with dedicated child-safe
                materials, custom activity desks, and smart digital systems.
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {ACADEMIC_PROGRAMS.map((prog) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={prog.id}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s",
                      "&:hover": {
                        boxShadow: 8,
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        image={prog.image}
                        alt={prog.level}
                        sx={{ height: 220, objectFit: "cover" }}
                        loading="lazy"
                      />
                      <Chip
                        label={`Age: ${prog.ageGroup}`}
                        size="small"
                        sx={{
                          position: "absolute",
                          bottom: 12,
                          left: 12,
                          bgcolor: "rgba(255,255,255,0.95)",
                          fontFamily: '"Fredoka", sans-serif',
                          fontWeight: 600,
                          color: "primary.main",
                          fontSize: "0.7rem",
                        }}
                      />
                    </Box>
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        p: 3,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ color: "primary.main", fontSize: "1.2rem" }}
                      >
                        {prog.level}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.7 }}
                      >
                        {prog.description}
                      </Typography>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: '"Fredoka", sans-serif',
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            color: "#334155",
                            display: "block",
                            mb: 1,
                          }}
                        >
                          Core Developmental Pointers:
                        </Typography>
                        {prog.features.map((feat, i) => (
                          <Box
                            key={i}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              mb: 0.8,
                            }}
                          >
                            <CheckCircleOutlinedIcon
                              sx={{ fontSize: 16, color: "secondary.main" }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ color: "text.secondary" }}
                            >
                              {feat}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                    <Box sx={{ p: 3, pt: 0 }}>
                      <Button
                        component={RouterLink}
                        to="/admissions"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        sx={{
                          borderRadius: 3,
                          py: 1.2,
                          fontWeight: 600,
                          "&:hover": {
                            bgcolor: "secondary.main",
                            color: "#fff",
                          },
                        }}
                      >
                        Enquire for {prog.level.split(" ")[0]}
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Dev Programs */}
          <Box>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
              >
                The Little Hearts Edge
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "primary.main",
                  mt: 1,
                  mb: 1,
                  fontSize: { xs: "1.5rem", sm: "1.9rem" },
                }}
              >
                Student Skill Development Programs
              </Typography>
              <Box
                sx={{
                  width: 60,
                  height: 4,
                  bgcolor: "warning.main",
                  mx: "auto",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", maxWidth: 550, mx: "auto" }}
              >
                We complement main academic requirements with dynamic life skill
                channels that groom confidence, creativity, and fitness.
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {STUDENT_DEVELOPMENT_PROGRAMS.map((prog) => {
                const IconComp = DEV_ICON_MAP[prog.muiIcon] || FavoriteIcon;
                return (
                  <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={prog.id}>
                    <Card
                      sx={{
                        p: 3,
                        height: "100%",
                        bgcolor: "#f8fafc",
                        transition: "all 0.3s",
                        "&:hover": { bgcolor: "#fff", boxShadow: 6 },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 3,
                          bgcolor: "#ffe4e6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                        }}
                      >
                        <IconComp
                          sx={{ color: "secondary.main", fontSize: 22 }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: '"Fredoka", sans-serif',
                          fontWeight: 700,
                          color: "#1e293b",
                          mb: 1,
                          fontSize: "0.95rem",
                        }}
                      >
                        {prog.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.7 }}
                      >
                        {prog.description}
                      </Typography>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
