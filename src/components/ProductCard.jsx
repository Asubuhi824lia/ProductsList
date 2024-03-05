import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

export default function ProductCard({ product }) {
  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{
        boxShadow: "lg",
        width: 400,
        maxWidth: "100%",
        // to make the demo resizeable
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      {product.brand && (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Chip size="sm" variant="soft">
            {product.brand}
          </Chip>
        </Box>
      )}
      <div>
        <Typography level="title-lg">{product.price} ₽</Typography>
      </div>
      <CardContent>
        <Typography level="body-md">{product.product}</Typography>
      </CardContent>
    </Card>
  );
}
