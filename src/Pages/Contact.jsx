import React, { useState } from "react"

const Contact = () => {
  const [hovered, setHovered] = useState(null)

  const socials = [
    {
      id: "gmail",
      label: "Gmail",
      img: "/gmail.png",
      href: "mailto:itspiyush@gmail.com",
      external: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      img: "/linkedin.png",
      href: "https://www.linkedin.com/in/piyush-tomar-446334285/",
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      img: "/github.png",
      href: "https://github.com/piyush-tomarr",
      external: true,
    },
    {
      id: "leetcode",
      label: "LeetCode",
      img: "/leetcode.png",
      href: "https://leetcode.com/u/itspiyush194/",
      external: true,
    },
    {
      id: "x",
      label: "X",
      img: "/x.png",
      href: "https://x.com/itspiyush194",
      external: true,
    },
  ]

  return (
    <footer
    id="contact"
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #fff5f5 0%, #ffffff 60%, #fff0f0 100%)",
        borderTop: "1.5px solid #fecaca",
        marginTop: "5rem",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background accent */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-40px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2.5rem 2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.8rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {/* Left: Branding */}
          <div>
            <h2
              style={{
                fontSize: "1.35rem",
                fontWeight: "700",
                color: "#dc2626",
                letterSpacing: "-0.5px",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Let's Connect
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "0.82rem",
                marginTop: "0.35rem",
                letterSpacing: "0.3px",
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
              }}
            >
              Open for opportunities, collaborations &amp; discussions
            </p>
          </div>

          {/* Center: Email pill */}
          <a
            href="mailto:itspiyush@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.55rem",
              padding: "0.5rem 1.1rem",
              borderRadius: "999px",
              border: "1.5px solid #fca5a5",
              background: hovered === "email" ? "#fef2f2" : "#fff",
              color: hovered === "email" ? "#dc2626" : "#374151",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontFamily: "'Georgia', serif",
              transition: "all 0.2s ease",
              boxShadow: hovered === "email"
                ? "0 4px 16px rgba(220,38,38,0.12)"
                : "0 1px 4px rgba(0,0,0,0.06)",
              letterSpacing: "0.1px",
            }}
            onMouseEnter={() => setHovered("email")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="/gmail.png"
              alt="Gmail"
              style={{ width: "18px", height: "18px", objectFit: "contain" }}
            />
            <span>itspiyush@gmail.com</span>
          </a>

          {/* Right: Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {socials.map(({ id, label, img, href, external }) => (
              <a
                key={id}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                title={label}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  border: "1.5px solid",
                  borderColor: hovered === id ? "#fca5a5" : "#f3f4f6",
                  background: hovered === id ? "#fef2f2" : "#fff",
                  boxShadow: hovered === id
                    ? "0 6px 20px rgba(220,38,38,0.13)"
                    : "0 1px 4px rgba(0,0,0,0.05)",
                  transform: hovered === id ? "translateY(-3px) scale(1.08)" : "translateY(0) scale(1)",
                  transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                  textDecoration: "none",
                }}
              >
                <img
                  src={img}
                  alt={label}
                  style={{
                    width: "22px",
                    height: "22px",
                    objectFit: "contain",
                    filter: hovered === id ? "none" : "grayscale(30%)",
                    transition: "filter 0.2s ease",
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #fecaca 30%, #fecaca 70%, transparent)",
          }}
        />

        {/* Bottom: Copyright */}
        <div
          style={{
            fontSize: "0.75rem",
            color: "#d1d5db",
            letterSpacing: "0.5px",
            fontFamily: "'Georgia', serif",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()}&nbsp;
          <span style={{ color: "#f87171", fontStyle: "italic" }}>Piyush Tomar</span>
          &nbsp;· Crafted with care
        </div>
      </div>
    </footer>
  )
}

export default Contact