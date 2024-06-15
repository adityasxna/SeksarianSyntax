import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "25px" }} />
        <Typography variant="h3" fontSize="23px">
          FinGuard
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Income vs Expenses"
            onClick={() => setSelected("Income vs Expenses")}
            style={{
              color: selected === "Income vs Expenses" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Income vs Expenses
          </Link>
        </Box>

        

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/ Budget vs Actual"
            onClick={() => setSelected(" Budget vs Actual")}
            style={{
              color: selected === " Budget vs Actual" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Budget vs Actual
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Transaction History"
            onClick={() => setSelected("Transaction History")}
            style={{
              color: selected === "Transaction History" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Transaction History
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/ Insights"
            onClick={() => setSelected(" Insights")}
            style={{
              color: selected === " Insights" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
           Insights
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Portfolio"
            onClick={() => setSelected("Portfolio")}
            style={{
              color: selected === "Portfolio" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
           Portfolio
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Cash flow"
            onClick={() => setSelected("Cash flow")}
            style={{
              color: selected === "Cash flow" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
           Cash flow 
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Utility Bills"
            onClick={() => setSelected("Utility Bills")}
            style={{
              color: selected === "Utility Bills" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
           Utility Bills
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Fiance Goals"
            onClick={() => setSelected("Fiance Goals")}
            style={{
              color: selected === "Fiance Goals" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
           Fiance Goals
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Budgeting Tools"
            onClick={() => setSelected("Budgeting Tools")}
            style={{
              color: selected === "Budgeting Tools" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
           Budgeting Tools
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Algorithms
          </Link>
        </Box>

      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
