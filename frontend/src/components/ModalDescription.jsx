import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

export default function ModalDescription({ description, title }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      {description && description.length > 335 ? (
        <Button onClick={handleClickOpen("paper")} sx={{ marginLeft: "80%" }}>
          <OpenInFullIcon fontSize="1rem" color="primary" />
        </Button>
      ) : null}

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={{
            textAlign: "center",
            backgroundColor: "#FDFBE2",
            color: "#C90D56",
          }}
        >
          {title.english ? title.english : title.romaji}
        </DialogTitle>
        <DialogContent
          dividers={scroll === "paper"}
          sx={{ backgroundColor: "#FDFBE2" }}
        >
          <DialogContentText
            sx={{ textAlign: "justify", color: "#454545" }}
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            dangerouslySetInnerHTML={{
              __html: (() => {
                return description;
              })(),
            }}
          />
        </DialogContent>

        <Button
          onClick={handleClose}
          sx={{ backgroundColor: "#FDFBE2", color: "#C90D56" }}
        >
          Close
        </Button>
      </Dialog>
    </>
  );
}
