import React, { useState } from "react";
import "./styles/hero-section.css";
import { Link } from "react-router-dom";

// ✅ Import MUI components
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// ✅ Import icons from Lucide or MUI
import { Mail, Linkedin, Phone, Github } from "lucide-react";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="gsk-hero" id="about">
      {/* Decorative SVG shape */}
      <svg
        className="gsk-hero-svg"
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="110" cy="110" r="100" fill="#f72585" opacity="0.25" />
        <circle cx="110" cy="110" r="60" fill="#7209b7" opacity="5.12" />
      </svg>

      <div className="gsk-hero-content">
        <span className="gsk-hero-badge" aria-label="About">About</span>
        <span className="gsk-hero-eyebrow">Hi,</span>
        <h1 className="gsk-hero-title">
          <span className="gradient-text">I’m Mayowa Joseph Tomosori</span>
          <h1 class="developer-roles">
            <span class="role role-1">A Frontend Developer</span>
            <span class="role role-2">A Backend Developer</span>
            <span class="role role-3">A Full Stack Developer</span>
          </h1>
        </h1>

        <p className="gsk-hero-desc">
          I am a passionate full-stack web developer with experience in building visually
          stunning and highly functional applications. <br />
          <strong>
            From WordPress beginnings to mastering MERN stack, I constantly expand my
            skills and love solving real-world problems through technology.
          </strong>
        </p>

        <a
          href="#featured-projects"
          className="gsk-hero-cta info-btn"
          aria-label="Go to projects page"
        >
          View My Projects
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            className="cta-arrow"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* ✅ NEW BUTTONS SECTION */}
        <div className="hero-buttons">
          {/* Download CV Button */}
          <a
            href="https://drive.google.com/file/d/14-Bd_7R5VOnjL8AUveYw0s05L_Ei2x-v/view?usp=sharing" // Ensure CV is inside public folder
            download="My CV.pdf"
            className="gsk-hero-cta cv-btn"
          >
            Download CV
          </a>

          {/* Hire Me Button */}
          <button onClick={handleClickOpen} className="gsk-hero-cta hire-btn">
            Hire Me Now
          </button>
        </div>
        {/* ✅ END NEW BUTTONS */}
      </div>

      {/* ✅ Responsive Dialog */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          sx: {
            borderRadius: fullScreen ? 0 : 3,
            p: 2,
            maxWidth: fullScreen ? "100%" : 420,
            width: "90%",
            m: "auto",
          },
        }}
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#7209b7",
          }}
        >
          Let’s Connect
        </DialogTitle>

        <DialogContent>
          <DialogContentText
            sx={{
              textAlign: "left",
              fontSize: "1rem",
              color: "#333",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              mt: 1,
            }}
          >
            <span className="contact-item">
              <Mail className="contact-icon" />
              <span>tomosorijosephmayowa@gmail.com</span>
            </span>

            <span className="contact-item">
              <Phone className="contact-icon" />
              <span>+234 813 027 4215, 07053439570</span>
            </span>

            <span className="contact-item">
              <Linkedin className="contact-icon" />
              <a
                href="https://www.linkedin.com/in/mayowatomosori"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/mayowatomosori
              </a>
            </span>

            <span className="contact-item">
              <Github className="contact-icon" />
              <a
                href="https://github.com/Mayorwise001"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Mayorwise001
              </a>
            </span>
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center" }}>
          <button onClick={handleClose} className="gsk-hero-cta cv-btn">
            Close
          </button>
        </DialogActions>
      </Dialog>

      <svg
        className="gsk-hero-svg"
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="110" cy="110" r="100" fill="#e0e7ef" opacity="0.25" />
        <circle cx="110" cy="110" r="60" fill="#ff7900" opacity="0.12" />
      </svg>

<div className="gsk-hero-image-wrapper">
  <div className="gsk-image-border">
    <img
      src="My pic rem.jpg"
      alt="Portrait of Joseph Tomosori"
      className="gsk-hero-image"
    />
  </div>
</div>
    </section>
  );
};

export default HeroSection;
