import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Container,
  Chip,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import profileImg from "./photo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import ratef from "./ratefllow.png";
import screen from "./Screenshot 2026-02-07 214546.png";
import getSc from "./GethubScreen.png"
const ACCENT = "#43F5B5"; // قريب من الأخضر بالصورة
const BG1 = "#070B14";
const BG2 = "#0D1426";

export default function PortfolioHome() {
    const projects = [
  {
    title: "RateFlow — Financial Dashboard",
    subtitle: "React • Material UI • APIs • Charts",
    description:
      "A real-time financial dashboard for currency tracking, gold & silver prices, and market-style UI components.",
    live: "https://bright-raindrop-8ca2f6.netlify.app/",
    github: "https://github.com/mhd370/rateflow",
    // ضع صورة لاحقاً (اختياري)
    image: ratef,
    tags: ["Dashboard", "Finance", "MUI"],
  },
  {
    title: "Job Tracker Pro",
    subtitle: "React • UI • Productivity",
    description:
      "A job application tracking app to organize applications, statuses, notes, and follow-ups in a clean interface.",
    live: "https://starlit-pegasus-56183c.netlify.app/",
    github: "https://github.com/mhd370/job-tracker-pro",
    image: screen,
    tags: ["CRUD", "Productivity", "React"],
  },
  {
    title: "GitHub Portfolio",
    subtitle: "All Projects & Source Code",
    description:
      "Explore my repositories, React projects, and ongoing work — with clean commits and project structure.",
    live: "https://github.com/mhd370",
    github: "https://github.com/mhd370",
    image: getSc,
    tags: ["GitHub", "Code", "Portfolio"],
  },
];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "white",
        background: `radial-gradient(1200px 600px at 15% 15%, rgba(67,245,181,0.12), transparent 60%),
                     radial-gradient(900px 500px at 85% 45%, rgba(67,245,181,0.10), transparent 55%),
                     linear-gradient(135deg, ${BG1} 0%, ${BG2} 55%, ${BG1} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle diagonal shapes */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.03) 0%, transparent 40%, rgba(255,255,255,0.03) 100%)",
          transform: "skewY(-6deg)",
          transformOrigin: "top left",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* NAVBAR */}
      <AppBar
        elevation={0}
        position="sticky"
        sx={{
          background: "rgba(7, 11, 20, 0.55)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                background: ACCENT,
                display: "grid",
                placeItems: "center",
                color: "#051016",
                fontWeight: 900,
              }}
            >
            </Box>
            <Typography sx={{ fontWeight: 800, letterSpacing: 1 }}>
              MOHAMMED
              <Box component="span" sx={{ color: ACCENT, ml: 0.8 }}>
                DAKER
              </Box>
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }} />

          {/* Desktop links */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              opacity: 0.95,
            }}
          >
              
            <Chip
              label="Open to Work"
              size="small"
              sx={{
                borderRadius: 999,
                bgcolor: "rgba(67,245,181,0.12)",
                color: ACCENT,
                border: "1px solid rgba(67,245,181,0.35)",
                fontWeight: 700,
              }}
            />
          </Stack>

          {/* Mobile menu
          <IconButton sx={{ display: { xs: "inline-flex", md: "none" }, ml: 1 }}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton> */}
        </Toolbar>
      </AppBar>

      {/* HERO */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            py: { xs: 7, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: { xs: 5, md: 6 },
            alignItems: "center",
          }}
        >
          {/* Left */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 42, md: 56 },
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: 1,
              }}
            >
              HI, I’M{" "}
              <Box component="span" sx={{ color: ACCENT }}>
                MOHMED!
              </Box>
              <br />
              <Box component="span">REACT</Box>{" "}
              <Box component="span" sx={{ color: ACCENT }}>
                DEVELOPER
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2.2,
                maxWidth: 560,
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.75,
                fontSize: { xs: 14.5, md: 15.5 },
              }}
            >
              I build modern, scalable web applications — especially financial dashboards and
              data-driven interfaces — using <b>React.js</b>, <b>Material UI</b>, and real-time{" "}
              <b>API integrations</b>. My focus is clean UI, performance, and a great user experience.
            </Typography>

          <Stack
  direction={{ xs: "column", sm: "row" }}
  spacing={2}
  sx={{ mt: 4, alignItems: { xs: "stretch", sm: "center" } }}
>
  {/* Download CV */}
  <Button
    variant="contained"
    startIcon={<DownloadIcon />}
    href="/Mohammed_Aldaker_React_Frontend_Developer (1).pdf"
    download
    sx={{
      bgcolor: ACCENT,
      color: "#041018",
      fontWeight: 800,
      px: 3,
      py: 1.4,
      borderRadius: 2.2,
      boxShadow: "0 18px 40px rgba(67,245,181,0.18)",
      "&:hover": { bgcolor: "#31e7a6" },
    }}
  >
    Download CV
  </Button>

  {/* WhatsApp */}
  <Button
    component="a"
href="https://wa.me/963981584035?text=Hi%20Mohmed,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
    target="_blank"
    rel="noreferrer"
    startIcon={<WhatsAppIcon />}
    variant="text"
    sx={{
      color: "white",
      fontWeight: 700,
      textTransform: "none",
      px: 1,
      "&:hover": { color: ACCENT },
    }}
  >
    WhatsApp Me
  </Button>
  {/* Email */}
  <Button
    component="a"
    href="mailto:mohmedaldker.3@gmail.com?subject=React%20Opportunity%20-%20Mohmed%20Daker&body=Hi%20Mohmed,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity.%0D%0A%0D%0ABest%20regards,"
    startIcon={<EmailIcon />}
    variant="outlined"
    sx={{
      borderColor: "rgba(255,255,255,0.25)",
      color: "white",
      fontWeight: 800,
      borderRadius: 2,
      px: 2.6,
      py: 1.2,
      "&:hover": { borderColor: ACCENT, color: ACCENT },
    }}
  >
    Email Me
  </Button>
</Stack>


            <Stack direction="row" spacing={1.2} sx={{ mt: 3, flexWrap: "wrap" }}>
              {["React.js", "JavaScript", "Material UI", "REST APIs", "Dashboards"].map((s) => (
                <Chip
                  key={s}
                  label={s}
                  size="small"
                  sx={{
                    borderRadius: 999,
                    bgcolor: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Right: photo frame */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box
              sx={{
                width: { xs: 290, sm: 340, md: 380 },
                aspectRatio: "1 / 1",
                position: "relative",
                borderRadius: 6,
                display: "grid",
                placeItems: "center",
              }}
            >
              {/* Outer neon frame (rounded-hex vibe) */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 8,
                  background: `linear-gradient(135deg, rgba(67,245,181,0.95), rgba(67,245,181,0.2))`,
                  filter: "drop-shadow(0 20px 60px rgba(67,245,181,0.18))",
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 96% 25%, 96% 75%, 75% 94%, 25% 94%, 4% 75%, 4% 25%)",
                }}
              />
              {/* Inner dark frame */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 10,
                  borderRadius: 8,
                  bgcolor: "rgba(7,11,20,0.88)",
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 96% 25%, 96% 75%, 75% 94%, 25% 94%, 4% 75%, 4% 25%)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              />
              {/* Photo */}
              <Box
                component="img"
                src={profileImg}
                alt="profile"
                sx={{
                  width: "78%",
                  height: "78%",
                  objectFit: "cover",
                  borderRadius: 6,
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 96% 25%, 96% 75%, 75% 94%, 25% 94%, 4% 75%, 4% 25%)",
                  position: "relative",
                  zIndex: 1,
                  filter: "contrast(1.05) saturate(1.05)",
                }}
              />

              {/* Corner brackets */}
              {[
                { top: 16, left: 18, rotate: 0 },
                { top: 16, right: 18, rotate: 90 },
                { bottom: 16, right: 18, rotate: 180 },
                { bottom: 16, left: 18, rotate: 270 },
              ].map((p, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "absolute",
                    width: 60,
                    height: 60,
                    border: `3px solid ${ACCENT}`,
                    borderRight: "none",
                    borderBottom: "none",
                    borderRadius: 2,
                    opacity: 0.85,
                    transform: `rotate(${p.rotate}deg)`,
                    ...(p.top !== undefined ? { top: p.top } : {}),
                    ...(p.bottom !== undefined ? { bottom: p.bottom } : {}),
                    ...(p.left !== undefined ? { left: p.left } : {}),
                    ...(p.right !== undefined ? { right: p.right } : {}),
                    zIndex: 2,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
      {/* PROJECTS */}
<Box id="projects" sx={{ pb: { xs: 8, md: 10 } }}>
  <Container maxWidth="lg">
    <Box sx={{ mb: 3 }}>
      <Typography
        sx={{
          fontSize: { xs: 28, md: 34 },
          fontWeight: 900,
          letterSpacing: 0.5,
        }}
      >
        Featured <Box component="span" sx={{ color: ACCENT }}>Projects</Box>
      </Typography>
      <Typography sx={{ mt: 1, color: "rgba(255,255,255,0.72)", maxWidth: 680, lineHeight: 1.7 }}>
        A selection of real-world React applications I’ve built — focusing on clean UI, dashboard experiences,
        and practical functionality.
      </Typography>
    </Box>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: 2.2,
      }}
    >
      {projects.map((p) => (
        <Box
          key={p.title}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.10)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
            backdropFilter: "blur(10px)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.35)",
            transition: "transform .18s ease, border-color .18s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              borderColor: "rgba(67,245,181,0.35)",
            },
          }}
        >
          {/* Thumbnail */}
          <Box
            sx={{
              height: 170,
              position: "relative",
              background:
                "radial-gradient(600px 160px at 30% 20%, rgba(67,245,181,0.18), transparent 60%), linear-gradient(135deg, rgba(7,11,20,0.9), rgba(13,20,38,0.9))",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* If image exists in public, it will show, else just keep the gradient */}
            <Box
              component="img"
              src={p.image}
              alt={p.title}
              onError={(e) => (e.currentTarget.style.display = "none")}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.9,
                mixBlendMode: "screen",
              }}
            />

            <Box sx={{ position: "absolute", inset: 0, p: 2 }}>
              <Typography sx={{ fontWeight: 900, letterSpacing: 0.4 }}>
                
              </Typography>
              
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ p: 2.2 }}>
            <Typography sx={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7, minHeight: 72 }}>
              <Typography sx={{ mt: 0.6, fontSize: 13, color: "rgba(255,255,255,0.70)",fontWeight:"bold" }}>
                 {p.title}
               {p.subtitle}
              </Typography>
            
              {p.description}
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 1.6, flexWrap: "wrap" }}>
              {p.tags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  sx={{
                    borderRadius: 999,
                    bgcolor: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    mb: 1,
                  }}
                />
              ))}
            </Stack>

            <Stack direction="row" spacing={1.2} sx={{ mt: 1.6 }}>
              <Button
                component="a"
                href={p.live}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                sx={{
                  bgcolor: ACCENT,
                  color: "#041018",
                  fontWeight: 900,
                  borderRadius: 2,
                  px: 2,
                  "&:hover": { bgcolor: "#31e7a6" },
                }}
              >
                Live Demo
              </Button>

              <Button
                component="a"
                href={p.github}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.22)",
                  color: "white",
                  fontWeight: 800,
                  borderRadius: 2,
                  px: 2,
                  "&:hover": { borderColor: ACCENT, color: ACCENT },
                }}
              >
                GitHub
              </Button>
            </Stack>
          </Box>
        </Box>
      ))}
    </Box>
  </Container>
</Box>
{/* SKILLS */}
<Box id="skills" sx={{ pb: { xs: 8, md: 10 } }}>
  <Container maxWidth="lg">
    <Box sx={{ mb: 3 }}>
      <Typography
        sx={{
          fontSize: { xs: 28, md: 34 },
          fontWeight: 900,
          letterSpacing: 0.5,
        }}
      >
        Core <Box component="span" sx={{ color: ACCENT }}>Skills</Box>
      </Typography>
      <Typography sx={{ mt: 1, color: "rgba(255,255,255,0.72)", maxWidth: 680, lineHeight: 1.7 }}>
        Tools and technologies I use to build modern, scalable and responsive web applications.
      </Typography>
    </Box>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: 2.2,
      }}
    >
      {[
        {
          title: "Front-End",
          items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
        },
        {
          title: "UI & Frameworks",
          items: ["Material UI (MUI)", "Bootstrap", "Responsive Design", "UI Systems"],
        },
        {
          title: "Data & Tools",
          items: ["REST APIs", "Axios", "Recharts", "Git & GitHub", "Netlify"],
        },
      ].map((box) => (
        <Box
          key={box.title}
          sx={{
            borderRadius: 4,
            p: 2.2,
            border: "1px solid rgba(255,255,255,0.10)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
            backdropFilter: "blur(10px)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.35)",
          }}
        >
          <Typography sx={{ fontWeight: 900, letterSpacing: 0.4 }}>
            {box.title}
          </Typography>

          <Stack spacing={1.1} sx={{ mt: 1.6 }}>
            {box.items.map((it) => (
              <Box
                key={it}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <Box
                  sx={{
                    width: 9,
                    height: 9,
                    borderRadius: 999,
                    bgcolor: ACCENT,
                    boxShadow: "0 0 0 4px rgba(67,245,181,0.12)",
                    flexShrink: 0,
                  }}
                />
                <Typography sx={{ fontSize: 14.5 }}>{it}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  </Container>
</Box>
{/* CONTACT */}
<Box id="contact" sx={{ pb: { xs: 8, md: 10 } }}>
  <Container maxWidth="lg">
    <Box
      sx={{
        borderRadius: 4,
        p: { xs: 2.2, md: 3 },
        border: "1px solid rgba(255,255,255,0.10)",
        background:
          "radial-gradient(900px 260px at 20% 20%, rgba(67,245,181,0.14), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
        backdropFilter: "blur(10px)",
        boxShadow: "0 22px 60px rgba(0,0,0,0.35)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
          gap: 2.2,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 26, md: 30 },
              fontWeight: 900,
              letterSpacing: 0.4,
            }}
          >
            Let’s <Box component="span" sx={{ color: ACCENT }}>work together</Box>
          </Typography>
          <Typography sx={{ mt: 1, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: 640 }}>
            I’m open to Remote Front-End roles, freelance projects, or contract work.
            If you’d like a quick walkthrough of RateFlow or Job Tracker Pro, I’m happy to jump on a call.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} sx={{ mt: 2.2 }}>
            <Button
  component="a"
  href="mailto:mohmedaldker.3@gmail.com?subject=React%20Opportunity%20-%20Mohmed%20Daker&body=Hi%20Mohmed,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity.%0D%0A%0D%0ABest%20regards,"
  variant="contained"
  sx={{
    bgcolor: ACCENT,
    color: "#041018",
    fontWeight: 900,
    borderRadius: 2,
    px: 3,
    py: 1.3,
    "&:hover": { bgcolor: "#31e7a6" },
  }}
>
  Email Me
</Button>


            <Button
              component="a"
              href="https://www.linkedin.com/in/mohmed-daker-74131039b/"
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              sx={{
                borderColor: "rgba(255,255,255,0.22)",
                color: "white",
                fontWeight: 800,
                borderRadius: 2,
                px: 3,
                py: 1.3,
                "&:hover": { borderColor: ACCENT, color: ACCENT },
              }}
            >
              LinkedIn
            </Button>

            <Button
              component="a"
              href="https://github.com/mhd370"
              target="_blank"
              rel="noreferrer"
              variant="text"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontWeight: 800,
                "&:hover": { color: ACCENT },
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            borderRadius: 3,
            p: 2,
            border: "1px solid rgba(255,255,255,0.10)",
            bgcolor: "rgba(7,11,20,0.55)",
          }}
        >
          <Typography sx={{ fontWeight: 900 }}>Quick Links</Typography>
          <Stack spacing={1} sx={{ mt: 1.4 }}>
            <Button
              component="a"
              href="https://bright-raindrop-8ca2f6.netlify.app/"
              target="_blank"
              rel="noreferrer"
              variant="text"
              sx={{ justifyContent: "flex-start", color: "rgba(255,255,255,0.8)", "&:hover": { color: ACCENT } }}
            >
              • RateFlow Live Demo
            </Button>
            <Button
              component="a"
              href="https://starlit-pegasus-56183c.netlify.app/"
              target="_blank"
              rel="noreferrer"
              variant="text"
              sx={{ justifyContent: "flex-start", color: "rgba(255,255,255,0.8)", "&:hover": { color: ACCENT } }}
            >
              • Job Tracker Pro Live Demo
            </Button>
            <Button
              component="a"
              href="https://github.com/mhd370/job-tracker-pro"
              target="_blank"
              rel="noreferrer"
              variant="text"
              sx={{ justifyContent: "flex-start", color: "rgba(255,255,255,0.8)", "&:hover": { color: ACCENT } }}
            >
              • Job Tracker Pro Repo
            </Button>
            <Button
              component="a"
              href="https://github.com/mhd370/rateflow"
              target="_blank"
              rel="noreferrer"
              variant="text"
              sx={{ justifyContent: "flex-start", color: "rgba(255,255,255,0.8)", "&:hover": { color: ACCENT } }}
            >
              • RateFlow Repo
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  </Container>
</Box>
{/* FOOTER */}
<Box
  sx={{
    borderTop: "1px solid rgba(255,255,255,0.08)",
    py: 3,
    mt: 4,
  }}
>
  <Container
    maxWidth="lg"
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 2,
    }}
  >
    <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>
      © {new Date().getFullYear()} Mohmed Daker — React Developer
    </Typography>

    <Stack direction="row" spacing={1.2}>
              {/* whatsApp with message */}

      <IconButton
        component="a"
href="https://wa.me/963981584035?text=Hi%20Mohmed,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
        target="_blank"
        sx={{ color: "white", "&:hover": { color: ACCENT } }}
      >
        <WhatsAppIcon />
      </IconButton>
      {/* LINKED IN  */}

      <IconButton
        component="a"
        href="https://www.linkedin.com/in/mohmed-daker-74131039b/"
        target="_blank"
        sx={{ color: "white", "&:hover": { color: ACCENT } }}
      >
        <LinkedInIcon />
      </IconButton>
      {/* INSTGRAM  PROFILE */}

      <IconButton
        component="a"
        href="https://www.instagram.com/mhd_daker?igsh=M3NnOHF2bDc1eWhz&utm_source=qr"
        target="_blank"
        sx={{ color: "white", "&:hover": { color: ACCENT } }}
      >
        <InstagramIcon />
      </IconButton>
      {/* FACEBOOK */}

      <IconButton
        component="a"
        href="https://www.facebook.com/share/14WrFBUAuo2/?mibextid=wwXIfr"
        target="_blank"
        sx={{ color: "white", "&:hover": { color: ACCENT } }}
      >
        <FacebookIcon />
      </IconButton>
      
      {/* Email with message */}
      <IconButton
        component="a"
        href="mailto:mohmedaldker.3@gmail.com?subject=React%20Opportunity%20-%20Mohmed%20Daker&body=Hi%20Mohmed,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity.%0D%0A%0D%0ABest%20regards,"
        sx={{ color: "white", "&:hover": { color: ACCENT } }}
      >
        <EmailIcon />
      </IconButton>
    </Stack>
  </Container>
</Box>



    </Box>
  );
}
