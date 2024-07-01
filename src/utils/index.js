import toast from "react-hot-toast";

export const copyToClipboard = (
  text,
  successMessage = " Game link is copied. Let's share with friends!"
) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast(successMessage);
    })
    .catch((error) => {
      console.error("Error copying text to clipboard:", error);
    });
};
