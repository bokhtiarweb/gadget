import { useEffect } from "react";

const DynamiTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default DynamiTitle;
