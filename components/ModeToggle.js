import { useEffect } from "react";

const theme = { dark: "halloween", light: "winter" };

const ModeToggle = () => {
  useEffect(() => {
    /* Sets the data-theme attribute on html tag */
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme") === theme.dark ? theme.dark : theme.light
    );
  }, []);
  return (
    /* Component provided by daisyUI - https://daisyui.com/components/toggle/ */
    <>
      {/* <label for='modetoggle'>{localStorage.getItem("theme")}</label> */}
      <input
        name='modetoggle'
        type='checkbox'
        className='toggle'
        defaultChecked={
          typeof window !== "undefined" &&
          localStorage.getItem("theme") === theme.dark
        }
        onClick={(e) => {
          let newTheme = e.target.checked ? theme.dark : theme.light;
          localStorage.setItem("theme", newTheme);
          document.documentElement.setAttribute("data-theme", newTheme);
        }}
      />
    </>
  );
};

export default ModeToggle;
